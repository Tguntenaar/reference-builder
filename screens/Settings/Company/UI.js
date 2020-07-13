import React from 'react';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './style';
import { imageEsther } from '../../../constants/Images';
import { width } from '../../../constants/Utils';

const Screen = ({
  teams,
  teamMembers,
  companyName,
  setCompany,
  removeTeam,
  setNewTeam,
  handlePress,
  createTeam,
  setNewUser,
  deleteMember,
  createUser,
  newUser,
}) => {
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
              teams.map((team) => (
                <View
                  key={team.id}
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
};

Screen.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Screen;
