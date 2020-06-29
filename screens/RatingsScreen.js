import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text } from 'react-native';
import RatingBox from '../components/RatingBox.js';
import withUser from '../contexts/withUser';

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
  const { ratings } = userContext;
  console.log(Object.keys(ratings));
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
        {ratings.items.length ? (
          ratings.items.map((rating, index) => {
            return (
              <RatingBox
                key={index}
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
