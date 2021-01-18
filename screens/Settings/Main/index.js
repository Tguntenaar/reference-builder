import React, { useEffect, useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";

// AWS
import { Storage } from "aws-amplify";

import { userContext } from '../../../contexts/UserContext';

import Screen from "./UI";
import api from "../../../apiwrapper";
import withUser from "../../../contexts/withUser";

const path = "avatars";


const SettingsScreen = ({ userContext, navigation, route }) => {

  // TODO: useContext
  // const value = useContext(userContext);
  const {
    id: userId,
    name: username,
    jobTitle,
    teamsLink: allTeams,
    activeTeam: teamLink,
    isManager,
    developerMode
  } = userContext;

  const teamId = teamLink.team.id;
  const [modalVisible, setModalVisible] = useState(false);
  const [profilePicture, setAvatar] = useState();
  const [form, setForm] = useState({ username, jobTitle });
  const [selectedTeam, setSelectedTeam] = useState(teamLink.team.name);
  const [teamsLink, setTeamsLink] = useState(
    allTeams.items.map((link) => {
      return { ...link, isActive: link.id === teamLink.id };
    })
  );

  const toggleSwitch = () => setIsEnabled(state => !state);

  const getAvatarFromStorage = async () => {
    const url = await Storage.get(
      `${path}/${teamId}/avatar${userId}.jpeg`
    ).catch(() => console.log(`ERROR: Can't get() image`));
    setAvatar({ uri: url, cache: "force-cache" });
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
        contentType: "image/jpeg",
      });
      console.log("uploaded to storage");
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
    deleteTeam,
    modalVisible,
    setModalVisible,
    developerMode,
    isManager
  };
  return <Screen {...properties} />;
};

export default withUser(SettingsScreen);
