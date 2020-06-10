import React, { Fragment, useState } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, ScrollView, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../components/NextButton';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

function SettingsScreen({ navigation }) {
  const [username, setUsername] = useState("Thomas Gunt")
  const [jobTitle, setJobTitle] = useState("dev")
  const [photo, setAvatar] = useState(null)
  const submitProfileInfo = () => {
    // user mutation
  };
  const handlePhotoUpload = () => {
      const options = {
        noData: true,
      };

      ImagePicker.launchImageLibraryAsync(options, response => {
        console.log({response});
        if (response.cancelled) {
          return
        } 

        if (response.uri) {
          setAvatar({ photo: response })
        }
      }).then(response => {
        console.log('response');
        console.log(response);
        if (response.cancelled) {
          return
        } 

        if (response.uri) {
          setAvatar({ photo: response })
        }
      })
      .catch((err)=>{
        console.log(err);
      });
  };

  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <View style={styles.top}>
          
        <Image 
          style={ styles.image } 
          source={ photo && { uri: photo.uri } || require('../assets/images/thomas-guntenaar.jpeg') }
        />
        
          <TouchableOpacity
          onPress={ handlePhotoUpload }
          >
          <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <TextInput 
            style={styles.input} 
            clearTextOnFocus={false} 
            onChangeText={text => setUsername(text)}
            value={username} 
            placeholder={"username"}/>
          <TextInput 
            style={styles.input} 
            clearTextOnFocus={false} 
            onChangeText={text => setJobTitle(text)}
            value={jobTitle} 
            placeholder={"job title"}/>
        </View>
        <View style={styles.bottom}>
        <NextButton title='Submit' onPress={submitProfileInfo}/>
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
    // borderColor: 'gray', 
    // borderWidth: 1,
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
