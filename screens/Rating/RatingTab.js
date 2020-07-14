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
function RatingsScreen({ navigation, userContext }) {
  // const ratings = [
  //   {
  //     skillName: 'Creativity',
  //     grade: '8.1',
  //     description: 'Originality, new ideas, out of the box',
  //   },
  //   { skillName: 'Learning', grade: '4.5', description: 'Originality, new ideas, out of the box' },
  //   { skillName: 'Teamwork', grade: '6.3', description: 'Originality, new ideas, out of the box' },
  // ];

  const { ratings, averageRatings } = userContext;
  console.log(ratings);
  ratings.items = [
    ...ratings.items,
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
  console.log(ratings);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
        {ratings.items.length ? (
          ratings.items.map((rating, index) => {
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

export default withUser(RatingsScreen);
