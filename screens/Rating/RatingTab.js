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
 *   
 * 1. Als skills.length > averagerRatings.length create average Ratings
 * 2. on create Rating -> create averages or update averages.
 * 3. Iets van syncing tussen 
  
  getTeam and what if no averages? create average same for getUser
  setUser en teamaverages vanuit app. (niet mooi maar werkt wel voor nu)
 */
function RatingTab({ navigation, route, userContext, tabContext }) {
  let {
    averageRatings: { items: averageUserRatings },
    receivedEvaluations: { items: receivedEvaluations },
  } = userContext;

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
  averageUserRatings =
  averageUserRatings && averageUserRatings.length
    ? averageUserRatings
    : template;
  // TODO: Remove dit zodra het werkt
  receivedEvaluations =
  receivedEvaluations && receivedEvaluations.length
    ? receivedEvaluations
    : [{ ratings: { items: template }}]; // list of evaluations
  
  
  const user = route.params?.otherUserRatings;
  const viewOtherUserRatings = user !== undefined;
  
  const [loadingRatings, setloadingRatings] = useState(viewOtherUserRatings);
  const [averageRatings, setAverageRatings] = useState(getAverages(receivedEvaluations));
  
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
        setAverageRatings(items); // getAverages(receivedEvaluations)
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
      console.log("teamid = ", team.id)
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
    
  }, [tabContext.value]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          marginTop: viewOtherUserRatings ? 0 : 50,
          ...styles.scroll,
        }}
        refreshControl={
          <RefreshControl
            refreshing={userContext.refreshing}
            onRefresh={userContext.onRefresh}
          />
        }
      >
        {viewOtherUserRatings ? (
          <View style={styles.buttonContainer}>
            <NextButton
              size={40}
              textSize={15}
              title="Evaluate"
              onPress={() =>
                navigation.navigate("EvaluateSliders", {
                  evaluationRequest: {
                    user: route.params?.otherUserRatings,
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
          <Text>{/** TODO: show skills */}You dont have been rated yet </Text>
        )}
      </ScrollView>
    </>
  );
}

export default withUser(withTabContext(RatingTab));
