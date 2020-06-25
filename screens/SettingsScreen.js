import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { S3Image } from 'aws-amplify-react-native';
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import NextButton from '../components/NextButton';
import { updateUser } from '../src/graphql/mutations';
import { getUser } from '../src/graphql/queries';

const path = 'avatars';
const localFile =
  'file:///Users/thomasguntenaar/Library/Developer/CoreSimulator/Devices/9643F18B-C63C-462F-90AF-0EC5C1678899/data/Containers/Data/Application/8216810A-FB0F-4300-86A3-1788971755E3/Library/Caches/ExponentExperienceData/%2540thomasguntenaar%252FreferenceBuilder/ImagePicker/652C26FE-0CFE-4810-A3DE-F45EA6146D01.jpg';

function SettingsScreen({ navigation }) {
  const [username, setUsername] = useState('username');
  const [team, setTeam] = useState({ name: '', id: '' });
  const [jobTitle, setJobTitle] = useState('job title');
  const [id, setId] = useState('not-logged-in');
  const [photo, setAvatar] = useState();

  const getID = async () => {
    // get user
    const { attributes } = await Auth.currentAuthenticatedUser().catch((err) => console.log(err));
    setId(attributes.sub);
    return new Promise.resolve(id);
  };
  const getAvatarFromStorage = async () => {
    // get photo
    const url = await Storage.get(`${path}/${team.name}${team.id}/avatar${id}.jpeg`).catch(() =>
      console.log(`ERROR: Can't get() image`)
    );
    // console.log({url})
    // set avatar
    setAvatar({ uri: url });
  };
  const getInfo = async () => {
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: 'b403da70-bea8-4e54-9cff-6a68e9d07f4d' })
    ).catch((error) => console.log(`ERROR: Can't getUSER \n ${error.message}`));

    const {
      data: {
        getUser: {
          name,
          jobTitle,
          teams: {
            items: [{ team }],
          },
        },
      },
    } = userData;
    setTeam(team);
    setUsername(name);
    setJobTitle(jobTitle);
    getAvatarFromStorage();
  };
  const submitProfileInfo = () => {
    const updateUserInput = {
      id,
      name: username,
      jobTitle,
    };
    API.graphql(graphqlOperation(updateUser, updateUserInput));
  };
  const pickImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibraryAsync(options)
      .then((response) => {
        console.log({ response });
        if (response.cancelled) {
          return;
        }

        if (response.uri) {
          setAvatar(response);
          uploadToStorage(response.uri);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const uploadToStorage = async (pathToImageFile) => {
    try {
      const response = await fetch(pathToImageFile);

      const blob = await response.blob();

      Storage.put(`${path}/${team.name}${team.id}/avatar${id}.jpeg`, blob, {
        contentType: 'image/jpeg',
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getID().then(() => getInfo());
  }, []);

  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/**
          // <S3Image style={{height: 50, width: 50}}key={'path'} picker body={photo} fileToKey={fileToKey}/>
          // <S3Image level="private" preview="hidden" path="test/" fileToKey={fileToKey} onLoad={handleLoad} picker />
        
        */}

          <Image
            style={styles.image}
            source={
              (photo && { uri: photo.uri }) || require('../assets/images/thomas-guntenaar.jpeg')
            }
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          {/**
          <S3Image key={'testing'} picker/>
         */}
          <TextInput
            style={styles.input}
            clearTextOnFocus={false}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="username"
          />
          <TextInput
            style={styles.input}
            clearTextOnFocus={false}
            onChangeText={(text) => setJobTitle(text)}
            value={jobTitle}
            placeholder="job title"
          />
        </View>
        <View style={styles.bottom}>
          <NextButton title="Submit" onPress={submitProfileInfo} />
        </View>
      </View>
    </ScrollView>
  );
}

const imageSize = 130;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: 0.3 * height,
    // backgroundColor: 'red',
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'lightgrey',
  },
  edit: {
    color: 'blue',
    fontSize: 20,
  },
  middle: {
    paddingTop: 50,
    height: 0.5 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom: {
    height: 0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default SettingsScreen;
