import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import Circle from '../components/Circle';

function DetailedRatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Circle color={'rgba(239,244,253,0.5)'}/>
      <BackButton style={styles.back} onPress={() => navigation.navigate('RatingsDetailsScreen')}/>
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
