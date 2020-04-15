import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import NextButton from '../components/NextButton';


function EvaluateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up EvaluateScreen.js to start working on your app!</Text>
      <NextButton title={"Next"} onPress={() => navigation.navigate('EvaluateCommentScreen')} />
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


export default EvaluateScreen