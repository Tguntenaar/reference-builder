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
} from 'react-native';
// aws
import { Feather } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import { imageEsther } from '../../../constants/Images';
import styles from './style';

const UI = ({
  // submitProfileInfo,
  userContext,
  pickImage,
  profilePicture,
  form,
  setForm,
  selectedTeam,
  setSelectedTeam,
  teamsLink,
  navigation,
  isAdmin,
  isManager,
}) => {
  // console.log(teamsLink.length);
  return (
    <View style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.back}>
            <BackButton
              onPress={() =>
                navigation.navigate('Tabs', {
                  team: false,
                })
              }
            />
          </View>
          <Text style={styles.pageTitle}>Settings</Text>
          <Image style={styles.image} source={profilePicture || imageEsther} />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
          <Feather
            name="log-out"
            color="black"
            style={styles.plusIcon}
            onPress={() => {
              Auth.signOut();
            }}
          />
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
            >
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
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
          {teamsLink.items.map((link) => {
            // console.log({ link });

            return (
              <View style={styles.card} key={link.id}>
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
                      navigation.navigate('Tabs', {
                        team: link.team, // route.params in Tabnavigation.js
                        screen: 'MyTeamScreen',
                        params: {
                          team: link.team, // route.params in MyTeamScreen.js
                        },
                      });
                    }}
                  />
                  <TouchableOpacity style={styles.removeTouch} onPress={() => null} />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

UI.propTypes = {
  // submitProfileInfo: PropTypes.func.isRequired,
  pickImage: PropTypes.func.isRequired,
  profilePicture: PropTypes.any,
  form: PropTypes.shape({ username: PropTypes.string, jobTitle: PropTypes.string }).isRequired,
  setForm: PropTypes.func.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  setSelectedTeam: PropTypes.func.isRequired,
  teamsLink: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default UI;
