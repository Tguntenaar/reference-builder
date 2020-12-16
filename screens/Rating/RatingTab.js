import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  RefreshControl,
  View,
  Alert,
  Button,
} from "react-native";
import RatingBox from "../../components/RatingBox";
import withUser from "../../contexts/withUser";
import withTabContext from "../../contexts/TabContext";
import NextButton from "../../components/NextButton";
import { width } from "../../constants/Utils";
import api from "../../apiwrapper";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    // flexGrow: 1,
  },
  buttonContainer: {
    width,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});

function getAverages(receivedEvaluations) {
  if (!receivedEvaluations) {
    console.log("Er zijn geen receivedEvaluations");
    return [];
  }
  /**
   * MAP EVALUATIONS NAAR ARRAY VAN RATINGS
   * MAP DAARNA REDUCE ALLE RATINGS MET DEZELFDE SKILL ID
   */

  const allRatings = receivedEvaluations
    .filter((evaluation) => evaluation?.ratings?.items) // Only evaluations that have ratings.
    .map((evaluation) => evaluation.ratings.items)
    .flat();

  return allRatings.reduce((final, data) => {
    const isAlready = final.find((value) => {
      return value.skillId === data.skillId;
    });

    if (!isAlready) {
      final.push(data);
      return final;
    }

    const index = final.indexOf(isAlready);
    const newGrade = parseFloat(final[index].grade) + parseFloat(data.grade);
    const newRating = {
      ...isAlready,
      grade: newGrade,
    };
    return {
      ...final,
      [index]: newRating,
    };
  }, []);
}
/**
 * TODO:
 * Ratings Schermen
 * 1. Data access patterns fixen get ratings by user / skill
 * 2. Data aggregation via lambda function triggered by adding a new Rating
 * 3.
 *   
 * 1. Als skills.length > averagerRatings.length create average Ratings
 * 2. on create Rating -> create averages or update averages.
 * 3. Iets van syncing tussen 
  
  getTeam and what if no averages? create average same for getUser
  setUser en teamaverages vanuit app. (niet mooi maar werkt wel voor nu)
 */
function RatingTab({ navigation, route, userContext, tabContext }) {
  let {
    averageRatings: { items: averageUserRatings },
    receivedEvaluations: { items: receivedEvaluations },
    activeTeam: {
      team: {
        skills: { items: activeTeamSkills },
      },
    },
  } = userContext;
  const template = [
    {
      id: "template",
      active: true,
      grade: 8.4,
      skill: {
        id: "template",
        active: true,
        name: "Template Fake Skill",
        description: "lorem ipsum",
      },
    },
  ];

  // FIXME: Remove dit zodra het werkt
  averageUserRatings =
    averageUserRatings && averageUserRatings.length
      ? averageUserRatings
      : template;
  receivedEvaluations =
    receivedEvaluations && receivedEvaluations.length
      ? receivedEvaluations
      : [{ ratings: { items: template } }]; // list of evaluations

  const user = route.params?.otherUserRatings;
  const viewOtherUserRatings = user !== undefined;

  // Filter
  const inactiveAverageFilter = (average) => {
    // get ActiveSkills
    const activeSkills = activeTeamSkills
      .filter((skill) => skill.active)
      .map((skill) => skill.id);
    return activeSkills.includes(average.skill.id) || average.skill.id === 'template';
  };
  // Filter
  const inactiveAndManagerFilter = (skill) => {
    return skill.active && !skill.forManager;
  };

  const [loadingRatings, setloadingRatings] = useState(
    tabContext.type !== "standard"
  );
  const [averageRatings, setAverageRatings] = useState(
    // getAverages(receivedEvaluations)
    averageUserRatings.filter(inactiveAverageFilter)
  );
  const [skills, setSkills] = useState(activeTeamSkills);

  // Sync user averages and skills
  useEffect(() => {
    if (tabContext.type === "standard") {
      // Check whether to update average User ratings TODO:
      if (false && averageUserRatings.length < activeTeamSkills.length) {
        // effect
        api
          .averageRatingsByUser({ userId: userContext.id })
          .then((result) => {
            const {
              data: {
                averageRatingsByUser: { items: averageRatingsByUser },
              },
            } = result;

            const skillsWithAverage = averageRatingsByUser.map(
              (rating) => rating.skill.id
            );
            const skillsWithoutAverage = activeTeamSkills.filter(
              (skill) => !skillsWithAverage.includes(skill.id) && skill.active
            );

            for (const skill of skillsWithoutAverage) {
              api
                .createUserAverage({
                  userId: userContext.id,
                  skillId: skill.id,
                  group: userContext.group,
                  timesRated: 0,
                  grade: 0,
                })
                .catch((error) => {
                  console.log("Can't create user average");
                  console.log(error);
                });
            }

            setAverageRatings(
              averageRatingsByUser.filter(inactiveAverageFilter)
            );
            // setloadingRatings(false);
          })
          .catch(({ errors }) => {
            console.log("test");
            console.log(errors.map((error) => error.message));
            // console.log(error);
          });
      }
    }
  }, []);

  // Load the ratings of some other user
  useEffect(() => {
    if (tabContext.type === "personal") {
      // effect
      api
        .getUser(user.id)
        .then((result) => {
          const {
            data: {
              getUser: {
                averageRatings: { items }, // use averageRatings or getAverages(receivedEvaluations)
                receivedEvaluations: { items: receivedEvaluations },
              },
            },
          } = result;

          setAverageRatings(items.filter(inactiveAverageFilter)); // getAverages(receivedEvaluations)
          setloadingRatings(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tabContext.value]);

  // Load the team
  useEffect(() => {
    if (tabContext.type === "team") {
      // effect
      const team = tabContext.value;
      api
        .getTeam(team.id)
        .then((result) => {
          const {
            data: {
              getTeam: {
                skills: { items: teamSkills },
                /**
                FIXME: possible to get ratings by skill.id and than update 
                averageRatings if there is no averageRatings or just show the skills
              */

                averageRatings: { items: averageTeamRatings }, // use averageRatings or getAverages(receivedEvaluations)
                // receivedEvaluations: { items: receivedEvaluations }
              },
            },
          } = result;
          if (!averageTeamRatings.length) {
            setSkills(teamSkills);
          }
          setAverageRatings(averageTeamRatings.filter(inactiveAverageFilter));
          setloadingRatings(false);
          // console.log(averageTeamRatings.length < teamSkills.length);
          // If averageRatings is not in sync
          if (false && averageTeamRatings.length < teamSkills.items) {
            // effect
            const skillsWithAverage = averageTeamRatings.map(
              (rating) => rating.skill.id
            );
            const skillsWithoutAverage = teamSkills.filter(
              (skill) => !skillsWithAverage.includes(skill.id) && skill.active
            );

            for (const skill of skillsWithoutAverage) {
              api
                .createTeamAverage({
                  teamId: team.id,
                  skillId: skill.id,
                  group: userContext.group,
                  timesRated: 0,
                  grade: 0,
                })
                .catch((error) => {
                  console.log("Can't create team average");
                  console.log(error);
                });
            }

            setAverageRatings(
              averageRatingsByUser.filter(inactiveAverageFilter)
            );
            // setloadingRatings(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tabContext.value]);

  const deleteAverage = (rating) => {
    console.log("called");
    if (tabContext.type !== "standard" || tabContext.type !== "personal") {
      api
        .deleteUserAverage(rating.id)
        .then(() => {
          setAverageRatings(
            averageRatings.filter((elem) => elem.id !== rating.id)
          );
          console.log("gelukt");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (tabContext.type !== "team") {
      api
        .deleteTeamAverage(rating.id)
        .then(() => {
          setAverageRatings(
            averageRatings.filter((elem) => elem.id !== rating.id)
          );
          console.log("gelukt");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.warn("checkout rating tab");
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          marginTop: viewOtherUserRatings ? 0 : 50,
          ...styles.scroll,
        }}
        refreshControl={
          <RefreshControl
            refreshing={userContext.refreshing}
            onRefresh={userContext.onRefresh}
          />
        }
      >
        {viewOtherUserRatings ? (
          <View style={styles.buttonContainer}>
            <NextButton
              size={40}
              textSize={15}
              title="Evaluate"
              onPress={() =>
                navigation.navigate("EvaluateSliders", {
                  evaluationRequest: {
                    user: route.params?.otherUserRatings,
                    evaluator: {
                      id: userContext.id,
                      name: userContext.name,
                    },
                  },
                  manager: false, // Starts evaluation of manager
                })
              }
            />
          </View>
        ) : null}
        {loadingRatings ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : averageRatings.length ? (
          averageRatings.map((averageRating) => {
            return (
              <RatingBox
                key={averageRating.id}
                rating={averageRating}
                gradeColor="rgb(10,185,255)"
                onSeeDetails={() => {
                  navigation.navigate("RatingsDetailsScreen", {
                    rating: averageRating,
                  });
                }}
                onDeleteAverage={() => {
                  Alert.alert(
                    "Deleting average",
                    "Are you sure you want to?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => deleteAverage(averageRating),
                      },
                    ],
                    { cancelable: true }
                  );
                }}
              />
            );
          })
        ) : (
          <>
            {skills && skills.filter(inactiveAndManagerFilter).length ? (
              skills.filter(inactiveAndManagerFilter).map((skill) => {
                return (
                  <View
                    key={skill.id}
                    style={{
                      backgroundColor: "rgb(239, 244, 253)",
                      width: 380,
                      height: 150,
                      padding: 20,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "black",
                        fontWeight: "900",
                      }}
                    >
                      {skill.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                      }}
                    >
                      {skill.description}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                      }}
                    >
                      Has not been rated yet
                    </Text>
                  </View>
                );
              })
            ) : (
              <View>
                <Text>
                  This team has no skills yet. Add skills in Team Settings{" "}
                </Text>
                <Button
                  title={"Go to TeamSettings"}
                  onPress={() =>
                    navigation.navigate("TeamSettingsScreen", {
                      team: userContext.activeTeam.team,
                    })
                  }
                />
              </View>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}

export default withUser(withTabContext(RatingTab));
