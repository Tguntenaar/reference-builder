import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Contacts from 'expo-contacts';
import NextButton from '../components/NextButton';
import { UserContext } from '../contexts/UserContext';
import { imageEsther } from '../constants/Images';
import api from '../apiwrapper';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const imageSize = 40;

function Screen(props) {
  return (
    <UserContext.Consumer>
      {(userContext) => <TeamSettingsScreen userContext={userContext} {...props} />}
    </UserContext.Consumer>
  );
}

function TeamSettingsScreen({ navigation, userContext }) {
  const { team } = userContext.teams.items[0];
  // const { teams: [ team ] } = userContext
  // const {
  //   teams: {
  //     items: [
  //       {
  //         name: initialTeamName,
  //         company: { name: initialCompanyName },
  //         members: { items: initialTeamMembers },
  //         skills: { items: initialteams },
  //       }
  //     ],
  //   },
  // } = userContext;

  const [teamMembers, setTeamMembers] = useState(team.members.items);
  const [teams, setteams] = useState(team.company.teams.items);
  const [newUser, setNewUser] = useState({ name: '', jobTitle: '', email: '' });
  const [newTeam, setNewTeam] = useState('');
  const [companyName, setCompany] = useState(team.company.name);

  // Get Contact List
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          // const contact = data[0];
          // console.log(data);
        }
      }
    })();
  }, []);
  // Submit changes
  const handlePress = () => {};
  // Add a User to your team TODO: validation
  const createUser = async () => {
    // TODO: invite email create user in UserPool
    const {
      data: { createUser: createdUser },
    } = await api
      .createUser({
        name: newUser.name,
        jobTitle: newUser.jobTitle,
      })
      .catch((error) => console.log(`Error creating user ${error.errors[0].message}`));

    const teamLink = await api
      .createTeamMemberLink({
        userId: createdUser.id,
        teamId: team.id,
      })
      .catch(console.log);

    if (!teamLink.errors) {
      setTeamMembers([...teamMembers, { ...teamLink, user: createdUser }]);
      setNewUser({ name: '', jobTitle: '', email: '' });
    }
  };

  // TODO: validation
  const createTeam = async () => {
    const {
      data: { createTeam: createdTeam },
    } = await api
      .createTeam({
        companyId: team.company.id,
        name: newTeam,
      })
      .catch((error) => console.log(`ERROR creating skill.. \n${error.errors[0].message}`));
    if (createdTeam.name) {
      setteams([...teams, createdTeam]);
      setNewTeam('');
    }
  };

  const updateHeader = async () => {
    const t2 = () =>
      api.updateCompany({
        id: team.company.id,
        name: companyName,
      });

    // const t2 = updateCompanyName();

    const {
      data: { updateTeam: updatedTeam },
    } = await t1;
    const {
      data: { updateCompany: updatedCompany },
    } = await t2;

    if (updatedTeam.errors || updatedCompany.errors) {
      console.log('ERRORS!!!');
    } else {
      console.log('succes');
    }
  };

  const removeTeam = async (teamId) => {
    setteams(teams.filter((team) => teamId !== team.id));
    const {
      data: { deleteTeam: result },
    } = await api.deleteTeam(teamId).catch(console.log);
  };

  const deleteMember = async (teamMemberLinkId) => {
    setTeamMembers(teamMembers.filter((user) => teamMemberLinkId !== user.id));
    const {
      data: { deleteTeamMemberLink: result },
    } = await api.deleteTeamMemberLink(teamMemberLinkId).catch(console.log);
  };

  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/* <Text style={{fontSize: 40}}> Team name </Text>
          <Text style={{fontSize: 25}}> Company </Text> */}
          <TextInput
            style={[styles.input, { fontSize: 40 }]}
            clearTextOnFocus={false}
            onChangeText={(text) => setCompany(text)}
            value={companyName}
            placeholder="Company"
          />
        </View>
        <View style={styles.middle}>
          {/** Teams */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text> {teams.length} Teams</Text>
            <TouchableOpacity>
              <Text style={{ color: 'blue' }}> Add </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 0,
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              width,
            }}
          >
            {teams.length ? (
              teams.map((team, index) => (
                <View
                  key={index}
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: 'lightgrey',
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text>
                      {team.name} {/** skill.description */} {/** */}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 40, top: 10 }}
                    onPress={() => removeTeam(team.id)}
                  >
                    <Text style={{ color: 'red' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Start adding teams to your company</Text>
            )}
          </View>

          {/** NEW SKILL FORM */}
          <TextInput
            onChangeText={(text) => setNewTeam(text)}
            value={newTeam.name}
            placeholder="name"
          />

          <Button title="Submit" onPress={createTeam} />
          {/** END NEW SKILL FORM */}

          {/** TEAM MEMBERS */}
          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text> {teamMembers.length} members</Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={{ color: 'blue' }}> Invite </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 0,
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              width,
            }}
          >
            {teamMembers.length ? (
              teamMembers.map(({ id: teamMemberLinkId, user }) => (
                <View
                  key={teamMemberLinkId}
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: 'lightgrey',
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Image style={styles.image} source={imageEsther} />
                  {/* TODO: teammember image */}
                  <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text>{user.name}</Text>
                    <Text>{user.jobTitle}</Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 40, top: 10 }}
                    onPress={() => deleteMember(teamMemberLinkId)}
                  >
                    <Text style={{ color: 'red' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Start adding Team Members</Text>
            )}
          </View>

          {/** NEW USER FORM */}
          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, name: text })}
            value={newUser.name}
            placeholder="name"
          />

          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, jobTitle: text })}
            value={newUser.jobTitle}
            placeholder="jobtitle"
          />

          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, email: text })}
            value={newUser.email}
            placeholder="email"
          />

          <Button title="Submit" onPress={createUser} />
          {/** END NEW USER FORM */}
        </View>
        <View style={styles.bottom}>
          {/* <NextButton title="Submit" onPress={updateHeader} /> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: 0.2 * height,
    // backgroundColor: 'red',
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'lightgrey',
  },
  edit: {
    color: 'blue',
    fontSize: 20,
  },
  middle: {
    // paddingTop: 50,
    height: 0.6 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom: {
    height: 0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default Screen;
