import React, { useState } from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';
import TeamMember from '../../components/TeamMemberBox';
import PopUpModal from '../../components/Modal';
import withUser from '../../contexts/withUser';
import api from '../../apiwrapper';
import styles from './style';

function MyTeamScreen({ navigation, userContext }) {
  let noTeam = false;
  let team;
  let teamMembers;
  // console.log('USER CONTEXT');
  // console.log(Object.keys(userContext));
  // console.log(userContext.teamsLink.items.length);
  if (
    // TODO:
    !userContext ||
    !userContext.teamsLink ||
    !userContext.teamsLink.items ||
    !userContext.teamsLink.items.length
  ) {
    noTeam = true;
    team = {
      membersLink: {
        items: [],
      },
    };
    teamMembers = [];
  } else {
    // TODO: [0] moet de active team worden
    console.log(userContext.teamsLink.items[0].team.id);
    console.log(userContext.activeTeam);
    team = userContext.teamsLink.items[0].team; // .filter((item) => item.team.id == userContext.activeTeam);
    teamMembers = team.membersLink.items
      // .filter((item) => item.user.id !== userContext.id)
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
  console.log(team.admins[0]);
  console.log(teamMembers);
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
        }
      >
        {!noTeam ? (
          <>
            <Text style={[styles.text]}>Manager</Text>
            {teamMembers.map((teamMember) => {
              if (teamMember.id === team.admins[0]) {
                // FIXME: condition?
                return (
                  <TeamMember
                    teamMember={teamMember}
                    key={teamMember.id}
                    picture={teamMember.avatar}
                    navigation={navigation}
                    onPress={sendEvaluationRequest}
                    color="rgb(212,214,255)"
                  />
                );
              }
            })}
            <Text style={[styles.text]}>Members ({teamMembers.length})</Text>
            {teamMembers.length ? (
              teamMembers.map((teamMember) => (
                // TODO: filter manager
                <TeamMember
                  teamMember={teamMember}
                  key={teamMember.id}
                  picture={teamMember.avatar}
                  navigation={navigation}
                  onPress={sendEvaluationRequest}
                />
              ))
            ) : (
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                No team members in team {team.name} yet. Go to the team settings screen to invite
                your team members or activate another team to view those teammembers
              </Text>
            )}
          </>
        ) : (
          <Text>Your not in a team yet</Text>
        )}
      </ScrollView>
      <PopUpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default withUser(MyTeamScreen);
