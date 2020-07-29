import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text } from 'react-native';
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
/**
 * TODO:
 * Ratings Schermen
 * 1. Data access patterns fixen get ratings by user / skill
 * 2. Data aggregation via lambda function triggered by adding a new Rating
 * 3.
 */
function RatingTab({ navigation, userContext }) {
  const { averageRatings } = userContext;

  // console.log('Object.keys(userContext)');
  // console.log(Object.keys(userContext));
  // console.log('averageRatings.items.length');
  // console.log(averageRatings.items.length);

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
  // console.log(evaluations);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
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
