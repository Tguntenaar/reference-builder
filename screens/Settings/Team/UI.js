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
  Alert,
  SafeAreaView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { width, developerMode } from '../../../constants/Utils';

import NextButton from '../../../components/NextButton';
import Modal from '../../../components/Modal';

import { imageEsther } from '../../../constants/Images';

import styles from './style';
import BackButton from '../../../components/BackButton';

const screen = ({
  teamManagers,
  teamMembers,
  teamSkills,
  teamName,
  setTeamName,
  updateHeader,
  deactivateSkill,
  deleteMember,
  deactivateMember,
  navigation,
  navigateToSkillForm,
  sendTeamEvaluations,
  userContext,
  addManager,
  addMember,
  admins,
  removeManager,
  newMemberLoading,
  modalVisible,
  setModalVisible
}) => {
  const deleteMemberButton = developerMode;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
            onEndEditing={() => updateHeader()}
            value={teamName}
            placeholder="Team name"
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
                navigateToSkillForm(true);
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
              
              teamSkills.filter((skill) => skill.forManager && skill.active).length ? (
                teamSkills
                  .filter((skill) => skill.forManager && skill.active)
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
                          {userContext.isAdmin ? (
                            <Feather
                              name="x"
                              color="black"
                              style={styles.xIcon}
                              onPress={() => deactivateSkill(skill.id)}
                            />
                          ) : null}
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
                  <TouchableOpacity onPress={() => navigateToSkillForm(true)} style={styles.skill}>
                    <View style={styles.innerSkill}>
                      <Text style={styles.skillName}>Add Skills</Text>
                      <Feather name="plus-circle" color="black" style={styles.plusIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>

          <View style={styles.row}>
            <Text style={styles.headerTitles}>Managers ({teamManagers.length})</Text>
            <TouchableOpacity
              onPress={() => {
                addManager();
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Add Manager </Text>
                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          {teamManagers.map(({ user: manager }) => {
            return (
              <View key={manager.id} style={[styles.card, styles.managerCard]}>
                <Image style={styles.image} source={imageEsther} />
                
                <View style={styles.innerCard}>
                  {
                    // Don't show the icon of the first manager.
                    userContext.isAdmin && userContext.id !== manager.id ? (
                      <TouchableOpacity onPress={() => {
                        removeManager(manager.id);
                      }} style={styles.teamIcon} >
                        <Feather name="x-circle" color="red" style={styles.teamIcon} />
                      </TouchableOpacity>
                    ) : null
                  }

                  <View style={styles.userInfo}>
                    <Text style={styles.name}>{manager.name}</Text>
                    <Text style={styles.jobTitle}>{manager.email}</Text>
                    { 
                      userContext.id === manager.id ?
                        <NextButton
                          title="Request evaluations"
                          textSize={14}
                          onPress={() => {
                            // if (teamMembers.length > 0) {
                              navigation.navigate('SendRequests', {
                                members: teamMembers
                              });
                            // } else {
                            //   Alert.alert('Add members first');
                            // }
                          }
                        }
                        />
                      :
                      <NextButton
                          title="Evaluate"
                          textSize={14}
                          size={45}
                          onPress={() => {
                            if (teamSkills.filter((skill) => skill.forManager && skill.active).length > 0) {
                              
                              navigation.navigate('EvaluateSliders', {
                                evaluationRequest: {
                                  user: manager,
                                  evaluator: {
                                    id: userContext.id,
                                    name: userContext.name,
                                  },
                                },
                                manager: true, // starts evaluation of non managers
                              });
                            } else {
                              Alert.alert('First add manager skills');
                            }
                          }}
                        />
                    }
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
                navigateToSkillForm(false);
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
              teamSkills.filter((skill) => !skill.forManager && skill.active).length ? (
                teamSkills
                  .filter((skill) => !skill.forManager && skill.active)
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
                          {userContext.isAdmin ? (
                            <Feather
                              name="x"
                              color="black"
                              style={styles.xIcon}
                              onPress={() => deactivateSkill(skill.id)}
                            />
                          ) : null}
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
                  <TouchableOpacity onPress={() => navigateToSkillForm(false)} style={styles.skill}>
                    <View style={styles.innerSkill}>
                      <Text style={styles.skillName}>Add Skills</Text>
                      <Feather name="plus-circle" color="black" style={styles.plusIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
          <View style={styles.row}>
            <Text style={styles.headerTitles}>{ newMemberLoading ? "Loading.." : `Members (${teamMembers.length})` }</Text>
            <TouchableOpacity
              onPress={() => {
                addMember();
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'blue' }}> Add Members </Text>
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
                    
                    <View style={styles.innerCard}>
                      <View style={styles.userInfo}>
                        <Text style={styles.name}>{user?.name}</Text>
                        <Text style={styles.jobTitle}>{user?.email}</Text>
                      </View>
                      {
                        deleteMemberButton?
                        <TouchableOpacity
                        onPress={() => {
                          deleteMember(user?.id, teamMemberLinkId);
                        }}
                        style={styles.trashIcon}
                      >
                        <Feather name="trash-2" color="red" style={styles.trashIcon} />
                      </TouchableOpacity>:null
                      }
                      <TouchableOpacity
                        onPress={() => {
                          Alert.alert(
                            'Deactivating teammember',
                            'Are you sure you want to?',
                            [
                              {
                                text: 'Cancel',
                                onPress: () => {},
                                style: 'cancel',
                              },
                              { text: 'OK', onPress: () => deactivateMember(teamMemberLinkId) },
                            ],
                            { cancelable: true }
                          );
                          
                        }}
                        style={styles.teamIcon}
                      >
                        <Feather name="x-circle" color="red" style={styles.teamIcon} />
                      </TouchableOpacity>
                      {userContext.isManager ? (
                        <NextButton
                          title="Evaluate"
                          textSize={14}
                          size={45}
                          onPress={() => {
                            if (teamSkills.filter((skill) => !skill.forManager && skill.active).length > 0) {
                              navigation.navigate('EvaluateSliders', {
                                evaluationRequest: {
                                  user,
                                  evaluator: {
                                    id: userContext.id,
                                    name: userContext.name,
                                  },
                                },
                                manager: false, // starts evaluation of non managers
                              });
                            } else {
                              Alert.alert('First add skills');
                            }
                          }}
                        />
                      ) : null}
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
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </SafeAreaView>
  );
};

screen.propTypes = {
  newMemberLoading: PropTypes.bool,
  teamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  teamSkills: PropTypes.arrayOf(PropTypes.object).isRequired, 
  teamName: PropTypes.string.isRequired,
  setTeamName: PropTypes.func.isRequired,
  updateHeader: PropTypes.func.isRequired,
  deactivateSkill: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  addManager: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  sendTeamEvaluations: PropTypes.func.isRequired,
  admins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

screen.defaultProps = {};

export default screen;
