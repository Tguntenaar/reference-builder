import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Rating({grade, name, description, navigation, gradeColor}) {
  const onPressSeeDetails = () => { 
    navigation.navigate('RatingsDetailsScreen') 
  };
  // TODO: color based on grade
  gradeColor = gradeColor || "#ff100a";
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <View style={[styles.circle, {backgroundColor: gradeColor}]}>
          <Text style={styles.grade}>{grade}</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity 
        onPress={onPressSeeDetails}
        accessibilityLabel="see rating details"
        style={{flexDirection: "row", width: 100,}}>
          <Text style={styles.viewDetails}>See details</Text>
          <Feather 
          name={"chevron-right"} 
          color={"rgb(10,19,255)"}
          style={styles.settingsIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  Box: {
    width: width-40,
    height: 130,
    backgroundColor: "rgb(239, 244, 253)",
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom:20,
  },
  textBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    height:130,
    width: 205, 
  },
  viewDetails: {
    color: 'rgb(10, 19, 255)',
    marginRight: 3,
  },
  title: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 20,
    height: 20,
    paddingTop: 2,
    color: "#2c2c2c"
  },
  description: {
    width: 193,
    fontFamily: "SourceSansPro-Regular",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#767676"
  },
  seeDetails: {
    fontFamily: "CooperHewitt-Medium",
    fontSize: 10,
    color: "#0a13ff",
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
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 24,
    height: 24,
    paddingTop:2,
    textAlign: "center",
    color: "#fff"
  },
});