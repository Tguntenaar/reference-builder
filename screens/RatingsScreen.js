import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Rating from '../components/Rating.js'


function RatingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
      <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
      <Rating name="Creativity" grade="8.1" description="description" navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RatingsScreen