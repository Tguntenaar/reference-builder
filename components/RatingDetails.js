import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Constants
import { imageEsther } from '../constants/Images';

// <SafeAreaView style={styles.safe}>
const RatingDetails = ({ onViewDetails, item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.right}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{item.evaluator.name}</Text>
            <Text style={styles.jobTitle}>{item.evaluator.jobTitle}</Text>
          </View>
          <LinearGradient
            colors={['rgb(10,185,255)', 'rgb(10,19,255)']}
            style={styles.gradeBox}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.5 }}
          >
            <Text style={styles.grade}>{item.rating.grade}</Text>
          </LinearGradient>
        </View>

        <Text style={styles.description}>{item.rating.comment}</Text>
        <TouchableOpacity onPress={onViewDetails} accessibilityLabel="Learn more about this rating">
          <Text style={styles.viewDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RatingDetails;
const imageSize = 70;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 180,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(236,236,236)',
    // flex:1,
    // alignItems:'center',
  },
  left: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.3,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  },
  right: {
    flex: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    height: Platform.OS === 'ios' ? 20 : 25,

    padding: 2,
  },
  jobTitle: {
    fontFamily: 'CooperHewitt-BookItalic',
    height: 16,
    height: Platform.OS === 'ios' ? 16 : 21,

    padding: 2,
  },
  gradeBox: {
    width: 51,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 2,
  },
  grade: {
    color: '#fff',
    fontFamily: 'Montserrat-Black',
  },
  description: {
    fontFamily: 'SourceSansPro-Regular',
    paddingRight: 20,
    paddingTop: 20,
  },
  viewDetails: {
    paddingTop: 20,
    color: 'rgb(10, 19, 255)',
    fontFamily: 'CooperHewitt-Book',
  },
});
