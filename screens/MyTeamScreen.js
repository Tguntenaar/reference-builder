import React, { Fragment, useState, useContext } from 'react';
import { StyleSheet, ScrollView, Modal, Text, View, Dimensions, Image } from 'react-native';
import TeamMember from '../components/TeamMember';
import NextButton from '../components/NextButton';
import { UserContext } from '../contexts/UserContext';


const PopUpModal = ({ modalVisible, setModalVisible }) => {

  const subText = 'Donec facilisis tortor ut augue lacinia, at viverra est semper.\
  Sed sapien metus, scelerisque nec pharetra id, tempor.';
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image style={styles.image} source={require('../assets/images/group2.png')}/>

            <Text style={styles.text}>Invitation sent!</Text>
            <Text style={styles.subText}>{subText}</Text>
            
            <NextButton title="Ok" onPress={() => {
              setModalVisible(!modalVisible);
            }}/>
          </View>
        </View>
    </Modal>
  )
}

const TeamList = ({ setModalVisible, teamMembers, navigation}) => {
  // const { user } = useContext(UserContextProvider)
  // const { teams: [  ] } =
  return (<ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
    {
      teamMembers.length ? teamMembers.map((item, index) => (
        <TeamMember 
          name={item.name} 
          key={index} 
          jobTitle={item.jobTitle} 
          picture={item.picture}
          navigation={navigation} onPress={setModalVisible}/>)) :
          (
            <Text>No team members.. Go to the team settings screen to invite your team members</Text>
          )
    }
  </ScrollView>)
}


function MyTeamScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  // teamMembers = teamMembers || [] [{ name:"TeamScreen", jobTitle:'Founder'}, { name:'Thomas', jobTitle:'developer' }];
  return (
    <UserContext.Consumer>{(userContext) => {
      const team = userContext.teams.items[0].team
      const teamMembers = team.members.items
      return (
        <Fragment>
          <TeamList setModalVisible={setModalVisible} teamMembers={teamMembers} navigation={navigation}/>
          <PopUpModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </Fragment>
      )
    }}</UserContext.Consumer>
  )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  modalContainer: {
    backgroundColor: 'rgba(51,51,51,0.8)',
    color: '#fff',
    textDecorationColor: '#fff',
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    height:288,
    width: width-50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontFamily: 'CooperHewitt-Heavy',
    color: 'rgb(44,44,44)',
    fontSize: 24,
  },
  subText: {
    marginLeft:20,
    marginRight: 20,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',// TODO: SUPER LIGHT
  }
  
  
});

export default MyTeamScreen
