import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import TeamMember from '../components/TeamMember';
import PopUpModal from '../components/Modal';
import withUser from '../contexts/withUser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

const TeamList = ({ setModalVisible, teamMembers, navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {teamMembers.length ? (
        teamMembers.map((teamMember) => (
          <TeamMember
            name={teamMember.name}
            key={teamMember.id}
            jobTitle={teamMember.jobTitle}
            picture={teamMember.picture}
            navigation={navigation}
            onPress={setModalVisible}
          />
        ))
      ) : (
        <Text>No team members.. Go to the team settings screen to invite your team members</Text>
      )}
    </ScrollView>
  );
};

function MyTeamScreen({ navigation, userContext }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { team } = userContext.teams.items[0];
  const teamMembers = team.members.items.map((item) => item.user);
  return (
    <>
      <TeamList
        setModalVisible={setModalVisible}
        teamMembers={teamMembers}
        navigation={navigation}
      />
      <PopUpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default withUser(MyTeamScreen);
