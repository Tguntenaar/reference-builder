import * as React from 'react';
import { Image, View, Text, StyleSheet, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

/**
 * 
 * https://reactnavigation.org/docs/auth-flow/
 * 
 */

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        You need to login
      </Text>
      <Button title="or Signup" onPress={()=>navigation.navigate("SignUp")}/>
    </View>
  )
}

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        You need to signup
      </Text>
      <Button title="or Login" onPress={()=>navigation.navigate("Login")}/>
      <Button title="or Confirm" onPress={()=>navigation.navigate("ConfirmSignUp")}/>

    </View>
  )
}

function ConfirmSignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Confirm signup
      </Text>
      <Button title="or Login" onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

function ParentNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ParentNavigation
