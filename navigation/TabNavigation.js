import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
/** Screens */
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsScreen from '../screens/RatingsScreen.js';


function TopTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#fff',
      style: {
        backgroundColor:"#0009EE",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 4,
      },
      indicatorStyle: {
        backgroundColor:'#fff',
        width: 30,
      },
    }}>
      <Tab.Screen name="My Ratings" component={RatingsScreen} />
      <Tab.Screen name="Evaluations" component={EvaluationsScreen} />
      <Tab.Screen name="My team" component={MyTeamScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator