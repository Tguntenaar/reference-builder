import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TeamMember from '../components/TeamMember';


function MyTeamScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
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

export default MyTeamScreen
