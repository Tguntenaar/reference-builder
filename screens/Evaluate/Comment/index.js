import React, { useState } from "react";
import { Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import styles from "./style";

import NextButton from "../../../components/NextButton";
import BackButton from "../../../components/BackButton";
import CommentInput from "../../../components/CommentInput";
import Modal from "../../../components/Modal";
import api from "../../../apiwrapper";
import withUser from "../../../contexts/withUser";
import { developerMode } from '../../../constants/Utils'


async function updateUserAverageBySkill(user, skillId) {
  const result = await api.averageRatingsByUser({userId: user.id})
  .catch((error) => {
    console.log('couldn\'t get user average');
    console.log(error);
  })
}


const swapUserAuthor = (evaluation) => {
  return {
    ...evaluation,
    userId: evaluation.authorId,
    authorId: evaluation.userId
  }
}

// function to update the grade
const newAverage = (oldAverage, grade) => {
  // const obj = oldAverage?.teamId ? { teamId: oldAverage.teamId } : {userId: oldAverage.userId};
  // console.log({obj});
  return {
    // ...obj,
    group: oldAverage.group,
    id: oldAverage.id,
    skillId: oldAverage.skillId,
    grade: oldAverage.grade + grade,
    timesRated: oldAverage.timesRated + 1,
  };
};


// https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
function EvaluateCommentScreen({ userContext, navigation, route }) {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState({ loading: false, errored: false });
  const { username, average, sliders, evaluationRequest } = route.params;
  
  const handleText = (txt) => {
    setText(txt);
  };

  const syncRatingAverages = async () => {
    /** For every skill in a team create teamAverage. Starting at 0 */
    /** When creating a user -> create user averages
     *  When creating a rating -> update user averages & update team averages
     *  When creating a skill -> create team averages
     */
  };

  const uploadEvaluation = async () => {
    setStatus({ ...status, loading: true });

    let evaluation = {
      userId: evaluationRequest.user.id,
      authorId: evaluationRequest.evaluator.id,
      comment: text,
      group: userContext.group,
    };
    if (developerMode) {
      evaluation = swapUserAuthor(evaluation);
    } 
    console.log({ evaluation });

     // Get user Averages
     const averagesPromise = api.averageRatingsByUser({
       userId: evaluationRequest.user.id
      })
     .catch((error) => {
       console.log('couldn\'t get user average');
       console.log(error);
     })
    
    // Create evaluation
    const {
      data: {
        createEvaluation: { id: evaluationId },
      },
      errors,
    } = await api.createEvaluation(evaluation);
    
    // Delete if errors occured
    if (errors) {
      console.log("error in evaluate/comment/index.js");
      api
        .deleteEvaluation({
          id: evaluationId,
        })
        .then(() => {
          console.log("deleted");
        })
        .catch(() => {
          console.log("couldn't delete");
        });
    }

    const userAverages = await averagesPromise;
  
    // For each skill create rating
    sliders.forEach((skill) => {
      const newGrade = parseInt(skill.grade, 10);

      const rating = {
        evaluationId,
        skillId: skill.id,
        grade: newGrade,
        group: userContext.group,
      };

      console.log({ rating });

      api
        .createRating(rating)
        .then(() => {
          console.log("created rating");

          // get the average rating of skill.id
          const oldAverage = evaluationRequest?.user?.averageRatings?.items ? 
          evaluationRequest?.user?.averageRatings.items.find(
            (averageRating) => averageRating.skillId === skill.id
          ) : false;
          console.log('oldAverage')
          console.log(oldAverage)

          if (oldAverage) {
            // Update
            api
              .updateUserAverage(newAverage(oldAverage, newGrade))
              .catch((error) => {
                console.log("ERROR: updateUserAverage");
                console.log({ error });
              });
          } else {
            // Create user averages
            
            api
              .createUserAverage({
                group: userContext.group,
                userId: evaluationRequest.user.id,
                skillId: skill.id,
                grade: newGrade,
                timesRated: 1,
              })
              .catch((error) => {
                console.log("ERROR: createUserAverage");
                console.log({ error });
              });
          }
          console.log("TESTING**********************")
          // Update team average
          const oldTeamAverage = userContext?.activeTeam?.team?.averageRatings?.items ? 
          userContext.activeTeam.team.averageRatings.items.find(
            (averageRating) => averageRating.skillId === skill.id
          ) : false;
          console.log('oldTeamAverage');
          console.log(oldTeamAverage);

          if (oldTeamAverage) {
            api
              .updateTeamAverage(newAverage(oldTeamAverage, newGrade))
              .catch((error) => {
                console.log("ERROR: updateTeamAverage");
                console.log({ error });
              });
          } else {
              api
              .createTeamAverage({
                teamId: userContext.activeTeam.team.id, // FIXME: activeteam?
                skillId: skill.id,
                group: userContext.group,
                grade: newGrade, 
                timesRated: 1
              })
              .catch((error) => {
                console.log("Error: createTeamAverage");
                console.log({ error });
              })
          }
        })
        .catch((error) => {
          console.log('DEBUGGING')
          console.log(error);
        });
    });
    // TODO:
    // await all createRatings
    // if no error and !manager deleteEvaluationRequest
    // else get all created evaluations via getRating en delete ze 1 voor 1
    // await api.deleteEvaluationRequest(evaluationRequest.id);
    if (evaluationRequest?.id) {
      await api.deleteEvaluationRequest({id:evaluationRequest.id}).catch((error) => {
        console.log('deleteEvaluationRequest ERRORED');
      }) ;
    }
    // navigation.push("Tabs");
    // setStatus({ ...status, errored: true });
    // TODO: move dit naar verschillende eindes
    navigation.navigate("Tabs");
    setStatus({ ...status, loading: false });
  };

  return (
    <>
      <SafeAreaView style={styles.safeTop} />
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <LinearGradient
          colors={["rgba(10,185,255, 0.99)", "rgb(10,19,255)"]}
          style={styles.linearGradient}
        />
        <View style={styles.container}>
          <View style={styles.top}>
            <BackButton
              color={{ backgroundColor: "#fff", iconColor: "rgb(44,44,44)" }}
              onPress={() => navigation.goBack()}
            />
            <View styles={styles.header}>
              <Text style={[styles.text, styles.header, { fontSize: 26 }]}>
                {username}
              </Text>
              <Text style={[styles.text, styles.header, { fontSize: 18 }]}>
                Your average:
              </Text>
              <Text style={[styles.text, styles.header, styles.grade]}>
                {average}
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.middle}
            contentContainerStyle={styles.scroll}
          >
            <Text style={[styles.text, styles.question]}>Any feedback?</Text>
            <CommentInput
              style={styles.input}
              numberOfLines={7}
              text={text}
              onChangeText={handleText}
            />
          </ScrollView>
          <View style={styles.bottom}>
            <Text style={styles.error}>
              {" "}
              {status.errored ? "Something went wrong.." : ""}{" "}
            </Text>

            <NextButton
              title="Next"
              color={{ backgroundColor: "#fff", textColor: "rgb(44,44,44)" }}
              onPress={uploadEvaluation}
              loading={status.loading}
            />
          </View>
        </View>
      </View>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
  // <SafeAreaView style={styles.safe}/>
}

EvaluateCommentScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  userContext: PropTypes.shape({
    group: PropTypes.string.isRequired,
  }),
};

export default withUser(EvaluateCommentScreen);
