/** First import gesture handler */
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import ParentNavigation from './navigation/ParentNavigation.js';

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
