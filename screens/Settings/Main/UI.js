import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
// aws
import { S3Image } from 'aws-amplify-react-native';
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
  return (
    <View style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.back}>
            <BackButton onPress={() => navigation.goBack()} />
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

          <Text style={styles.teams}>Teams</Text>
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
                  <Text style={styles.teamName}>{link.team.name}</Text>
                  <NextButton
                    title="View"
                    textSize={14}
                    size={40}
                    onPress={() => {
                      navigation.navigate('TeamSettingsScreen', {
                        ...link.team,
                      });
                    }}
                  />
                  <TouchableOpacity style={styles.removeTouch} onPress={() => null}>
                    <Text style={styles.remove}>Remove</Text>
                  </TouchableOpacity>
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
