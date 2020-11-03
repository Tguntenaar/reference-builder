import React from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';
import TeamMember from '../../components/TeamMemberBox';
import withUser from '../../contexts/withUser';
import withTabContext from '../../contexts/TabContext';

import styles from './style';

function MyTeamScreen({ navigation, userContext, tabContext, route }) {
  const {
    teamsLink: { items: teamMemberLinks },
    activeTeam: activeTeamLink,
  } = userContext;
  let team;
  // console.log('route.params', route.params);
  if (tabContext.type === 'team') {
    // console.log("route.params.team;", Object.route.params.team);
    team = tabContext.value;
  } else {
    team = activeTeamLink.team;
  }
  let {
    membersLink: { items: membersLink },
  } = team;
  membersLink = membersLink.filter((link) => link.active);
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

              if (teamMemberLink.user !== null && admins.includes(teamMemberLink.user.id)) {
                return (
                  <TeamMember
                    teamMember={teamMemberLink.user}
                    key={teamMemberLink.user.id}
                    picture={teamMemberLink.user.avatar}
                    navigation={navigation}
                    color="rgb(212,214,255)"
                  />
                );
              }
              return null;
            })}
            <Text style={[styles.text]}>Members ({membersLink.length - team.admins.length})</Text>
            {membersLink.length ? (
              membersLink.map((teamMemberLink) => {
                const { admins } = team;
                const onPress =
                  userContext.isAdmin || userContext.isManager
                    ? () => {
                        console.log('navigate to Tabs');
                        console.log(
                          'receivedEvaluations:',
                          teamMemberLink.user.receivedEvaluations
                        );
                        navigation.push('Tabs', {
                          personalRatings: teamMemberLink.user,
                          screen: 'My Ratings',
                          params: {
                            personalRatings: teamMemberLink.user, // TODO: averageRatings of receivedEvaluations
                          },
                        });
                      }
                    : null;
                if (!admins.includes(teamMemberLink.user.id)) {
                  return (
                    <TeamMember
                      teamMember={teamMemberLink.user}
                      key={teamMemberLink.user.id}
                      picture={teamMemberLink.user.avatar}
                      navigation={navigation}
                      onPress={onPress}
                    />
                  );
                }
                return null;
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

export default withUser(withTabContext(MyTeamScreen));
