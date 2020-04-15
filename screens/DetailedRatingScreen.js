import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';

function DetailedRatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up RatingsDetailsScreen.js to start working on your app!</Text>
      <NextButton title={"Next"} onPress={() => navigation.navigate('Tabs')} />
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

export default DetailedRatingScreen
