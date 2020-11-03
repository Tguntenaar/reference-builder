import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  RefreshControl,
  View,
} from "react-native";
import RatingBox from "../../components/RatingBox";
import withUser from "../../contexts/withUser";
import withTabContext from "../../contexts/TabContext";
import NextButton from "../../components/NextButton";
import { width } from "../../constants/Utils";
import api from '../../apiwrapper';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    // flexGrow: 1,
  },
  buttonContainer: {
    width,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});

function getAverages(receivedEvaluations) {
  if (!receivedEvaluations) {
    console.log("Er zijn geen receivedEvaluations");
    return [];
  }
  /**
   * MAP EVALUATIONS NAAR ARRAY VAN RATINGS
   * MAP DAARNA REDUCE ALLE RATINGS MET DEZELFDE SKILL ID
   */
  
  // console.log('receivedEvaluations');
  // console.log(receivedEvaluations);
  const allRatings = receivedEvaluations
    .filter((evaluation) => evaluation?.ratings?.items) // Only evaluations that have ratings.
    .map((evaluation) => evaluation.ratings.items )
    .flat();

  return allRatings.reduce((final, data) => {
    const isAlready = final.find((value) => {
      return value.skillId === data.skillId;
    });

    if (!isAlready) {
      final.push(data);
      return final;
    }

    const index = final.indexOf(isAlready);
    const newGrade = parseFloat(final[index].grade) + parseFloat(data.grade);
    const newRating = {
      ...isAlready,
      grade: newGrade,
    };
    return {
      ...final,
      [index]: newRating,
    };
  }, []);
}
/**
 * TODO:
 * Ratings Schermen
 * 1. Data access patterns fixen get ratings by user / skill
 * 2. Data aggregation via lambda function triggered by adding a new Rating
 * 3.
 */
function RatingTab({ navigation, route, userContext, tabContext }) {
  let {
    averageRatings: { items: averageRatingsContext },
    receivedEvaluations: { items: receivedEvaluations },
  } = userContext;
// TODO: getTeam and what if no averages? create average same for getUser

  const template = [
    {
      id: "averageRatingId",
      grade: 8.4,
      skill: {
        id: "skillId",
        name: "Template Fake Skill",
        description: "lorem ipsum",
      },
    },
  ];
  // TODO: Remove dit zodra het werkt
  averageRatingsContext =
  averageRatingsContext && averageRatingsContext.length
    ? averageRatingsContext
    : template;
  // TODO: Remove dit zodra het werkt
  receivedEvaluations =
  receivedEvaluations && receivedEvaluations.length
    ? receivedEvaluations
    : [{ ratings: { items: template }}]; // list of evaluations
  
  
  const user = route.params?.personalRatings;
  const viewPersonalRatings = user !== undefined;
  // If route params set use those ratings FIXME: deze rating moet je dus ophalen
  // receivedEvaluations = viewPersonalRatings
  //   ? route.params?.personalRatings.receivedEvaluations.items
  //   : receivedEvaluations;

  /**
   * TODO: personalRatings is a user object
   * use user.id to get the full user object inclusief  'receivedEvaluations'
   *
   * TODO: same for team view
   */
  
  const [loadingRatings, setloadingRatings] = useState(viewPersonalRatings);
  const [averageRatings, setAverageRatings] = useState(getAverages(receivedEvaluations)) // TODO: use averageRatingsContext
  // Load the personal ratings
  useEffect(() => {
    if (tabContext.type === 'personal') {
      // effect
      api.getUser(user.id)
      .then((result) => {
        const { data: { getUser: { 
          averageRatings: { items }, // TODO: use averageRatings or getAverages(receivedEvaluations)
          receivedEvaluations: { items: receivedEvaluations }
        }}} = result;
        // 
        setAverageRatings(getAverages(receivedEvaluations));
        setloadingRatings(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return () => {
      // cleanup
    }
  }, [tabContext.value]);

  // Load the team
  useEffect(() => {
    if (tabContext.type === 'team') {
      // effect
      const team = tabContext.value;
      api.getTeam(team.id)
      .then((result) => {
        const { data: { getTeam: { 
          averageRatings: { items }, // TODO: use averageRatings or getAverages(receivedEvaluations)
          // receivedEvaluations: { items: receivedEvaluations }
        }}} = result;
        setAverageRatings(items);
        setloadingRatings(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return () => {
      // cleanup
    }
  }, [tabContext.value]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          marginTop: viewPersonalRatings ? 0 : 50,
          ...styles.scroll,
        }}
        refreshControl={
          <RefreshControl
            refreshing={userContext.refreshing}
            onRefresh={userContext.onRefresh}
          />
        }
      >
        {viewPersonalRatings ? (
          <View style={styles.buttonContainer}>
            <NextButton
              size={40}
              textSize={15}
              title="Evaluate"
              onPress={() =>
                navigation.navigate("EvaluateSliders", {
                  evaluationRequest: {
                    user: route.params?.personalRatings,
                    evaluator: {
                      id: userContext.id,
                      name: userContext.name,
                    },
                  },
                  manager: false, // Starts evaluation of manager
                })
              }
            />
          </View>
        ) : null}
        {loadingRatings ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : averageRatings.length ? (
          averageRatings.map((averageRating) => {
            return (
              <RatingBox
                key={averageRating.id}
                rating={averageRating}
                gradeColor="rgb(10,185,255)"
                onSeeDetails={() => {
                  navigation.navigate("RatingsDetailsScreen", {
                    rating: averageRating,
                  });
                }}
              />
            );
          })
        ) : (
          <Text>You dont have been rated yet </Text>
        )}
      </ScrollView>
    </>
  );
}

export default withUser(withTabContext(RatingTab));
