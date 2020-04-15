// import React from 'react';
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './navigation/TopTabNavigator.js';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ParentNavigation from './navigation/ParentNavigation.js';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ParentNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
