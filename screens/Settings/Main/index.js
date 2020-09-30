import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// AWS
import { Storage } from 'aws-amplify';

import Screen from './UI';
import api from '../../../apiwrapper';
import withUser from '../../../contexts/withUser';

const path = 'avatars';

const SettingsScreen = ({ userContext, navigation, route }) => {
  const {
    id: userId,
    name: username,
    jobTitle,
    teamsLink,
    activeTeam: teamLink,
  } = userContext;
  // const team = activeTeam;
    // teamsLink.items
    // .filter(({ team }) => team.id === activeTeam)
    // .map((link)=>link.team)[0];
  // console.log(teamLink.team)
  const teamId = teamLink.team.id;
  const [profilePicture, setAvatar] = useState();
  const [form, setForm] = useState({ username, jobTitle });
  const [selectedTeam, setSelectedTeam] = useState(teamLink.team.name);
  
  const getAvatarFromStorage = async () => {
    const url = await Storage.get(`${path}/${teamId}/avatar${userId}.jpeg`).catch(() =>
      console.log(`ERROR: Can't get() image`)
    );
    setAvatar({ uri: url, cache: 'force-cache' });
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

      Storage.put(`${path}/${teamId}/avatar${userId}.jpeg`, blob, {
        contentType: 'image/jpeg',
      });
      console.log('uploaded to storage')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getAvatarFromStorage();
  }, []);

  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, jobTitle } = route.params.post;
      if (!name || !jobTitle ) {
        console.warn('no name or jobtitle');
        return
      }
      console.log(route.params.post)
      api.updateUser({ id: userId, name, jobTitle });
      setForm({username: name, jobTitle})
    }
  }, [route.params?.post]);

  useEffect(() => {
    if (route.params?.newTeam) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name } = route.params.newTeam;
      if (!name) {
        console.warn("no name for new team");
        return;
      }
      console.log(teamLink.team)
      api.createTeam({
        name,
        companyId: teamLink.team.company.id,
        group: userContext.group,
        active: true,
        admins: [userContext.id]
      }).then((response)=> {
        api.createTeamMemberLink({
          teamId: response.data.createTeam.id,
          userId: userContext.id,
          group: userContext.group,
        });
      })
    }
  }, [route.params?.newTeam]);

  const properties = {
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
    isAdmin: userContext.isAdmin,
    isManager: userContext.isManager,
  };
  return <Screen {...properties} />;
};

export default withUser(SettingsScreen);
