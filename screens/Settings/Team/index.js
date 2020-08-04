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
  const createUser = async (name, jobTitle, email) => {
    // TODO: invite email create user in UserPool
    const {
      data: { createUser: createdUser },
    } = await api
      .createUser({
        name,
        jobTitle,
        email,
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

    // console.log(createdUser);
    // console.log(Object.keys(createTeamMemberLink));

    if (!createTeamMemberLink.errors) {
      setTeamMembers([...teamMembers, { ...createTeamMemberLink, user: createdUser }]);
      setNewUser({ name: '', jobTitle: '', email: '' });
    }
  };

  useEffect(() => {
    if (route.params?.newSkill) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, description } = route.params.newSkill;
      if (!name || !description ) {
        console.warn('no name or description for new skill');
        return
      }
      createSkill(name, description)
    }
  }, [route.params?.newSkill]);

  useEffect(() => {
    console.log('run effect')
    if (route.params?.newMember) {
      console.log('creating new user')
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, jobTitle, email } = route.params.newMember;
      if (!name || !jobTitle || !email ) {
        console.warn('no name | jobTitle | email for new member');
        return
      }
      createUser(name, jobTitle, email)
    }
  }, [route.params?.newMember]);

  // TODO: validation
  const createSkill = async (skillName, skillDescription) => {
    const {
      data: { createSkill: createdSkill },
    } = await api
      .createSkill({
        teamId: team.id,
        name: skillName.replace(/./, (m) => m.toUpperCase()), // First letter uppercase
        description: skillDescription,
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
    // console.log(result);
    
  };

  const sendTeamEvaluations = async () => {
    var user, evaluator, teamWithoutUser;
    for (user of teamMembers) {
      teamWithoutUser = teamMembers.filter((member)=>member.id!=user.id)
      for (evaluator of teamWithoutUser) {
        api.createEvaluationRequest({
          userId: user.id,
          evaluatorId: evaluator.id,
          status: 'PENDING',
        }).catch(({errors})=> {
          console.log('Failed:')
          console.log({
            userId: userContext.id,
            evaluatorId,
          })
          console.log(errors)
        })
      }
    }
  }

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
    sendTeamEvaluations
  };
  return <UI {...properties} />;
}

TeamSettingsScreen.propTypes = {
  userContext: PropTypes.object,
};

export default withUser(TeamSettingsScreen);
