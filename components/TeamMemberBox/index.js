import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import NextButton from '../NextButton';

// Constants
import { imageEsther } from '../../constants/Images';
import styles from './style';

const TeamMember = ({ teamMember, color, onPress }) => {
  return (
    <View style={[styles.Box, { backgroundColor: color }]}>
      <View style={styles.circleBox}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.textBox2}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{teamMember.name}</Text>
          <Text style={styles.description}>{teamMember.jobTitle}</Text>
        </View>
        {onPress ? (
          <TouchableOpacity onPress={onPress}>
            <Feather name="play" color="blue" style={styles.playIcon} />
          </TouchableOpacity>
        ) : null}

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
  onPress: PropTypes.func,
};

TeamMember.defaultProps = {
  color: 'rgb(239,244,253)',
};

export default TeamMember;
