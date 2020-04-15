import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

import NextButton from '../components/NextButton';


function EvaluateCommentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up EvaluateCommentScreen.js to start working on your app!</Text>
      
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


export default EvaluateCommentScreen
