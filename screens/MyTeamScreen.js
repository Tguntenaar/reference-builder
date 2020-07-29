import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import TeamMember from '../components/TeamMemberBox';
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

const TeamList = ({ sendEvaluationRequest, teamMembers, team, navigation }) => {
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
        <Text>
          No team members in team {team.name} yet. Go to the team settings screen to invite your
          team members or activate another team to view those teammembers
        </Text>
      )}
    </ScrollView>
  );
};

function MyTeamScreen({ navigation, userContext }) {
  let noTeam = false;
  let team;
  let teamMembers;
  // console.log('USER CONTEXT');
  // console.log(Object.keys(userContext));
  // console.log(userContext.teamsLink.items.length);
  if (!userContext.teamsLink.items.length) {
    noTeam = true;
    team = {
      membersLink: {
        items: [],
      },
    };
    teamMembers = [];
  } else {
    // TODO: [0] moet de active team worden
    team = userContext.teamsLink.items[0].team;
    teamMembers = team.membersLink.items
      .filter((item) => item.user.id !== userContext.id)
      .map((item) => item.user);
  }
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
      {!noTeam ? (
        <TeamList
          sendEvaluationRequest={sendEvaluationRequest}
          teamMembers={teamMembers}
          team={team}
          navigation={navigation}
        />
      ) : (
        <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
          <Text>Your not in a team yet</Text>
        </ScrollView>
      )}
      <PopUpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default withUser(MyTeamScreen);
