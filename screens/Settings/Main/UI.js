import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// aws
import { S3Image } from 'aws-amplify-react-native';
import NextButton from '../../../components/NextButton';
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
}) => {
  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/**
          // <S3Image style={{height: 50, width: 50}}key={'path'} picker body={photo} fileToKey={fileToKey}/>
          // <S3Image level="private" preview="hidden" path="test/" fileToKey={fileToKey} onLoad={handleLoad} picker />
        */}

          <Image style={styles.image} source={(photo && { uri: photo.uri }) || imageEsther} />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <S3Image key="testing" picker />
          <TextInput
            style={styles.input}
            clearTextOnFocus={false}
            onChangeText={(text) => setForm({ ...form, username: text })}
            value={form.username}
            placeholder="username"
          />
          <TextInput
            style={styles.input}
            clearTextOnFocus={false}
            onChangeText={(text) => setForm({ ...form, jobTitle: text })}
            value={form.jobTitle}
            placeholder="job title"
          />
          <Text>Pick current team:</Text>
          <Picker
            selectedValue={selectedTeam}
            style={{ height: 50, width }}
            onValueChange={(itemValue) => setSelectedTeam(itemValue)}
          >
            {teamLinks.map(({ team }) => {
              return <Picker.Item key={team.id} label={team.name} value={team.id} />;
            })}
            {/**
            <Picker.Item label="Second team" value="1" />
            <Picker.Item label="Third team" value="2" /> */}
          </Picker>
        </View>
        <View style={styles.bottom}>
          <NextButton title="Submit" onPress={submitProfileInfo} />
        </View>
      </View>
    </ScrollView>
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
