import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsScreen from '../screens/RatingsScreen.js';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator({ratings, evaluationRequests, teamMembers}) {
  return (
    <Tab.Navigator 
      initialRouteName="My Ratings"
      initialLayout={{ width: Dimensions.get('window').width }}
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
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        indicatorStyle: {
          backgroundColor:'#fff',
          width: 30,
          marginLeft: 15,
        },
    }}>
      <Tab.Screen name="My Ratings" component={RatingsScreen} ratings={ratings}/>
      <Tab.Screen name="Evaluations" component={EvaluationsScreen} evaluationRequests={evaluationRequests}/>
      <Tab.Screen name="My team" component={MyTeamScreen} teamMembers={teamMembers}  />
    </Tab.Navigator>
  );
}

export default TopTabNavigator