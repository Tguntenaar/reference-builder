import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen() {
  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <Text>Open up EvaluateCommentScreen.js to start working on your app!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  safe:{
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen
