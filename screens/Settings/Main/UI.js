import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
  SafeAreaView,
  Switch,
} from 'react-native';
// aws
import { Feather } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import { imageEsther } from '../../../constants/Images';
import styles from './style';

const UI = ({
  userContext,
  pickImage,
  profilePicture,
  form,
  teamsLink,
  navigation,
  deleteTeam,
}) => {
  const { isAdmin, developerMode, isManager } = userContext;
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.back}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Feather
            name="log-out"
            color="black"
            style={styles.signOut}
            onPress={() => {
              Alert.alert(
                'Sign out',
                'Are you sure you want to sign out?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => Auth.signOut() },
                ],
                { cancelable: true }
              );
            }}
          />
          <Text style={styles.pageTitle}>Settings</Text>

          <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={profilePicture || imageEsther} />
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <View style={styles.names}>
            <View>
              <Text style={[styles.input, styles.inputName]}>{form.username}</Text>
              <Text style={[styles.input, styles.inputJobTitle]}>{form.jobTitle}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // inputElement.current.focus();
                navigation.navigate('Form', {
                  name: 'Change name',
                  screen: 'SettingsScreen',
                  post: 'post',
                  update: 'post',
                  list: [],
                  form: [
                    {
                      text: 'Name',
                      key: 'name',
                      value: form.username,
                    },
                    {
                      text: 'Job Title',
                      key: 'jobTitle',
                      value: form.jobTitle,
                    },
                  ],
                });
              }}
              style={{ height: 30, width: 60, alignItems: 'flex-end' }}
            >
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
          {userContext.id === 'b403da70-bea8-4e54-9cff-6a68e9d07f4d' ? (
            <View style={styles.basic}>
              <View style={styles.basic}>
                <Text>DeveloperMode</Text>
                <Switch
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  trackColor={{ false: '#767577', true: 'rgb(48,209,88)' }}
                  thumbColor={developerMode ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => userContext.dispatch({ type: 'toggleDevMode' })}
                  value={developerMode}
                />
              </View>
              <View style={[styles.basic, { marginLeft: 20 }]}>
                <Text>isManager</Text>
                <Switch
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  trackColor={{ false: '#767577', true: 'rgb(48,209,88)' }}
                  thumbColor={isManager ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => userContext.dispatch({ type: 'toggleIsManager' })}
                  value={isManager}
                />
              </View>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.teams}>Teams</Text>
            {isAdmin ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Form', {
                    name: 'Create team',
                    screen: 'SettingsScreen',
                    post: 'newTeam',
                    list: [],
                    form: [
                      {
                        text: 'Name',
                        key: 'name',
                        value: '',
                      },
                    ],
                  });
                }}
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text style={{ color: 'blue' }}>Create Team </Text>

                <Feather name="plus-circle" color="blue" style={styles.plusIcon} />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            // justifyContent: 'space-between',
            backgroundColor: '#fff',
          }}
          refreshControl={
            <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
          }
          style={styles.bottom}
        >
          {teamsLink.map((link) => {
            return (
              <View
                style={[
                  styles.card,
                  // { borderWidth: link.isActive ? 1 : 0, borderColor: 'lightblue' },
                ]}
                key={link.id}
              >
                <View style={styles.imageContainer}>
                  <Image style={styles.teamImage} source={imageEsther} />
                  {/** (photo && { uri: photo.uri, cache: 'force-cache' }) */}
                </View>
                <View style={styles.innerCard}>
                  {isAdmin || isManager ? (
                    <Feather
                      name="settings"
                      color="gray"
                      style={styles.teamIcon}
                      onPress={() => {
                        navigation.navigate('TeamSettingsScreen', {
                          team: link.team,
                        });
                      }}
                    />
                  ) : null}

                  <Text style={styles.teamName}>{link.team.name}</Text>
                  <NextButton
                    title="View"
                    textSize={14}
                    size={40}
                    onPress={() => {
                      navigation.push('Tabs', {
                        team: link.team, // route.params in Tabnavigation.js
                        screen: 'My Ratings',
                        params: {
                          team: link.team, // route.params in MyTeamScreen.js
                        },
                      });
                    }}
                  />
                  {developerMode ? (
                    <TouchableOpacity
                      style={styles.removeTouch}
                      onPress={() => {
                        deleteTeam(link);
                      }}
                    >
                      <Text>Delete team</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

UI.propTypes = {
  // submitProfileInfo: PropTypes.func.isRequired,
  pickImage: PropTypes.func.isRequired,
  profilePicture: PropTypes.any,
  form: PropTypes.shape({ username: PropTypes.string, jobTitle: PropTypes.string }).isRequired,
  teamsLink: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UI;
