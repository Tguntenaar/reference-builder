import React from 'react'
import { StyleSheet, ScrollView} from 'react-native';
import EvaluationRequest from '../components/EvaluationRequest';

function EvaluationsScreen({ navigation, evaluationRequests }) {
  evaluationRequests = evaluationRequests || 
    [{name: "Boris Guntenaar", jobTitle: 'Founder'},
     {name: "Olivier Guntenaar", jobTitle: 'Developer'},
     {name: 'Thomas Guntenaar', jobTitle: 'Developer'}]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} >
      {
        evaluationRequests.map(function(item, index) {
          return (<EvaluationRequest key={index} name={item.name} jobTitle={item.jobTitle} navigation={navigation}/>)
        })
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
