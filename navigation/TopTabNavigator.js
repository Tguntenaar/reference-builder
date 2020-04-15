import * as React from 'react';


import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsNavigation from './RatingsNavigation.js';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

//new
import { createStackNavigator } from '@react-navigation/stack';
import EvaluationNavigation from './EvaluationNavigation.js';
import MyTeamNavigation from './MyTeamNavigation.js';
import RatingsScreen from '../screens/RatingsScreen.js';
const Stack = createStackNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ratings" component={RatingsScreen} />
      <Tab.Screen name="Evaluations" component={EvaluationsScreen} />
      <Tab.Screen name="MyTeam" component={MyTeamScreen} />
    </Tab.Navigator>
  );
}