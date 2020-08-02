import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
import withUser from '../../../contexts/withUser';
import api from '../../../apiwrapper';
import UI from './UI';

function TeamSettingsScreen({ userContext, route, navigation }) {
  console.log('TeamSettingsScreen');
  // TODO: const { team } = route.params;
  const { team } = userContext.teamsLink.items[0];
  console.log(route.params);
  // const { teams: [ team ] } = userContext
  // const {
  //   teams: {
  //     items: [
  //       {
  //         name: initialTeamName,
  //         company: { name: initialCompanyName },
  //         members: { items: initialTeamMembers },
  //         skills: { items: initialTeamSkills },
  //       }
  //     ],
  //   },
  // } = userContext;

  const [teamMembers, setTeamMembers] = useState(team.membersLink.items);
  const [teamSkills, setTeamSkills] = useState(team.skills.items.filter((skill) => skill.active));
  const [newUser, setNewUser] = useState({ name: '', jobTitle: '', email: '' });
  const [newSkill, setNewSkill] = useState({ name: '', description: '' });
  const [teamName, setTeamName] = useState(team.name);

  // Get Contact List
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          // const contact = data[0];
          // console.log(data);
        }
      }
    })();
  }, []);
  // Submit changes
  const handlePress = () => {};
  // Add a User to your team TODO: validation
  const createUser = async () => {
    // TODO: invite email create user in UserPool
    const {
      data: { createUser: createdUser },
    } = await api
      .createUser({
        name: newUser.name,
        jobTitle: newUser.jobTitle,
        email: newUser.email,
      })
      .catch((error) => console.log(`ERROR ${error.errors[0].message}`));

    const {
      data: { createTeamMemberLink },
    } = await api
      .createTeamMemberLink({
        userId: createdUser.id,
        teamId: team.id,
      })
      .catch(({ errors }) => {
        console.log(errors);
      });

    console.log(createdUser);
    console.log(Object.keys(createTeamMemberLink));

    if (!createTeamMemberLink.errors) {
      setTeamMembers([...teamMembers, { ...createTeamMemberLink, user: createdUser }]);
      setNewUser({ name: '', jobTitle: '', email: '' });
    }
  };

  // TODO: validation
  const createSkill = async () => {
    const {
      data: { createSkill: createdSkill },
    } = await api
      .createSkill({
        teamId: team.id,
        name: newSkill.name.replace(/./, (m) => m.toUpperCase()), // First letter uppercase
        description: newSkill.description,
      })
      .catch(({ errors }) => {
        console.log(errors);
      });

    console.log(createdSkill.id);
    console.log(team.id);
    console.log(userContext.id);
    const p1 = api
      .createTeamAverage({
        skillId: createdSkill.id,
        userId: userContext.id,
      })
      .catch(({ errors }) => {
        console.log('error creating team average');
        console.log(errors);
      });
    const p2 = api
      .createUserAverage({
        skillId: createdSkill.id,
        teamId: team.id,
      })
      .catch(({ errors }) => {
        console.log('error creating user average');
        console.log(errors);
      });
    await p1;
    await p2;

    if (createdSkill.name && createdSkill.description) {
      setTeamSkills([...teamSkills, createdSkill]);
      setNewSkill({ name: '', description: '' });
    } else {
      // Error pop up?
    }
  };

  const updateHeader = async () => {
    const {
      data: { updateTeam: updatedTeam },
    } = await api.updateTeam({
      id: team.id,
      name: teamName,
    });

    if (updatedTeam.errors) {
      console.log('ERRORS!!!');
    } else {
      console.log('succes');
    }
  };

  const deactivateSkill = async (skillId) => {
    setTeamSkills(teamSkills.filter((skill) => skillId !== skill.id));
    const {
      data: { deleteSkill: result },
    } = await api.deleteSkill(skillId).catch(console.log);
  };

  const deleteMember = async (teamMemberLinkId) => {
    setTeamMembers(teamMembers.filter((user) => teamMemberLinkId !== user.id));
    const {
      data: { deleteTeamMemberLink: result },
    } = await api.deleteTeamMemberLink(teamMemberLinkId).catch(console.log);
    console.log(result);
  };
  const properties = {
    teamMembers,
    teamSkills,
    newUser,
    setNewUser,
    newSkill,
    setNewSkill,
    teamName,
    setTeamName,
    handlePress,
    createUser,
    updateHeader,
    deactivateSkill,
    deleteMember,
    createSkill,
    navigation,
  };
  return <UI {...properties} />;
}

TeamSettingsScreen.propTypes = {
  userContext: PropTypes.object,
};

export default withUser(TeamSettingsScreen);
