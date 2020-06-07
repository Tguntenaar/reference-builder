import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
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
import ModalScreen from '../screens/ModalScreen.js';

function ParentNavigation({ratings, evaluationRequests, teamMembers}) {
  console.log("Stacknavigation")
  console.log({ratings, evaluationRequests, teamMembers});
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" 
      component={TabNavigation} 
      ratings={ratings}
      evaluationRequests={evaluationRequests}
      teamMembers={teamMembers}
      options={({navigation, route}) => ({
        // headerShown: false,
        headerTitle: () => (
          <View style={styles.container}>
            {/*TODO:<Circle style={styles.circle}/>*/}
            <Text style={styles.jobTitle}>Founder</Text>
            <Text style={styles.name}>Esther Rookhuijzen</Text>
            {/*<Circle />*/}
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
          <Feather name={"settings"} color={"#fff"} 
          onPress={() => { navigation.navigate("SettingsScreen") }}
          style={styles.settingsIcon}/>
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
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: "Settings"}}/>
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
    </Stack.Navigator>
  )
}

const imageSize = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 154,
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
  },
});

export default ParentNavigation
