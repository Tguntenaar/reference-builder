import * as React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
// Constants
import { imageEsther } from '../../constants/Images';
import styles from './style';
// Components
import NextButton from '../NextButton';

const EvaluationRequest = ({ name, jobTitle, status, navigation }) => {
  const due = '21-08-2019';
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{jobTitle}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.due}>Due date: {due}</Text>
        <NextButton
          size={40}
          textSize={15}
          title="Evaluate"
          onPress={() => navigation.navigate('EvaluateScreen')}
        />
      </View>
    </View>
  );
};

EvaluationRequest.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default EvaluationRequest;
