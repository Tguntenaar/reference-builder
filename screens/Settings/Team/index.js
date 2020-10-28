import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as Contacts from "expo-contacts";
import withUser from "../../../contexts/withUser";
import api from "../../../apiwrapper";
import UI from "./UI";
import { updateSkill } from "../../../apiwrapper/graphql/mutations";
/**
 * 
 * @param {} param0 
 * 
 * TODO:
 * MANAGERS TOEVOEGEN EN VERWIJDEREN MOET SOEPELER GAAN
 * meerdere managers moeten elkaar rate niet allemaal een request knop hebben
 * 
 * split managers en employess net als in team screen
 * create different skills inside team (boolean in skill)
 * 
 */
function TeamSettingsScreen({ userContext, route, navigation }) {
  /** het team word meegegeven
   * maar als de usercontext dan refresht
   * refresht de pagina niet
   * dus met het meegegeven team id moet je het team uit de usercontext halen
   */
  console.log("TeamSettingsScreen");
  const { team : { id: teamId } } = route.params;
  const { teamsLink: { items: links } } = userContext;
  const team = links.find((link) => link.team.id === teamId).team;

  const [teamMembers, setTeamMembers] = useState(
    team.membersLink.items.filter((link) => link.active && !team.admins.includes(link?.user?.id)));
    
  const [teamManagers, setTeamManagers] = useState(
    team.membersLink.items.filter((link) => link.active && team.admins.includes(link?.user?.id)));
  
  const [teamSkills, setTeamSkills] = useState(team.skills.items);
  const [teamName, setTeamName] = useState(team.name);

  // Get Contact List
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
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
  
  useEffect(() => {
    if (route.params?.newManagerSkill) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, description } = route.params.newManagerSkill;
      if (!name || !description) {
        console.warn("no name or description for new skill");
        return;
      }
      createSkill(name, description, true);
    }
  }, [route.params?.newManagerSkill]);

  // newSkill
  useEffect(() => {
    if (route.params?.newSkill) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, description } = route.params.newSkill;
      if (!name || !description) {
        console.warn("no name or description for new skill");
        return;
      }
      createSkill(name, description, false);
    }
  }, [route.params?.newSkill]);

  // ActivateSkill
  useEffect(() => {
    const activateSkill = async () => {
      if (route.params?.activateSkillId) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
        console.log('activating skill..');
        const { data: { updateSkill } } = await api
          .updateSkill({
            id: route.params.activateSkillId,
            active: true,
          })
          
          .catch(({ errors }) => console.log(errors));
        
        setTeamSkills(
          team.skills.items.map((item) => {
            if (item.id == updateSkill.id) {
              item.active = true;
            }
            return item;
          })
        );
      }
    };
    activateSkill();
  }, [route.params?.activateSkillId]);
  
  // newMember
  useEffect(() => {
    // console.log("run effect");
    if (route.params?.newMember) {
      console.log("creating new user");
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const { name, jobTitle, email } = route.params.newMember;
      if (!name || !jobTitle || !email) {
        console.warn("no name | jobTitle | email for new member");
        return;
      }
      inviteUser(name, jobTitle, email).catch((error) => {
        console.log("CAN't create a user ");
      });
    }
  }, [route.params?.newMember]);

  // newManager
  useEffect(() => {
    if (route.params?.newManager) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const [{user:{id:newManagerID}}] = teamMembers.filter((link) => link.id === route.params.newManager);
      const newManagers = Array.from(new Set([...team.admins, newManagerID]));
      api.updateTeam({
        id: team.id,
        admins: newManagers
      }).then((response) => {
        // TODO: update team admins eerst :)
        setTeamManagers(
          [
            ...teamManagers,
            teamMembers.find((link) => link?.user?.id === newManagerID)
          ]
        );
        setTeamMembers(teamMembers.filter((link) => !newManagers.includes(link?.user?.id)));
      }).catch(console.log)
      
    }
  }, [route.params?.newManager]);

    // Ask for Evaluation Request
    useEffect(() => {
      if (route.params?.select) {
        for (const { sendRequest, user: { id: userId } } of route.params.select) {
          if (sendRequest) {
            const evaluationRequest = {
              evaluatorId: userContext.id,
              userId,
              group: userContext.group,
              status: "PENDING",
            };
            api.createEvaluationRequest(evaluationRequest).then(() => {
              console.log('succes');
            }).catch((error) => {
              console.log('Errored with', evaluationRequest);
              console.log({evaluationRequest})
            });
          }
        }
      }
    }, [route.params?.select]);

   // Activate Member/Manager
   useEffect(() => {
    if (route.params?.activateMember) {
      const memberLinkID = route.params.activateMember;
      setTeamMembers(
        [
          ...teamMembers,
          team.membersLink.items.find((link) => link.id === memberLinkID)
        ]
      );
      api.updateTeamMemberLink({ 
        id: memberLinkID, 
        active: true,
      })
      .then(() => {
        console.log('activated member');
      })
      .catch((error) => {
        console.log("ERROR in activateoldmemember");
        console.log(error);
        // revert UI
        setTeamMembers(teamMembers.filter((link) => link?.user?.id === memberLinkID));
      });
    }
  }, [route.params?.activateMember]);
  
  // Add a User to your team TODO: validation
  const inviteUser = async (name, jobTitle, email) => {
    // TODO: invite email create user in UserPool
    const {
      data: { createUser: createdUser },
    } = await api
      .createUser({
        name,
        jobTitle,
        email,
        group: userContext.group,
        activeTeamID: team.id,
      })
      .catch((error) => console.log(`ERROR ${error.errors[0].message}`));

    const {
      data: { createTeamMemberLink },
    } = await api
      .createTeamMemberLink({
        userId: createdUser.id,
        teamId: team.id,
        group: userContext.group,
      })
      .catch(({ errors }) => {
        console.log(errors);
      });

    // TODO: Add to Group kan beter in de back end gebeuren bij 
    // console.log('started addToGroup function: ', name, userContext.group);
    // const result = await api.addToGroup(name, userContext.group).catch((error) => {
    //   console.log("Can't add to Group");
    //   console.log(error);
    // })
    // console.log('SUCCES', result);

    if (!createTeamMemberLink.errors) {
      setTeamMembers([
        ...teamMembers,
        // overschrijf de user
        { ...createTeamMemberLink, user: createdUser },
      ]);
    }
  };

  const navigateToSkillForm = (forManager) => {
    navigation.navigate('Form', {
      name: "Add skills",
      screen: "TeamSettingsScreen",
      post: forManager ? "newManagerSkill":"newSkill",
      update: "activateSkillId",
      list: teamSkills.filter((skill) => !skill.active && 
      (forManager ? skill.forManager: !skill.forManager)),
      form: [
        {
          text: "Name",
          key: "name",
          value: "",
        },
        {
          text: "Description",
          key: "description",
          value: "",
        },
      ],
    });
  };
  
  const addManager = () => {
    navigation.navigate('Form', {
      name: "Choose manager", // Title of page
      screen: "TeamSettingsScreen", // page to return to
      post: "newManager", // When submitted
      update: "newManager", // When try to activate
      list: teamMembers, // List of candidates 
      form: [], // Fields of the form { text, key, value }
    });
  }

  const removeManager = (adminID) => {
    console.log('adminID:', adminID);
    const newAdmins = team.admins.filter((id) => adminID !== id);
    api.updateTeam({
      id: team.id,
      admins: newAdmins
    }).then(() => {
      setTeamMembers(
        [
          ...teamMembers,
          teamManagers.find((link) => link.user.id === adminID)
        ]
      );
      setTeamManagers(teamManagers.filter((link) => link?.user?.id !== adminID));
    })
  }

  const addMember = () => {
    navigation.navigate('Form', {
      name: 'Add members',
      screen: 'TeamSettingsScreen',
      post: 'newMember',
      update:'activateMember',
      list: team.membersLink.items.filter((link) => !link.active), // TODO: inactive teammemberlinks
      form: [
        {
          text: 'Name',
          key: 'name',
          value: '',
        },
        {
          text: 'Job title',
          key: 'jobTitle',
          value: '',
        },
        {
          text: 'E-mail',
          key: 'email',
          value: '',
        },
      ],
    });
  }

  // TODO: validation
  const createSkill = async (skillName, skillDescription, forManager) => {
    const {
      data: { createSkill: createdSkill },
    } = await api
      .createSkill({
        teamId: team.id,
        name: skillName.replace(/./, (m) => m.toUpperCase()), // First letter uppercase
        description: skillDescription,
        active: true,
        group: userContext.group,
        forManager
      })
      .catch(({ errors }) => {
        console.log(errors);
      });

    // console.log(createdSkill.id);
    // console.log(team.id);
    // console.log(userContext.id);
    const p1 = api
      .createTeamAverage({
        skillId: createdSkill.id,
        userId: userContext.id,
        group: userContext.group,
      })
      .catch(({ errors }) => {
        console.log("error creating team average");
        console.log(errors);
      });
    const p2 = api
      .createUserAverage({
        skillId: createdSkill.id,
        teamId: team.id,
        group: userContext.group,
      })
      .catch(({ errors }) => {
        console.log("error creating user average");
        console.log(errors);
      });
    await p1;
    await p2;

    if (createdSkill.name && createdSkill.description) {
      setTeamSkills([...teamSkills, createdSkill]);
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
      console.log("ERRORS!!!");
    } else {
      console.log("succes");
    }
  };

  const deactivateSkill = async (id) => {
    setTeamSkills(teamSkills.map((skill) => { 
      if (id === skill.id) {
        skill.active = false;
      }
      return skill 
    }));
    // const {
    //   data: { updateSkill: result },
    // } = await api.updateSkill({ id, active: false }).catch(console.log);
    await api.updateSkill({id, active: false})
    .then((response) => {
      console.log('gelukt');
    }).catch((error) => {
      console.log('gevaald');
    });
  };

  const deleteMember = (user_id, teammemberLinkid) => {
    api.deleteTeamMemberLink({id: teammemberLinkid}).then((response) => {
      if (user_id) {
        api.deleteUser({id: user_id}).then((response) => {
          console.log('gelukt');
          setTeamMembers(teamMembers.filter((link) => link.id !== teammemberLinkid))
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch(console.log);
  }

  const deactivateMember = async (teamMemberLinkId) => {
    setTeamMembers(teamMembers.filter((link) => link.id !== teamMemberLinkId));
    const {
      data: { updateTeamMemberLink: result },
    } = await api.updateTeamMemberLink({ 
      id: teamMemberLinkId, 
      active: false
    }).catch(console.log);
    console.log('deactivated');
  };

  const sendTeamEvaluations = async () => {
    var user, evaluator, teamWithoutUser;
    for (user of teamMembers) {
      teamWithoutUser = team.membersLink.items.filter((member) => member.id != user.id);
      for (evaluator of teamWithoutUser) {
        api
          .createEvaluationRequest({
            userId: user.id,
            evaluatorId: evaluator.id,
            status: "PENDING",
            group: userContext.group,

          })
          .catch(({ errors }) => {
            console.log("Failed:");
            console.log({
              userId: userContext.id,
              evaluatorId,
            });
            console.log(errors);
          });
      }
    }
  };

  const properties = {
    teamManagers,
    teamMembers,
    teamSkills,
    teamName,
    setTeamName,
    updateHeader,
    deactivateSkill,
    deleteMember,
    deactivateMember,
    createSkill,
    navigation,
    navigateToSkillForm,
    sendTeamEvaluations,
    userContext,
    addManager,
    addMember,
    admins: team.admins,
    removeManager
  };
  return <UI {...properties} />;
}

TeamSettingsScreen.propTypes = {
  userContext: PropTypes.object,
};

export default withUser(TeamSettingsScreen);
