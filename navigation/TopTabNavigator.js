import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsNavigation from './RatingsNavigation.js';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ratings" component={RatingsNavigation} />
      <Tab.Screen name="Evaluations" component={EvaluationsScreen} />
      <Tab.Screen name="MyTeam" component={MyTeamScreen} />
    </Tab.Navigator>
  );
}