import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, ScrollView, Dimensions, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../components/NextButton';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Contacts from 'expo-contacts';
import TeamMember from '../components/TeamMember';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const imageSize = 40;


function SettingsScreen({ navigation }) {
  const [username, setUsername] = useState("thomas@guntenaar.org")
  const [teamName, setTeamName] = useState("Team name")
  const [company, setCompany] = useState("Company")
  const teamMembers =  [{ name:"Boris", jobTitle:'Founder'}, { name:'Thomas', jobTitle:'developer' }];
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);
  return (
    <ScrollView style={styles.safe}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <View style={styles.top}>
          {/*<Text style={{fontSize: 40}}> Team name </Text>
          <Text style={{fontSize: 25}}> Company </Text>*/}
          <TextInput 
            style={[styles.input, {fontSize: 40}]} 
            clearTextOnFocus={false} 
            onChangeText={text => setTeamName(text)}
            value={teamName} 
            placeholder={"Team name"}/>
            <TextInput 
            style={[styles.input, {fontSize: 25}]} 
            clearTextOnFocus={false} 
            onChangeText={text => setCompany(text)}
            value={company} 
            placeholder={"Company"}/>
          
        </View>
        <View style={styles.middle}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text> { teamMembers.length } members</Text>
            <TouchableOpacity>
              <Text style={{color:'blue'}}> Invite </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 0, borderBottomWidth: 1, borderColor: 'lightgrey', width: width}}>
              {teamMembers.length ? teamMembers.map((member, index) => (
                  <View style={{borderTopWidth: 1, borderTopColor: 'lightgrey',flexDirection: 'row', paddingTop: 10, paddingBottom: 10,}}>
                    <Image style={styles.image} source={require('../assets/images/boris-guntenaar.jpeg')}/>
                    {/* TODO: teammember image */}
                    <View style={{flexDirection: 'column', marginLeft: 10,}}>
                      <Text>{member.name}</Text>
                      <Text>{member.jobTitle}</Text>
                    </View>
                  </View>)
                ) : (
                  <Text>U</Text>)
            }
          </View>
          <TextInput 
            style={styles.input} 
            clearTextOnFocus={true} 
            onChangeText={text => setUsername(text)}
            value={username} 
            placeholder={"email"}/>
          </View>
        <View style={styles.bottom}>
            
          <NextButton title='Submit'/>
          {/*<NextButton title='Submit'/>*/}
        </View>
      </View>
    </ScrollView>
  )
  
}

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
