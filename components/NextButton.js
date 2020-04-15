import React from 'react';
import { Text , StyleSheet, TouchableOpacity } from 'react-native';

function NextButton({ title, onPress, }) {
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        underlayColor='#fff'>
        <Text style={styles.text}>{title}</Text>
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
    backgroundColor:'#0009EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: '700',
  }
});

export default NextButton
