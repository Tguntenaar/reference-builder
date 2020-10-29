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
  const allRatings = receivedEvaluations
    .map((evaluation) => evaluation.ratings.items)
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
function RatingTab({ navigation, route, userContext }) {
  let {
    averageRatings: { items: averageRatingsContext },
    receivedEvaluations: { items: receivedEvaluations },
  } = userContext;
  averageRatingsContext =
  averageRatingsContext && averageRatingsContext.length
    ? averageRatingsContext
    : [
        {
          id: "averageRatingId",
          grade: 8.4,
          skill: {
            id: "skillId",
            name: "Template",
            description: "lorem ipsum",
          },
        },
      ];
  
  receivedEvaluations = viewUser
    ? route.params?.personalRatings.receivedEvaluations.items
    : receivedEvaluations;
  
  // setAverageRatings( averageRatingsContext ); FIXME: future implementation
  // setAverageRatings( getAverages(receivedEvaluations) );

  // If route params set use those ratings
  /**
   * TODO: personalRatings is a user object
   * use user.id to get the full user object inclusief  'receivedEvaluations'
   *
   * TODO: same for team
   */
  const user = route.params?.personalRatings;
  const viewUser = user !== undefined;
  const [loadingUser, setLoadingUser] = useState(viewUser);
  const [averageRatings, setAverageRatings] = useState(getAverages(receivedEvaluations)) // TODO: use averageRatingsContext

  useEffect(() => {
    if (route.params?.personalRatings) {
      // effect
      api.getUser(user.id)
      .then((result) => {
        const { data: { getUser: { 
          averageRatings: { items }, // TODO: use averageRatings or receivedEvaluations
          receivedEvaluations: { items: receivedEvaluations }
        }}} = result;
        setAverageRatings(receivedEvaluations);
        setLoadingUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return () => {
      // cleanup
    }
  }, [user]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          marginTop: viewUser ? 0 : 50,
          ...styles.scroll,
        }}
        refreshControl={
          <RefreshControl
            refreshing={userContext.refreshing}
            onRefresh={userContext.onRefresh}
          />
        }
      >
        {viewUser ? (
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
        {loadingUser ? (
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

export default withUser(RatingTab);
