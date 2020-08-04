import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { width } from '../../../constants/Utils';

import NextButton from '../../../components/NextButton';

import { imageEsther } from '../../../constants/Images';

import styles from './style';
import BackButton from '../../../components/BackButton';

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
  navigation,
}) => {
  // Random array of objects
  const foo = Array.from(Array(3).keys());
  const TeamSkills = foo.map((item, index) => {
    return {
      id: index,
      name: Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 7),
    };
  });
  console.log(teamSkills);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
      // style={styles.safe}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.back}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <TextInput
            style={[styles.input, styles.pageTitle]}
            clearTextOnFocus={false}
            onChangeText={(text) => setTeamName(text)}
            value={teamName}
            placeholder="Team name"
          />
          <NextButton title="Send team evaluations" textSize={14} />
        </View>
        <View style={styles.middle}>
          {/** SKILLS */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.headerTitles}>Skills</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.prompt(
                  'Skill Toevoegen',
                  'Geef de naam een beschrijving van de skill',
                  [
                    {
                      text: 'Ask me later',
                      onPress: () => console.log('Ask me later pressed'),
                    },
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Skills toevoegen </Text>
                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.skillsContainer}>
            {teamSkills.length ? (
              teamSkills.map((skill) => (
                <View
                  key={skill.id}
                  style={{
                    // flexDirection: 'column',
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <View style={styles.skill}>
                    <View style={styles.innerSkill}>
                      <Text style={styles.skillName}>{skill.name}</Text>
                      <Feather
                        name="x"
                        color="black"
                        style={styles.xIcon}
                        onPress={() => deactivateSkill(skill.id)}
                      />
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <Text>Start adding skills your team should evaluate</Text>
            )}
          </View>

          {/** 
            TODO: move skill form
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
        */}

          {/** END NEW SKILL FORM */}

          {/** TEAM MEMBERS */}
          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.headerTitles}>Members</Text>
            <TouchableOpacity onPress={handlePress}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Invite members </Text>
                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 0,
              width,
            }}
          >
            {teamMembers.length ? (
              teamMembers.map(({ id: teamMemberLinkId, user }) => (
                <View key={teamMemberLinkId} style={styles.card}>
                  <Image style={styles.image} source={imageEsther} />
                  {/* TODO: teammember image */}
                  <View style={styles.innerCard}>
                    <View style={styles.userInfo}>
                      <Text style={styles.name}>{user.name}</Text>
                      <Text style={styles.jobTitle}>{user.jobTitle}</Text>
                    </View>
                    <NextButton title="Send Evaluation" textSize={14} onPress={() => null} />
                    <TouchableOpacity onPress={() => deleteMember(teamMemberLinkId)}>
                      <Text style={styles.remove}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text>Start adding Team Members</Text>
            )}
            <View style={{ height: 50 }} />
          </View>
          {/**
            TODO: move form to proper place
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
         */}
          {/** END NEW USER FORM */}
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
