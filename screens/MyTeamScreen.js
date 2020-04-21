import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TeamMember from '../components/TeamMember';


function MyTeamScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
      <TeamMember name="Thomas Guntenaar" jobTitle="Developer"/>
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
    flexGrow: 1,
  },
  
});

export default MyTeamScreen
