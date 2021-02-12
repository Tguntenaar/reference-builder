import React, { useEffect, useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from 'expo-image-manipulator';

// AWS
import { Storage } from "aws-amplify";

import { UserContext } from '../../../contexts/UserContext';
import { CacheManager } from "react-native-expo-image-cache";


import Screen from "./UI";
import api from "../../../apiwrapper";
import withUser from "../../../contexts/withUser";
import { buildS3Key } from '../../../constants/Utils';

const _resizeImage = async (image) => {
  const manipResult = await ImageManipulator.manipulateAsync(
    image.localUri || image.uri,
    [ { resize: { width: 100 } }],
    { compress: 1, format: ImageManipulator.SaveFormat.PNG }
  );
  // setImage(manipResult);
  return manipResult;
};

const uploadAvatarToS3 = async (teamId, userId, { uri }) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return Storage.put(buildS3Key(teamId, userId), blob, {
    contentType: "image/jpeg",
  }).then(response => {
    console.log('uploaded to storage');
    return response;
  });
};

/**
 * gets an avatar from storage
 *
 */

const downloadAvatarFromS3 = async (teamId, userId) => {
  return Storage.get(buildS3Key(teamId, userId))
  .catch(() => console.log(`Error: Can't get() image`))
};


// if db img -> local? anders remote uri

// else if show default + image picker


const SettingsScreen = ({ navigation, route }) => {
  const userContext = useContext(UserContext);

  const {
    id: userId,
    name: username,
    jobTitle,
    teamsLink: allTeams,
    activeTeam: teamLink,
  } = userContext;

  const teamId = teamLink.team.id;
  /**
   * {
    test: true,
    uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641',
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  }
   */
  const [profilePicture, setAvatar] = useState(false);

  const [form, setForm] = useState({ username, jobTitle });
  const [teamsLink, setTeamsLink] = useState(
    allTeams.items.map((link) => {
      return { ...link, isActive: link.id === teamLink.id };
    })
  );

  const toggleSwitch = () => setIsEnabled(state => !state);

  const getAvatarFromStorage = async () => {
    downloadAvatarFromS3(teamId, userId)
    .then((url => {
      console.log('downloaded');
      console.log(url);
      setAvatar(url);
    }
    ))
    .catch((error) => {
      console.log(`ERROR: Can't get() image`);
      console.log(error);
    });
  };

  // TODO: add button to set active team and use this function
  const setActiveTeam = (teamLinkID) => {
    api
      .updateUser({
        id: userContext.id,
        activeTeamID: teamLinkID,
      })
      .then((response) => {
        console.log("Updated active team succesfully");
        setTeamsLink(
          allTeams.items.map((link) => {
            return { ...link, isActive: link.id === teamLinkID };
          })
        );
      })
      .catch((error) => {
        console.log("updateUser failed");
        console.log();
      });
  };

  const deleteTeam = (link) => {
    const promiseToDeleteAllLinks = link.team.membersLink.items.map((link) =>
      api.deleteTeamMemberLink({ id: link.id })
    );
    Promise.all(promiseToDeleteAllLinks)
      .then(() => {
        api
          .deleteTeam({ id: link.team.id })
          .then((response) => {
            console.log("deleted Team");
            setTeamsLink(teamsLink.filter((tl) => tl.id !== link.id));
          })
          .catch(({ errors }) => {
            console.log("deleteTeamMemberLink failed");
            console.log(errors);
          });
      })
      .catch(({ errors }) => {
        console.log("deleteTeamMemberLink failed");
        console.log({ errors });
      });
  };

  const pickImage = () => {
    const options = {
      base64: true,
      // noData: true,
      allowsEditing: true,
      aspect:[1,1],
    };

    ImagePicker.launchImageLibraryAsync(options)
      .then((response) => {
        console.log(Object.keys(response));
        console.log({...response, base64: 'test'})
        if (response.cancelled) {
          return;
        }

        if (response.uri) {
          _resizeImage(response).then((resized) => {
            console.log('resize succes');
            console.log(resized)
            setAvatar(resized);
            uploadAvatarToS3(teamId, userId, resized);
          }).catch((error) => {
            console.log('Resizing image failed');
            console.log(error);
          });
          console.log('setting avatar');
          // CacheManager.clearCache();
          // setAvatar(response);
          // uploadAvatarToS3(teamId, userId, response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    getAvatarFromStorage();
  }, []);

  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, jobTitle } = route.params.post;
      if (!name || !jobTitle) {
        console.warn("no name or jobtitle");
        return;
      }
      console.log(route.params.post);
      api.updateUser({ id: userId, name, jobTitle });
      setForm({ username: name, jobTitle });
      userContext.dispatch({type: 'changeName', name, jobTitle });
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
      api
        .createTeam({
          name,
          companyId: teamLink.team.company.id,
          group: userContext.group,
          active: true,
          admins: [userContext.id],
        })
        .then((response) => {
          api
            .createTeamMemberLink({
              teamId: response.data.createTeam.id,
              userId: userContext.id,
              group: userContext.group,
            })
            .then(({ data: { createTeamMemberLink: createdLink } }) => {
              // Add createdLink to userContext
              // TODO: dispatch here
              // userContext.setUserContext({...userContext, teamsLink: { items: [...userContext.teamsLink.items, createdLink] }})
              setTeamsLink([...teamsLink, createdLink]);
            })
            .catch((error) => {
              console.log("createTeam failed");
              console.log(error);
            });
        })
        .catch((error) => {
          console.log("createTeamMemberLink failed");
          console.log(error);
        });
    }
  }, [route.params?.newTeam]);

  const properties = {
    userContext,
    pickImage,
    profilePicture,
    form,
    teamLink,
    teamsLink,
    navigation,
    deleteTeam,
  };
  return <Screen {...properties} />;
};

export default withUser(SettingsScreen);
