import * as React from 'react';
import { Image, View, Text, StyleSheet, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Navigation
import TabNavigation from './TabNavigation.js';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import DetailedRatingScreen from '../screens/DetailedRatingScreen.js'
import EvaluateScreen from '../screens/EvaluateScreen.js';
import EvaluateCommentScreen from '../screens/EvaluateCommentScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import TeamSettingsScreen from '../screens/TeamSettingsScreen.js';
import ModalScreen from '../screens/ModalScreen.js';

// AWS
import { Auth } from 'aws-amplify';

function ParentNavigation({ user }) {

  const admin = true

  const HeaderRightContent = ({ onPress }) => {
    return (
      <>
        <Feather
          name={"settings"}
          color={"#fff"}
          onPress={onPress}
          style={styles.settingsIcon}
        />
        <View style={styles.transparentCircle}></View>
      </>
    );
  };
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" 
      component={TabNavigation} 
      
      options={({navigation, route}) => ({
        headerTitle: () => (
          <View style={styles.container}>
            <Text style={styles.jobTitle}>{user.jobTitle} local</Text>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0009EE',
          shadowColor:'transparent',
          height: 190,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Image source={require('../assets/images/esther-rookhuijzen.jpeg')} style={styles.image} />
        ),
        headerRight: () => (
          <HeaderRightContent
              onPress={() => {
                navigation.navigate("SettingsScreen");
              }}
            />
        ),
      })} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="DetailedRatingScreen" component={DetailedRatingScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="EvaluateScreen" component={EvaluateScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="EvaluateCommentScreen" component={EvaluateCommentScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} 
        options={({navigation, route}) => ({
          title: "Settings",
          headerRight: () => (
            <View style={styles.icons}>
              {admin && <Feather name={"users"} color={"#000"} 
              onPress={() => { navigation.navigate("TeamSettingsScreen") }}
              style={styles.teamIcon}/>}
              <Feather name={"log-out"} color={"#000"} 
              onPress={() => { Auth.signOut() }}
              style={styles.signOutIcon}/>
            </View>
          ), 
        })}/>
      <Stack.Screen name="TeamSettingsScreen" component={TeamSettingsScreen} options={{title: "Team Settings"}}/>
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
    </Stack.Navigator>
  )
}

const imageSize = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 154,
    marginLeft: 70,
    justifyContent: 'center',
  },
  jobTitle: {
    marginTop:20,
    fontSize: 20,
    color:'#fff',
    fontFamily: "CooperHewitt-BookItalic",
    width: 250,
  },
  circle: {
    // zIndex: 0,
  },
  name: {
    fontSize: 36,
    fontWeight: "800",
    color:'#fff',
    fontFamily: "CooperHewitt-Heavy",
    width: 250,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
    marginLeft: 20,
  },
  settingsIcon: {
    marginBottom: 120,
    marginRight: 20,
    fontSize: 20,
    zIndex: 10,
  },
  icons:{
    flexDirection: 'row',
    paddingRight: 20,
  },
  teamIcon: {
    fontSize: 20,
    paddingRight: 20,
  },
  signOutIcon: {
    fontSize: 20,
  },
  transparentCircle: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    position: "absolute",
    top: -160,
    right: -100,
    borderRadius: 500,
    opacity: 0.2,
    // zIndex:-2 hides circle on android
  },
});

export default ParentNavigation
