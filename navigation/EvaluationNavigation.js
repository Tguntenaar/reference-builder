import * as React from 'react';
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import RatingsScreen from '../screens/RatingsScreen.js';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//new
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
const Tab = createMaterialTopTabNavigator();

function EvaluationNavigation() {
  return (
    <Stack.Navigator initialRouteName="EvaluationsScreen">
      <Stack.Screen name="EvaluationsScreen" component={EvaluationsScreen} navigation={Stack} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} navigation={Stack} />
    </Stack.Navigator>
  )
}

export default EvaluationNavigation
