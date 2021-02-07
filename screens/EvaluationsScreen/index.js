import React, { useState, useContext } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  RefreshControl,
  Alert,
  View,
  Button,
} from "react-native";
import PropTypes from "prop-types";
import { errorIconColor } from "aws-amplify-react-native/dist/AmplifyTheme";
import EvaluationRequest from "../../components/EvaluationRequest";
import withUser from "../../contexts/withUser";
import { UserContext } from "../../contexts/UserContext";
import api from "../../apiwrapper";
import Modal from "../../components/Modal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

function EvaluationsScreen({ navigation }) {
  const userContext = useContext(UserContext);
  // Laat express alle receivedRequests zien
  const {
    receivedRequests: { items: evaluationRequests = [] },
  } = userContext;
  // FIXME: when usercontext updates this screen doesn't update
  // only on mount
  // TODO: replace useState with Context stuff
  // const [evaluationRequests, setEvaluationRequests] = useState(items);
  const [modalVisible, setModalVisible] = useState(false);
  // Remove a request
  const filterRequest = (id) => {
    api
      .deleteEvaluationRequest({ id })
      .then((result) => {
        console.log("deleted", id);
        userContext.dispatch({
          type: "setEvaluationRequests",
          evaluationRequests: evaluationRequests.filter(
            (request) => request.id !== id
          ),
        });
        // setEvaluationRequests(evaluationRequests.filter((request) => request.id !== id));
      })
      .catch((error) => {
        console.log("failed to delete request");
        console.log(error);
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
      refreshControl={
        <RefreshControl
          refreshing={userContext.refreshing}
          onRefresh={userContext.onRefresh}
        />
      }
    >
      {evaluationRequests.length ? (
        evaluationRequests.map((request) => {
          return request ? (
            <EvaluationRequest
              key={request.id}
              request={request}
              navigation={navigation}
              filterRequest={() => {
                Alert.alert(
                  "Deleting request",
                  "Are you sure you want to?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => {},
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => filterRequest(request.id) },
                  ],
                  { cancelable: true }
                );
              }}
            />
          ) : null;
        })
      ) : (
        <View>
          <Text> Wait for the Teammanager to activate a new rating round </Text>
          {userContext.isManager ? (
            <Button
              title="Go to TeamSettings"
              onPress={() => {
                navigation.navigate("TeamSettingsScreen", {
                  team: userContext.activeTeam.team,
                });
              }}
            />
          ) : null}
        </View>
      )}
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  );
}

EvaluationsScreen.propTypes = {
  userContext: PropTypes.object.isRequired,
  // navigation: PropTypes.object.isRequired,
};

export default withUser(EvaluationsScreen);
