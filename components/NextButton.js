import React from 'react';
import { Text , StyleSheet, TouchableOpacity } from 'react-native';

function NextButton({ title, onPress, color }) {
  color = color || {backgroundColor:"#0009EE", textColor:"#fff"};
  const backgroundColor = color.backgroundColor || "#0009EE";
  const textColor = color.textColor || "#fff";
  return (
    <TouchableOpacity
        style={[styles.button, {backgroundColor: backgroundColor }]}
        onPress={onPress}
        underlayColor='#fff'>
        <Text style={[styles.text, {color:textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const height = 50;
const styles = StyleSheet.create({
  button:{
    height: 50,
    borderRadius: height/2,
    width: 200,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: '700',
  }
});

export default NextButton
