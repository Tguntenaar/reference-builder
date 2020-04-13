import * as React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

// {navigation, grade, name, description}
export default function Rating(props) {
  const onPressSeeDetails = () => { 
    // navigation.navigate('RatingsDetailsScreen') 
  };
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <View style={styles.circle}>
          <Text style={styles.grade}>{props.grade}</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
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
    width: 83,
    height: 20,
    // fontFamily: "CooperHewitt",
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2c2c2c"
  },
  description: {
    width: 193,
    height: 36,
    // fontFamily: "SourceSansPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#767676"
  },
  seeDetails: {
    width: 60,
    height: 12,
    // fontFamily: "CooperHewitt",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#0a13ff",
    width: 205,
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
    width: 36,
    height: 24,
    // fontFamily: "CooperHewitt",
    fontSize: 24,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
});