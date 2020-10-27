import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// Constants
import { Feather } from '@expo/vector-icons';
import { imageEsther } from '../../constants/Images';

import styles from './style';
// Components
import NextButton from '../NextButton';

const EvaluationRequest = ({ request, navigation, filterRequest }) => {
  const dueDate = ((createdAt) => {
    const due = new Date(new Date(createdAt).getTime() + 1000 * 3600 * 24 * 7); // plus one week
    return `${due.getDate()}-${due.getMonth()}-${due.getFullYear()}`;
  })(request.createdAt);
  const deleteRequestButton = true; // TODO: global delete button
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{request.user.name}</Text>
        {deleteRequestButton ? (
          <TouchableOpacity
            onPress={() => {
              filterRequest(request.id);
            }}
            style={styles.teamIcon}
          >
            <Feather name="x-circle" color="red" style={styles.teamIcon} />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.description}>{request.user.jobTitle}</Text>
        <Text style={styles.status}>{request.status}</Text>
        <Text style={styles.due}>Due date: {dueDate}</Text>
        <NextButton
          size={40}
          textSize={15}
          title="Evaluate"
          onPress={() =>
            navigation.navigate('EvaluateSliders', {
              evaluationRequest: request,
              manager: true, // Starts evaluation of manager
            })
          }
        />
      </View>
    </View>
  );
};

EvaluationRequest.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
  filterRequest: PropTypes.func.isRequired,
};

export default EvaluationRequest;
