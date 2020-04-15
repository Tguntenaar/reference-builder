import * as React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Navigation
import TabNavigator from './TabNavigation.js';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens
import RatingsDetailsScreen from '../screens/RatingsDetailsScreen.js'
import DetailedRatingScreen from '../screens/DetailedRatingScreen.js'
import EvaluateScreen from '../screens/EvaluateScreen.js';
import EvaluateCommentScreen from '../screens/EvaluateCommentScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';


function ParentNavigation() {
  
  return (
    <Stack.Navigator initialRouteName="Tabs" 
      style={{
        shadowColor:'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
      }} >
      <Stack.Screen name="Tabs" component={TabNavigator} 
      options={({navigation, route}) => ({
        headerTitle: () => (
          <View style={styles.container}>
            <Text style={styles.jobTitle}>Founder</Text>
            <Text style={styles.name}>Esther Rookhuijzen</Text>
          </View>
        ),
        title:'Tongbang Jun-Seo',
        headerStyle: {
          backgroundColor: '#0009EE',
          shadowColor:'transparent',
          height: 190,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Image source={require('../assets/esther-rookhuijzen.jpeg')} style={styles.image} />
        ),
        headerRight: () => (
          <Feather name={"settings"} color={"#fff"} 
          onPress={() => { navigation.navigate("SettingsScreen") }}
          style={styles.settingsIcon}/>
        ),
      })} />
      <Stack.Screen name="RatingsDetailsScreen" component={RatingsDetailsScreen}/>
      <Stack.Screen name="DetailedRatingScreen" component={DetailedRatingScreen} />
      <Stack.Screen name="EvaluateScreen" component={EvaluateScreen} />
      <Stack.Screen name="EvaluateCommentScreen" component={EvaluateCommentScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 154,
    justifyContent: 'center',
  },
  jobTitle: {
    color:'#fff',
    fontSize: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "800",
    color:'#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20,
  },
  settingsIcon: {
    marginBottom: 120,
    marginRight: 20,
    fontSize: 20,
  },
});

export default ParentNavigation
