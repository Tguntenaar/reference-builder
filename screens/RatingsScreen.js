import React, { Fragment } from 'react'
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import Rating from '../components/RatingBox.js'

function RatingsScreen({ navigation }) {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
        <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
        <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
        <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
      </ScrollView>
    </Fragment>

  )
}

const styles = StyleSheet.create({
  safe:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }
});

export default RatingsScreen