import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// AWS
import { Storage } from 'aws-amplify';

//
import Screen from './UI';
import api from '../../../apiwrapper';
import withUser from '../../../contexts/withUser';

const path = 'avatars';

const SettingsScreen = ({ userContext, navigation }) => {
  const {
    id: userId,
    name: username,
    jobTitle,
    teamsLink: { items: teamLinks },
  } = userContext;

  // const [{ team }] = teamLinks;
  const team = { name: 'test', id: '0' };
  // console.log(team.name);
  // console.log(teams.items[0].team.name);

  const [photo, setAvatar] = useState();
  const [form, setForm] = useState({ username, jobTitle });
  const [selectedTeam, setSelectedTeam] = useState(team.name);

  const getAvatarFromStorage = async () => {
    // get photo
    const url = await Storage.get(`${path}/${team.name}${team.id}/avatar${id}.jpeg`).catch(() =>
      console.log(`ERROR: Can't get() image`)
    );
    // console.log({url})
    // set avatar
    setAvatar({ uri: url });
  };

  const submitProfileInfo = () => {
    const updateUserInput = {
      id: userId,
      name: username,
      jobTitle,
    };
    api.updateUser(updateUserInput);
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
    // getAvatarFromStorage();
  }, []);

  const properties = {
    submitProfileInfo,
    pickImage,
    photo,
    form,
    setForm,
    selectedTeam,
    setSelectedTeam,
    teamLinks,
    navigation,
  };
  return <Screen {...properties} />;
};

export default withUser(SettingsScreen);
