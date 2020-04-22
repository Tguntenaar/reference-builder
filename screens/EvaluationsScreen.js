import React from 'react'
import { StyleSheet, ScrollView} from 'react-native';
import EvaluationRequest from '../components/EvaluationRequest';


function EvaluationsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} >
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
      <EvaluationRequest name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    // flexGrow: 1,
  }
});

export default EvaluationsScreen
