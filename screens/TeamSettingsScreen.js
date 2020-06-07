import React, { Fragment, useState } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, ScrollView, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../components/NextButton';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import TeamMember from '../components/TeamMember';


function SettingsScreen({ navigation }) {
  const [username, setUsername] = useState("thomas@guntenaar.org")
  const teamMembers = [{ name:"Boris", jobTitle:'Founder'}, { name:'Thomas', jobTitle:'developer' }];

  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <View style={styles.top}>
        {
          teamMembers.map((item, index) => <TeamMember name={item.name} key={index} jobTitle={item.jobTitle} picture={item.picture} onPress={()=>console.log("click")} />)
        }
        </View>
        <View style={styles.middle}>
          <Text> Invite Team Member</Text>
          <TextInput 
            style={styles.input} 
            clearTextOnFocus={true} 
            onChangeText={text => setUsername(text)}
            value={username} 
            placeholder={"email"}/>
          <NextButton title='Submit'/>
        </View>
        <View style={styles.bottom}>
          {/*<NextButton title='Submit'/>*/}
        </View>
      </View>
    </ScrollView>
  )
  
}

const imageSize = 130;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safe:{
    flexGrow:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top:{
    height: 0.3 * height,
    // backgroundColor: 'red',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
    backgroundColor: 'lightgrey',
  },
  edit:{
    color: 'blue',
    fontSize: 20,
  },
  middle:{
    paddingTop: 50,
    height: 0.5 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input:{ 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom:{
    height:0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default SettingsScreen
