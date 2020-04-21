import * as React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function Rating({grade, name, description, navigation }) {
  const onPressSeeDetails = () => { 
    navigation.navigate('RatingsDetailsScreen') 
  };
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <View style={styles.circle}>
          <Text style={styles.grade}>{grade}</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          onPress={onPressSeeDetails}
          title="See details"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={styles.seeDetails}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: 335,
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
  title: {
    width: 130,
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
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
    fontSize: 12,
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
    backgroundColor: "#ff100a",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44,
  },
  grade: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 24,
    textAlign: "center",
    color: "#fff"
  },
});