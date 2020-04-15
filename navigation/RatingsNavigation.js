import * as React from 'react';
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import RatingsScreen from '../screens/RatingsScreen.js';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//new
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function RatingsNavigation() {
  return (
    <Stack.Navigator initialRouteName="RatingsScreen">
      <Stack.Screen name="RatingsScreen" component={RatingsScreen} navigation={Stack} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} navigation={Stack} />
    </Stack.Navigator>
  )
}

export default RatingsNavigation
