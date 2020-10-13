import React from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';
import TeamMember from '../../components/TeamMemberBox';
import withUser from '../../contexts/withUser';
import styles from './style';

function MyTeamScreen({ navigation, userContext }) {
  const {
    teamsLink: { items: teamMemberLinks },
    activeTeam: activeTeamLink,
  } = userContext;

  const { team } = activeTeamLink;
  let {
    membersLink: { items: membersLink },
  } = team;
  membersLink = membersLink.filter((link) => !link.active);
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
        }
      >
        {teamMemberLinks.length ? (
          <>
            <Text style={[styles.text]}>Managers</Text>

            {membersLink.map((teamMemberLink) => {
              const { admins } = team;
              const {
                user: { id, avatar },
              } = teamMemberLink;
              if (admins.includes(teamMemberLink.user.id)) {
                return (
                  <TeamMember
                    teamMember={teamMemberLink.user}
                    key={id}
                    picture={avatar}
                    navigation={navigation}
                    color="rgb(212,214,255)"
                  />
                );
              }
            })}
            <Text style={[styles.text]}>Members ({membersLink.length - team.admins.length})</Text>
            {membersLink.length ? (
              membersLink.map((teamMemberLink) => {
                const { admins } = team;
                const {
                  user: { id, avatar },
                } = teamMemberLink;
                if (!admins.includes(teamMemberLink.user.id)) {
                  return (
                    <TeamMember
                      teamMember={teamMemberLink.user}
                      key={id}
                      picture={avatar}
                      navigation={navigation}
                    />
                  );
                }
              })
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
    </>
  );
}

export default withUser(MyTeamScreen);
