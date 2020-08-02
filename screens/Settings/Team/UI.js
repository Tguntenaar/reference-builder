import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { width } from '../../../constants/Utils';

import NextButton from '../../../components/NextButton';

import { imageEsther } from '../../../constants/Images';

import styles from './style';

const screen = ({
  teamMembers,
  teamSkills,
  newUser,
  setNewUser,
  newSkill,
  setNewSkill,
  teamName,
  setTeamName,
  handlePress,
  createUser,
  updateHeader,
  deactivateSkill,
  deleteMember,
  createSkill,
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
            onChangeText={(text) => setTeamName(text)}
            value={teamName}
            placeholder="Team name"
          />
        </View>
        <View style={styles.middle}>
          {/** SKILLS */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text> {teamSkills.length} skills</Text>
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
            {teamSkills.length ? (
              teamSkills.map((skill) => (
                <View
                  key={skill.id}
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
                      {skill.name},{skill.description} {/** */}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 40, top: 10 }}
                    onPress={() => deactivateSkill(skill.id)}
                  >
                    <Text style={{ color: 'red' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Start adding skills your team should evaluate</Text>
            )}
          </View>

          {/** NEW SKILL FORM */}
          <TextInput
            onChangeText={(text) => setNewSkill({ ...newSkill, name: text })}
            value={newSkill.name}
            placeholder="name"
          />

          <TextInput
            onChangeText={(text) => setNewSkill({ ...newSkill, description: text })}
            value={newSkill.description}
            placeholder="description"
          />

          <Button title="Submit" onPress={createSkill} />
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
          <NextButton title="Submit" onPress={updateHeader} />
        </View>
      </View>
    </ScrollView>
  );
};

screen.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  teamSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  newUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setNewUser: PropTypes.func.isRequired,
  newSkill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setNewSkill: PropTypes.func.isRequired,
  teamName: PropTypes.string.isRequired,
  setTeamName: PropTypes.func.isRequired,
  handlePress: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  updateHeader: PropTypes.func.isRequired,
  deactivateSkill: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  createSkill: PropTypes.func.isRequired,
};

screen.defaultProps = {};

export default screen;
