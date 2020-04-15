import * as React from 'react';
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import RatingsScreen from '../screens/RatingsScreen.js';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//new
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTeamScreen from '../screens/MyTeamScreen.js';
const Tab = createMaterialTopTabNavigator();

function MyTeamNavigation() {
  return (
    <Stack.Navigator initialRouteName="MyTeamScreen">
      <Stack.Screen name="MyTeamScreen" component={MyTeamScreen} navigation={Stack} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} navigation={Stack} />
    </Stack.Navigator>
  )
}

export default MyTeamNavigation
