import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import EvaluationRequest from '../components/EvaluationRequest';


function EvaluationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('EvaluateScreen')}
      />
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
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

export default EvaluationsScreen
