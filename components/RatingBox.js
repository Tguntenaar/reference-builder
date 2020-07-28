import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { width } from '../constants/Utils';

const RatingBox = ({ rating, onSeeDetails }) => {
  const { grade } = rating;
  const skillName = rating.skill.name;
  const skillDescription = rating.skill.description;

  const gradeColor = ((gradeString) => {
    const number = parseInt(gradeString, 10);
    if (number < 4.5) {
      return '#ff100a';
    }
    if (number < 6.5) {
      return 'rgb(255,171,10)';
    }
    return '#3fc380';
  })(grade);

  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <View style={[styles.circle, { backgroundColor: gradeColor }]}>
          <Text style={styles.grade}>{grade}</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{skillName}</Text>
        <Text style={styles.description}>{skillDescription}</Text>
        <TouchableOpacity
          onPress={onSeeDetails}
          accessibilityLabel="see rating details"
          style={{ flexDirection: 'row', width: 100 }}
        >
          <Text style={styles.seeDetails}>See details</Text>
          <Feather name="chevron-right" color="rgb(10,19,255)" style={styles.seeDetailsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 130,
    backgroundColor: 'rgb(239, 244, 253)',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 20,
  },
  textBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    // height:130,
    width: 205,
  },
  viewDetails: {
    color: 'rgb(10, 19, 255)',
    marginRight: 3,
  },
  title: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    height: Platform.OS === 'ios' ? 20 : 30,
    padding: 2,
    color: '#2c2c2c',
  },
  description: {
    width: 193,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#767676',
  },
  seeDetails: {
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 14,
    color: '#0a13ff',
    padding: 2,
  },
  seeDetailsIcon: {
    fontSize: 12,
    color: '#0a13ff',
    padding: 2,
  },
  circleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
  },
  circle: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44,
  },
  grade: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 24,
    height: Platform.OS === 'ios' ? 24 : 30,
    paddingTop: 2,
    textAlign: 'center',
    color: '#fff',
  },
});

RatingBox.propTypes = {
  rating: PropTypes.shape({
    grade: PropTypes.number.isRequired,
    skill: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RatingBox;
