import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text } from 'react-native';
import RatingBox from '../../components/RatingBox';
import withUser from '../../contexts/withUser';

/**
 * TODO:
 * Ratings Schermen
 * 1. Data access patterns fixen get ratings by user / skill
 * 2. Data aggregation via lambda function triggered by adding a new Rating
 * 3.
 */
function RatingTab({ navigation, userContext }) {
  let { evaluations, averageRatings } = userContext;
  console.log(evaluations);
  if (!evaluations) {
    evaluations = {
      items: [],
    };
  }
  evaluations.items = [
    ...evaluations.items,
    {
      id: '3',
      comment: '',
      evaluations: {
        items: [
          {
            grade: 8.4,
            skill: {
              name: 'creativity',
              description: 'lorem ipsum',
            },
          },
        ],
      },
    },
  ];
  console.log(evaluations);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
        {evaluations.items.length ? (
          evaluations.items.map((rating, index) => {
            return (
              <RatingBox
                key={rating.id}
                rating={rating}
                gradeColor="rgb(10,185,255)"
                onSeeDetails={() => {
                  navigation.navigate('RatingsDetailsScreen', {
                    rating,
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

export default withUser(RatingTab);
