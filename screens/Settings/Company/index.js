import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import PropTypes from 'prop-types';
import Screen from './UI';
import withUser from '../../../contexts/withUser';
import api from '../../../apiwrapper';

function CompanySettingsScreen({ userContext }) {
  const { team } = userContext.teamsLink.items[0];

  const [teamMembers, setTeamMembers] = useState(team.membersLink.items);
  const [teams, setTeams] = useState(team.company.teams.items);
  const [newUser, setNewUser] = useState({ name: '', jobTitle: '', email: '' });
  const [newTeam, setNewTeam] = useState('');
  const [companyName, setCompany] = useState(team.company.name);

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
    // TODO: create average for every skill in this team
    const {
      data: { createUser: createdUser },
    } = await api
      .createUser({
        name: newUser.name,
        jobTitle: newUser.jobTitle,
        email: newUser.email,
      })
      .catch(({ errors }) => console.log(`Error creating user ${errors[0].message}`));

    const teamLink = await api
      .createTeamMemberLink({
        userId: createdUser.id,
        teamId: team.id,
      })
      .catch(console.log);

    if (!teamLink.errors) {
      setTeamMembers([...teamMembers, { ...teamLink, user: createdUser }]);
      setNewUser({ name: '', jobTitle: '', email: '' });
    }
  };

  // TODO: validation
  const createTeam = async () => {
    const {
      data: { createTeam: createdTeam },
    } = await api
      .createTeam({
        companyId: team.company.id,
        name: newTeam,
      })
      .catch((error) => console.log(`ERROR creating skill.. \n${error.errors[0].message}`));
    console.log(createdTeam);
    if (createdTeam.name) {
      setTeams([...teams, createdTeam]);
      setNewTeam('');
    }
  };

  const updateHeader = async () => {
    const t2 = () =>
      api.updateCompany({
        id: team.company.id,
        name: companyName,
      });

    // const t2 = updateCompanyName();

    const {
      data: { updateTeam: updatedTeam },
    } = await t1;
    const {
      data: { updateCompany: updatedCompany },
    } = await t2;

    if (updatedTeam.errors || updatedCompany.errors) {
      console.log('ERRORS!!!');
    } else {
      console.log('succes');
    }
  };

  const removeTeam = async (teamId) => {
    setTeams(teams.filter((team) => teamId !== team.id));
    const {
      data: { deleteTeam: result },
    } = await api.deleteTeam(teamId).catch(console.log);
  };

  const deleteMember = async (teamMemberLinkId) => {
    setTeamMembers(teamMembers.filter((user) => teamMemberLinkId !== user.id));
    const {
      data: { deleteTeamMemberLink: result },
    } = await api.deleteTeamMemberLink(teamMemberLinkId).catch(console.log);
  };
  const props = {
    teams,
    teamMembers,
    companyName,
    setCompany,
    removeTeam,
    setNewTeam,
    handlePress,
    createTeam,
    setNewUser,
    deleteMember,
    createUser,
    newUser,
    newTeam,
    updateHeader,
  };
  return <Screen {...props} />;
}

CompanySettingsScreen.propTypes = {
  userContext: PropTypes.object.isRequired,
};

export default withUser(CompanySettingsScreen);
