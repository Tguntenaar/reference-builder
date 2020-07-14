import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import { Text } from 'react-native';
import EvaluationRequestsTab from '../screens/EvaluationsScreen';
import TeamTab from '../screens/MyTeamScreen';
import RatingTab from '../screens/Rating/RatingTab';
import { width } from '../constants/Utils';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="My Ratings"
      initialLayout={{ width }}
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
          backgroundColor: '#0009EE',
          // borderBottomRightRadius: 20,
          // borderBottomLeftRadius: 20,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          paddingBottom: 5,
          // borderRadius: 20,
          // alignSelf: 'center',
          //  width: width-50,
        },
        indicatorStyle: {
          backgroundColor: '#fff',
          width: 30,
          marginLeft: 35,
        },
      }}
    >
      <Tab.Screen
        name="My Ratings"
        component={RatingTab}
        options={{
          tabBarLabel: ({ tintColor, focused }) => (
            <Text
              style={{
                fontWeight: focused ? 'bold' : null,
                color: focused ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: focused ? 16 : 14,
                textAlign: 'center',
                width: width / 3.5,
                fontFamily: focused ? 'CooperHewitt-Heavy' : 'CooperHewitt-Medium',
              }}
            >
              {' '}
              My Ratings
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Evaluations"
        component={EvaluationRequestsTab}
        options={{
          tabBarLabel: ({ tintColor, focused }) => (
            <Text
              style={{
                fontWeight: focused ? 'bold' : null,
                color: focused ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: focused ? 16 : 14,
                textAlign: 'center',
                width: width / 3.5,
                fontFamily: focused ? 'CooperHewitt-Heavy' : 'CooperHewitt-Medium',
              }}
            >
              Evaluations
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="My team"
        component={TeamTab}
        options={{
          tabBarLabel: ({ tintColor, focused }) => (
            <Text
              style={{
                fontWeight: focused ? 'bold' : null,
                color: focused ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: focused ? 16 : 14,
                textAlign: 'center',
                width: width / 3.5,
                fontFamily: focused ? 'CooperHewitt-Heavy' : 'CooperHewitt-Medium',
              }}
            >
              My Team
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
