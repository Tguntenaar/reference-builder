import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import EvaluationRequest from '../../components/EvaluationRequest';
import withUser from '../../contexts/withUser';

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
  const {
    receivedRequests: { items: evaluationRequests },
  } = userContext;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {evaluationRequests.length ? (
        evaluationRequests.map((request) => {
          return (
            <EvaluationRequest
              key={request.id}
              name={request.user.name}
              jobTitle={request.user.jobTitle}
              status={request.status}
              navigation={navigation}
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
  navigation: PropTypes.object.isRequired,
};

export default withUser(EvaluationsScreen);
