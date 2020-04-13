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