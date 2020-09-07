import * as React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import NextButton from '../NextButton';
// Constants
import { imageEsther } from '../../constants/Images';
import styles from './style';

const TeamMember = ({ teamMember, color }) => {
  console.log(teamMember.id);
  return (
    <View style={[styles.Box, { backgroundColor: color }]}>
      <View style={styles.circleBox}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{teamMember.name}</Text>
        <Text style={styles.description}>{teamMember.jobTitle}</Text>
        {/**
          <NextButton size={45} textSize={15} title="Request evaluation" onPress={handlePress} />
        */}
      </View>
    </View>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    jobTitle: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
  // onPress: PropTypes.func.isRequired,
};

TeamMember.defaultProps = {
  color: 'rgb(239,244,253)',
};

export default TeamMember;
