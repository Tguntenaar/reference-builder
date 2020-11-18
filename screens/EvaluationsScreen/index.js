import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, RefreshControl, Alert } from 'react-native';
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
  let {
    receivedRequests: { items },
  } = userContext;

  if (!items) {
    items = [];
  }

  const [evaluationRequests, setEvaluationRequests] = useState(items);
  const filterRequest = (id) => {
    api
      .deleteEvaluationRequest({ id })
      .then(() => {
        console.log('deleted', id);
        setEvaluationRequests(evaluationRequests.filter((request) => request.id !== id));
      })
      .catch(() => {
        console.log('failed to delete request');
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
          return (
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
                    { text: 'OK', onPress: () => filterRequest() },
                  ],
                  { cancelable: true }
                );
              }}
            />
          );
        })
      ) : (
        <Text> Wait for the Teammanager to activate a new rating round </Text>
      )}
    </ScrollView>
  );
}

EvaluationsScreen.propTypes = {
  userContext: PropTypes.object.isRequired,
  // navigation: PropTypes.object.isRequired,
};

export default withUser(EvaluationsScreen);
