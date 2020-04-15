import * as React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

export default function TeamMember({name, jobTitle}) {
  const handlePress = () => { 
    alert('Requested!');
  };
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
       <Image style={styles.image} source={require('../assets/thomas-guntenaar.jpeg')}/>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{jobTitle}</Text>
        <Button
          onPress={handlePress}
          title="Request evaluation"
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
  image: {
    width: 88,
    height: 88,
    borderRadius: 44,
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