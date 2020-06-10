import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native';
import EvaluationRequest from '../components/EvaluationRequest';

function EvaluationsScreen({ navigation, evaluationRequests }) {
  evaluationRequests = evaluationRequests || []
    // [{name: "Boris Guntenaar", jobTitle: 'Founder'},
    //  {name: "Olivier Guntenaar", jobTitle: 'Developer'},
    //  {name: 'Thomas Guntenaar', jobTitle: 'Developer'}]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} >
      {
        evaluationRequests.length ? evaluationRequests.map(function(item, index) {
          return (<EvaluationRequest key={index} name={item.name} jobTitle={item.jobTitle} navigation={navigation}/>)
        }) :
        (<Text> Wait for the Teammanager to activate a new rating round </Text>)
      }
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
  }
});

export default EvaluationsScreen
