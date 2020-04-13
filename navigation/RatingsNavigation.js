import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import RatingsScreen from '../screens/RatingsScreen.js';

// import React from 'react'
const Stack = createStackNavigator();

function RatingsNavigation() {
  return (
    <Stack.Navigator initialRouteName="RatingsScreen">
      <Stack.Screen name="RatingsScreen" component={RatingsScreen} navigation={Stack} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} navigation={Stack} />
    </Stack.Navigator>
  )
}

export default RatingsNavigation
