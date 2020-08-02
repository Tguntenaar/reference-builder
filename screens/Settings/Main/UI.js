import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// aws
import { S3Image } from 'aws-amplify-react-native';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import { imageEsther } from '../../../constants/Images';
import styles from './style';
import { width } from '../../../constants/Utils';

const UI = ({
  submitProfileInfo,
  pickImage,
  photo,
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
          <View style={styles.topLeft}>
            <BackButton />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.pageTitle}>Settings</Text>
            <Image style={styles.image} source={(photo && { uri: photo.uri }) || imageEsther} />
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.names}>
            <View>
              <TextInput
                style={[styles.input, styles.inputName]}
                clearTextOnFocus={false}
                onChangeText={(text) => setForm({ ...form, username: text })}
                value={form.username}
                placeholder="username"
              />
              <TextInput
                style={[styles.input, styles.inputJobTitle]}
                clearTextOnFocus={false}
                onChangeText={(text) => setForm({ ...form, jobTitle: text })}
                value={form.jobTitle}
                placeholder="job title"
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.teams}>Teams</Text>
        </View>
        <View style={styles.bottom}>
          {[{ name: 'Team Jaaf', id: 1 }].map(function (team) {
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.teamImage}
                    source={(photo && { uri: photo.uri }) || imageEsther}
                  />
                </View>
                <View style={styles.innerCard}>
                  <Text style={styles.teamName}>{team.name}</Text>
                  <NextButton
                    title="View"
                    onPress={() => {
                      navigation.navigate('TeamSettingsScreen', {
                        ...team,
                      });
                    }}
                  />
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
  submitProfileInfo: PropTypes.func.isRequired,
  pickImage: PropTypes.func.isRequired,
  photo: PropTypes.any,
  form: PropTypes.shape({ username: PropTypes.string, jobTitle: PropTypes.string }).isRequired,
  setForm: PropTypes.func.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  setSelectedTeam: PropTypes.func.isRequired,
  teamLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UI;
