import React, { Fragment, useState } from 'react';
import { StyleSheet, ScrollView, Modal, Text, View, Dimensions, Image } from 'react-native';
import TeamMember from '../components/TeamMember';
import NextButton from '../components/NextButton';


function MyTeamScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const subText = 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor.';
  return (
    <Fragment>
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
              <Text style={styles.subText}>{subText}
              </Text>
              
              <NextButton title="Ok" onPress={() => {
                setModalVisible(!modalVisible);
              }}/>
            </View>
          </View>
      </Modal>
      <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
        <TeamMember name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation} onPress={setModalVisible}/>
        <TeamMember name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation} onPress={setModalVisible}/>
        <TeamMember name="Thomas Guntenaar" jobTitle="Developer" navigation={navigation} onPress={setModalVisible}/>
      </ScrollView>
    </Fragment>
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
    // flexGrow: 1,
  },
  modalContainer: {
    marginTop: 40, 
    backgroundColor:'rgba(51,51,51,0.8)',
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
