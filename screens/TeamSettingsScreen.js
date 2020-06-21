import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import NextButton from "../components/NextButton";
import ModalScreen from "./ModalScreen";
import { TextInput } from "react-native-gesture-handler";
import * as Contacts from "expo-contacts";
import * as mutations from "../src/graphql/mutations";
import { UserContext } from "../contexts/UserContext";
import { API, graphqlOperation } from "aws-amplify";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const imageSize = 40;

function Screen(props) {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        return <TeamSettingsScreen userContext={userContext} {...props} />;
      }}
    </UserContext.Consumer>
  );
}

function TeamSettingsScreen({ navigation, userContext }) {
  const team = userContext.teams.items[0].team;
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

  const [teamMembers, setTeamMembers] = useState(team.members.items);
  const [teamSkills, setTeamSkills] = useState(team.skills.items);
  const [newUser, setNewUser] = useState({ name: "", jobTitle: "", email: "" });
  const [newSkill, setNewSkill] = useState({ name: "", description: "" });
  const [teamName, setTeamName] = useState(team.name);
  const [companyName, setCompany] = useState(team.company.name);

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
  // Submit changes
  const handlePress = () => {};
  // Add a User to your team
  const createUser = async () => {
    // TODO: invite email create user in UserPool
    const {
      data: { createUser: createdUser },
    } = await API.graphql(
      graphqlOperation(mutations.createUser, {
        input: {
          name: newUser.name,
          jobTitle: newUser.jobTitle,
        },
      })
    ).catch((error) => console.log("ERROR " + error.errors[0].message));

    const teamLink = await API.graphql(
      graphqlOperation(mutations.createTeamMemberLink, {
        input: {
          userId: createdUser.id,
          teamId: team.id,
        },
      })
    ).catch((error) => {
      console.log(error);
    });

    if (!teamLink.errors) {
      setTeamMembers([...teamMembers, { ...teamLink, user: createdUser  }]);
      setNewUser({ name: "", jobTitle: "", email: "" });
    }
  };

  const createSkill = async () => {
    const {
      data: { createSkill: createdSkill },
    } = await API.graphql(
      graphqlOperation(mutations.createSkill, {
        input: {
          teamId: team.id,
          name: newSkill.name,
          description: newSkill.description,
        },
      })
    ).catch((error) =>
      console.log("ERROR creating skill.. \n" + error.errors[0].message)
    );
    if (createdSkill.name && createdSkill.description) {
      setTeamSkills([...teamSkills, createdSkill]);
      setNewSkill({ name: "", description: "" });
    }
  };

  const updateHeader = async () => {
    const updateTeamName = () => {
      return API.graphql(
        graphqlOperation(mutations.updateTeam, {
          input: {
            id: team.id,
            name: teamName,
          },
        })
      );
    };
    const updateCompanyName = () => {
      return API.graphql(
        graphqlOperation(mutations.updateCompany, {
          input: {
            id: team.company.id,
            name: companyName,
          },
        })
      );
    };

    let t1 = updateTeamName();
    let t2 = updateCompanyName();

    const {
      data: { updateTeam: updatedTeam },
    } = await t1;
    const {
      data: { updateCompany: updatedCompany },
    } = await t2;

    if (updatedTeam.errors || updatedCompany.errors) {
      console.log("ERRORS!!!");
    } else {
      console.log("succes");
    }
  };

  const deleteSkill = async (skillId) => {
    console.log(skillId)
    setTeamSkills(teamSkills.filter((skill)=>skillId!==skill.id))
    const { data: { deleteSkill: result}} = await API.graphql(
      graphqlOperation(mutations.deleteSkill, {
        input: { id: skillId },
      })
    ).catch(console.log)
    console.log(result.id)

  };

  const deleteMember = async (teamMemberLinkId) => {
    console.log(teamMemberLinkId)
    setTeamMembers(teamMembers.filter((user)=>teamMemberLinkId!==user.id))
    const { data: { deleteTeamMemberLink: result}} = await API.graphql(
      graphqlOperation(mutations.deleteTeamMemberLink, {
        input: { id: teamMemberLinkId },
      })
    ).catch(console.log)
    console.log(result.id)

  };

  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/*<Text style={{fontSize: 40}}> Team name </Text>
          <Text style={{fontSize: 25}}> Company </Text>*/}
          <TextInput
            style={[styles.input, { fontSize: 40 }]}
            clearTextOnFocus={false}
            onChangeText={(text) => setTeamName(text)}
            value={teamName}
            placeholder={"Team name"}
          />
          <TextInput
            style={[styles.input, { fontSize: 25 }]}
            clearTextOnFocus={false}
            onChangeText={(text) => setCompany(text)}
            value={companyName}
            placeholder={"Company"}
          />
        </View>
        <View style={styles.middle}>
          {/** SKILLS */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text> {teamSkills.length} skills</Text>
            <TouchableOpacity>
              <Text style={{ color: "blue" }}> Add </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 0,
              borderBottomWidth: 1,
              borderColor: "lightgrey",
              width: width,
            }}
          >
            {teamSkills.length ? (
              teamSkills.map((skill, index) => (
                <View
                  key={index}
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: "lightgrey",
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Text>
                      {skill.name}, {skill.description} {/** */}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 40, top: 10 }}
                    onPress={() => deleteSkill(skill.id)}
                  >
                    <Text style={{ color: "red" }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Start adding skills your team should evaluate</Text>
            )}
          </View>

          {/** NEW SKILL FORM */}
          <TextInput
            onChangeText={(text) => setNewSkill({ ...newSkill, name: text })}
            value={newSkill.name}
            placeholder={"name"}
          />

          <TextInput
            onChangeText={(text) =>
              setNewSkill({ ...newSkill, description: text })
            }
            value={newSkill.description}
            placeholder={"description"}
          />

          <Button title="Submit" onPress={createSkill} />
          {/** END NEW SKILL FORM */}

          {/** TEAM MEMBERS */}
          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text> {teamMembers.length} members</Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={{ color: "blue" }}> Invite </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 0,
              borderBottomWidth: 1,
              borderColor: "lightgrey",
              width: width,
            }}
          >
            {teamMembers.length ? (
              teamMembers.map(({ id: teamMemberLinkId, user }) => (
                <View
                  key={teamMemberLinkId}
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: "lightgrey",
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Image
                    style={styles.image}
                    source={require("../assets/images/boris-guntenaar.jpeg")}
                  />
                  {/* TODO: teammember image */}
                  <View style={{ flexDirection: "column", marginLeft: 10 }}>
                    <Text>{user.name}</Text>
                    <Text>{user.jobTitle}</Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 40, top: 10 }}
                    onPress={() => deleteMember(teamMemberLinkId)}
                  >
                    <Text style={{ color: "red" }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Start adding Team Members</Text>
            )}
          </View>

          {/** NEW USER FORM */}
          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, name: text })}
            value={newUser.name}
            placeholder={"name"}
          />

          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, jobTitle: text })}
            value={newUser.jobTitle}
            placeholder={"jobtitle"}
          />

          <TextInput
            onChangeText={(text) => setNewUser({ ...newUser, email: text })}
            value={newUser.email}
            placeholder={"email"}
          />

          <Button title="Submit" onPress={createUser} />
          {/** END NEW USER FORM */}
        </View>
        <View style={styles.bottom}>
          
          {/*<NextButton title="Submit" onPress={updateHeader} />*/}
        </View>
        <ModalScreen />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    height: 0.2 * height,
    // backgroundColor: 'red',
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: "lightgrey",
  },
  edit: {
    color: "blue",
    fontSize: 20,
  },
  middle: {
    // paddingTop: 50,
    height: 0.6 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom: {
    height: 0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default Screen;
