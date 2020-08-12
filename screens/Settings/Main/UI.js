import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
// aws
import { S3Image } from 'aws-amplify-react-native';
import { Feather } from '@expo/vector-icons';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import { imageEsther } from '../../../constants/Images';
import styles from './style';

const UI = ({
  // submitProfileInfo,
  pickImage,
  profilePicture,
  form,
  setForm,
  selectedTeam,
  setSelectedTeam,
  teamLinks,
  navigation,
}) => {
  const admin = true;
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
                  name: 'Verander naam',

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Form', {
                  name: 'Create team',
                  fields: ['name'],
                  screen: 'SettingsScreen',
                  post: 'newTeam',
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
          </View>
        </View>
        <View style={styles.bottom}>
          {teamLinks.map(function (link) {
            // console.log(link.team);
            return (
              <View style={styles.card} key={link.id}>
                <View style={styles.imageContainer}>
                  <Image style={styles.teamImage} source={imageEsther} />
                  {/** (photo && { uri: photo.uri, cache: 'force-cache' }) */}
                </View>
                <View style={styles.innerCard}>
                  {admin ? (
                    <Feather
                      name="settings"
                      color="gray"
                      style={styles.teamIcon}
                      onPress={() => {
                        navigation.navigate('TeamSettingsScreen', {
                          ...link.team,
                        });
                      }}
                    />
                  ) : (
                    <Feather
                      name="x-circle"
                      color="red"
                      style={styles.teamIcon}
                      onPress={() => {
                        // TODO: remove team
                        // disable team
                      }}
                    />
                  )}

                  <Text style={styles.teamName}>{link.team.name}</Text>
                  <NextButton
                    title="View"
                    textSize={14}
                    size={40}
                    onPress={() => {
                      navigation.navigate('Tabs', {
                        team: true,
                      });
                      // TODO: navigate to team tabs
                    }}
                  />
                  <TouchableOpacity style={styles.removeTouch} onPress={() => null} />
                </View>
              </View>
            );
          })}
        </View>
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
  teamLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UI;
