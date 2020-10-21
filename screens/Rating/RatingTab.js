import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, RefreshControl } from 'react-native';
import RatingBox from '../../components/RatingBox';
import withUser from '../../contexts/withUser';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    // flexGrow: 1,
  },
});

function getAverages(receivedEvaluations) {
  /**
   * MAP EVALUATIONS NAAR ARRAY VAN RATINGS
   * MAP DAARNA REDUCE ALLE RATINGS MET DEZELFDE SKILL ID
   */
  const allRatings = receivedEvaluations.map((evaluation) => evaluation.ratings.items).flat();

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
  const {
    averageRatings,
    receivedEvaluations: { items: receivedEvaluations },
  } = userContext;
  averageRatings.items = getAverages(receivedEvaluations);

  averageRatings.items =
    averageRatings.items && averageRatings.items.length
      ? averageRatings.items
      : [
          {
            id: 'averageRatingId',
            grade: 8.4,
            skill: {
              id: 'skillId',
              name: 'Template',
              description: 'lorem ipsum',
            },
          },
        ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
        }
      >
        {averageRatings.items.length ? (
          averageRatings.items.map((averageRating) => {
            return (
              <RatingBox
                key={averageRating.id}
                rating={averageRating}
                gradeColor="rgb(10,185,255)"
                onSeeDetails={() => {
                  navigation.navigate('RatingsDetailsScreen', {
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
