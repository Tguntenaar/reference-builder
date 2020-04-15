import * as React from 'react';
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import DetailedRatingScreen from '../screens/DetailedRatingScreen.js'
import RatingsScreen from '../screens/RatingsScreen.js';
import {Button} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//new
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabNavigator from './TopTabNavigator.js';
import EvaluateScreen from '../screens/EvaluateScreen.js';
import EvaluateCommentScreen from '../screens/EvaluateCommentScreen.js';
const Tab = createMaterialTopTabNavigator();

function ParentNavigation() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TopTabNavigator} options={{
        title:'Tongbang Jun-Seo',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Settings"
          />
        ),
      }} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen} navigation={Stack} />
      <Stack.Screen name="DetailedRatingScreen" component={DetailedRatingScreen} navigation={Stack} />
      <Stack.Screen name="EvaluateScreen" component={EvaluateScreen} navigation={Stack} />
      <Stack.Screen name="EvaluateCommentScreen" component={EvaluateCommentScreen} navigation={Stack} />
    </Stack.Navigator>
  )
}

export default ParentNavigation
