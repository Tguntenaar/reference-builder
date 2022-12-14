import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import { Dimensions, Text, Platform } from 'react-native';
import EvaluationsScreen from '../screens/EvaluationsScreen';
import MyTeamScreen from '../screens/MyTeamScreen';
import RatingsScreen from '../screens/RatingsScreen';

const Tab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window');
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
      style={
        {
          // width: width-50,
          // TODO:
          // alignSelf: 'center',
          // backgroundColor: 'black',
        }
      }
    >
      <Tab.Screen
        name="My Ratings"
        component={RatingsScreen}
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
        component={EvaluationsScreen}
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
        component={MyTeamScreen}
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
