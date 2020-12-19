import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, RefreshControl, Alert, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import EvaluationRequest from '../../components/EvaluationRequest';
import withUser from '../../contexts/withUser';
import api from '../../apiwrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

function EvaluationsScreen({ navigation, userContext }) {
  // Laat express alle receivedRequests zien
  const {
    receivedRequests: { items = [] },
  } = userContext;

  // FIXME: when usercontext updates this screen doesn't update
  // only on mount
  const [evaluationRequests, setEvaluationRequests] = useState(items);

  // Remove a request
  const filterRequest = (id) => {
    api
      .deleteEvaluationRequest({ id })
      .then((result) => {
        console.log('deleted', id);
        setEvaluationRequests(evaluationRequests.filter((request) => request.id !== id));
      })
      .catch((error) => {
        console.log('failed to delete request');
        console.log(error);
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
      refreshControl={
        <RefreshControl refreshing={userContext.refreshing} onRefresh={userContext.onRefresh} />
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
                  'Deleting request',
                  'Are you sure you want to?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    { text: 'OK', onPress: () => filterRequest(request.id) },
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
                navigation.navigate('TeamSettingsScreen', {
                  team: userContext.activeTeam.team,
                });
              }}
            />
          ) : null}
        </View>
      )}
    </ScrollView>
  );
}

EvaluationsScreen.propTypes = {
  userContext: PropTypes.object.isRequired,
  // navigation: PropTypes.object.isRequired,
};

export default withUser(EvaluationsScreen);
