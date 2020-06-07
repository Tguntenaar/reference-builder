import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsScreen from '../screens/RatingsScreen.js';
import { Dimensions } from 'react-native';
import {Text} from 'react-native'


const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('window').width;
function TopTabNavigator({navigation, route, ratings, evaluationRequests, teamMembers}) {
  console.log("Tabnavigation")
  // console.log({ratings, evaluationRequests, teamMembers});
  console.log({navigation, route})
  return (
    <Tab.Navigator 
      initialRouteName="My Ratings"
      initialLayout={{ width: width }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        activeTabStyle: {
          backgroundColor: 'red',
        },
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor:"#0009EE",
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          paddingBottom:5
        },
        indicatorStyle: {
          backgroundColor:'#fff',
          width: 30,
          marginLeft: 35,
        },
      }}>
      <Tab.Screen 
        name="My Ratings" 
        component={RatingsScreen} 
        ratings={ratings}
        options={{ tabBarLabel: ({ tintColor, focused }) => ( <Text style={{ fontWeight: focused ? "bold" : null,color:focused ? '#fff': 'rgba(255,255,255,0.7)', fontSize:focused?16:14, textAlign:'center',  width:width/3.5, fontFamily: focused ? "CooperHewitt-Heavy" : 'CooperHewitt-Medium'}} >      My Ratings</Text> ) }}
      />
      <Tab.Screen 
        name="Evaluations" 
        component={EvaluationsScreen} 
        evaluationRequests={evaluationRequests}
        options={{ tabBarLabel: ({ tintColor, focused }) => ( <Text style={{ fontWeight: focused ? "bold" : null, color:focused ? '#fff': 'rgba(255,255,255,0.7)', fontSize:focused?16:14, textAlign:'center',  width:width/3.5, fontFamily: focused ? "CooperHewitt-Heavy" :  'CooperHewitt-Medium'}} >Evaluations</Text> ) }}
      />
      <Tab.Screen 
        name="My team" 
        component={MyTeamScreen} 
        teamMembers={teamMembers} 
        options={{ tabBarLabel: ({ tintColor, focused }) => ( <Text style={{ fontWeight: focused ? "bold" : null, color:focused ? '#fff': 'rgba(255,255,255,0.7)', fontSize:focused?16:14, textAlign:'center',  width:width/3.5, fontFamily: focused ? "CooperHewitt-Heavy" : 'CooperHewitt-Medium' }} >My Team</Text> ) }}
       />
    </Tab.Navigator>
  );
}

export default TopTabNavigator