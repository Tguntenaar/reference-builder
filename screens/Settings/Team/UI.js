import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { width } from '../../../constants/Utils';

import NextButton from '../../../components/NextButton';

import { imageEsther } from '../../../constants/Images';

import styles from './style';
import BackButton from '../../../components/BackButton';

const screen = ({
  teamManagers,
  teamMembers,
  teamSkills,
  teamName,
  setTeamName,
  createUser,
  updateHeader,
  deactivateSkill,
  deleteMember,
  navigation,
  navigateToForm,
  sendTeamEvaluations,
  userContext,
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
        backgroundColor: '#fff',
      }}
      refreshControl={
        <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
      }
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
          <NextButton
            title="Send team evaluations"
            textSize={14}
            onPress={() => navigation.navigate('SendRequests')}
          />
        </View>
        <View style={styles.middle}>
          {/** MANAGER SKILLS */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.subHeader}>Assesment criteria manager</Text>
              <Text style={styles.headerTitles}>Skills</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigateToForm(true);
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Add Skills </Text>
                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.skillsContainer}>
            {
              /** MANAGER SKILLS */
              teamSkills.filter((skill) => skill.forManager).length ? (
                teamSkills
                  .filter((skill) => skill.forManager)
                  .map((skill) => (
                    <View
                      key={skill.id}
                      style={{
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
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => navigateToForm(true)} style={styles.skill}>
                    <View style={styles.innerSkill}>
                      <Text style={styles.skillName}>Add Skills</Text>
                      <Feather name="plus-circle" color="black" style={styles.plusIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>

          <View style={styles.test}>
            <Text style={styles.headerTitles}>Managers ({teamManagers.length})</Text>
          </View>
          {teamManagers.map(({ user: manager }) => {
            return (
              <View key={manager.id} style={[styles.card, styles.managerCard]}>
                <Image style={styles.image} source={imageEsther} />
                {/* TODO: teammember image */}
                <View style={styles.innerCard}>
                  <Feather name="x-circle" color="red" style={styles.teamIcon} />

                  <View style={styles.userInfo}>
                    <Text style={styles.name}>{manager.name}</Text>
                    <Text style={styles.jobTitle}>{manager.jobTitle}</Text>
                  </View>
                </View>
              </View>
            );
          })}

          {/** TEAM SKILLS */}
          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.subHeader}>Assesment criteria team</Text>
              <Text style={styles.headerTitles}>Skills</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigateToForm(false);
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Add Skills </Text>
                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.skillsContainer}>
            {
              /** Non manager skills */
              teamSkills.filter((skill) => !skill.forManager).length ? (
                teamSkills
                  .filter((skill) => !skill.forManager)
                  .map((skill) => (
                    <View
                      key={skill.id}
                      style={{
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
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => navigateToForm(false)} style={styles.skill}>
                    <View style={styles.innerSkill}>
                      <Text style={styles.skillName}>Add Skills</Text>
                      <Feather name="plus-circle" color="black" style={styles.plusIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
          <View style={styles.test}>
            <Text style={styles.headerTitles}>Members ({teamMembers.length})</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Form', {
                  name: 'Invite members',
                  fields: ['name', 'jobTitle', 'email'],
                  screen: 'TeamSettingsScreen',
                  post: 'newMember',
                  form: [
                    {
                      text: 'Name',
                      key: 'name',
                      value: '',
                    },
                    {
                      text: 'Job title',
                      key: 'jobTitle',
                      value: '',
                    },
                    {
                      text: 'E-mail',
                      key: 'email',
                      value: '',
                    },
                  ],
                });
              }}
            >
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
                    <NextButton
                      title="Send Evaluation"
                      textSize={14}
                      size={45}
                      onPress={() => null}
                    />
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
  newSkill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  teamName: PropTypes.string.isRequired,
  setTeamName: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  updateHeader: PropTypes.func.isRequired,
  deactivateSkill: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  sendTeamEvaluations: PropTypes.func.isRequired,
};

screen.defaultProps = {};

export default screen;
