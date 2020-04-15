import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Rating from '../components/Rating.js'


function RatingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up RatingsScreen.js to start working on your app!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('RatingsDetailsScreen')}
      />
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