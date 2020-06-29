import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import TeamMember from '../components/TeamMember';
import PopUpModal from '../components/Modal';
import withUser from '../contexts/withUser';
import api from '../apiwrapper';

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

const TeamList = ({ sendEvaluationRequest, teamMembers, navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {teamMembers.length ? (
        teamMembers.map((teamMember) => (
          <TeamMember
            teamMember={teamMember}
            key={teamMember.id}
            picture={teamMember.avatar}
            navigation={navigation}
            onPress={sendEvaluationRequest}
          />
        ))
      ) : (
        <Text>No team members.. Go to the team settings screen to invite your team members</Text>
      )}
    </ScrollView>
  );
};

function MyTeamScreen({ navigation, userContext }) {
  const { team } = userContext.teamsLink.items[0];
  const teamMembers = team.membersLink.items.map((item) => item.user);
  // State
  const [modalVisible, setModalVisible] = useState(false);
  // Functions
  const sendEvaluationRequest = (evaluatorId) => {
    // TODO: npm i jest-expo --save-dev
    api
      .createEvaluationRequest({
        userId: userContext.id,
        evaluatorId,
        status: 'PENDING',
      })
      .then(() => {
        console.log('created evaluation request');
      })
      .catch(console.log);
    setModalVisible(true);
  };

  return (
    <>
      <TeamList
        sendEvaluationRequest={sendEvaluationRequest}
        teamMembers={teamMembers}
        navigation={navigation}
      />
      <PopUpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default withUser(MyTeamScreen);
