/**
 * TODO: animate header
 */
import * as React from 'react';
import { Image, View, Text, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import TabNavigation from './TabNavigation';

// Screens
import RatingsDetailsScreen from '../screens/Rating/RatingChart';
import DetailedRatingScreen from '../screens/Rating/RatingDetails';
import EvaluateScreen from '../screens/Evaluate/Sliders';
import EvaluateCommentScreen from '../screens/Evaluate/Comment';
import SettingsScreen from '../screens/Settings/Main';
import TeamSettingsScreen from '../screens/Settings/Team';
import CompanySettingsScreen from '../screens/Settings/Company';
import ModalScreen from '../screens/ModalScreen';

// Constants
import { imageEsther } from '../constants/Images';

// Navigation
const Stack = createStackNavigator();

function StackNavigation({ user }) {
  // user = user || { name: 'Esther Rookhuijzen', jobTitle: 'Designer' };
  const admin = true;

  const HeaderRightContent = ({ onPress }) => {
    return (
      <>
        <Feather name="settings" color="#fff" onPress={onPress} style={styles.settingsIcon} />
        <View style={styles.transparentCircle} />
      </>
    );
  };

  const SettingsScreenHeader = ({ navigation }) => ({
    title: 'Settings',
    headerRight: () => (
      <View style={styles.icons}>
        {admin && (
          <Feather
            name="sliders"
            color="#000"
            onPress={() => {
              navigation.navigate('CompanySettingsScreen');
            }}
            style={styles.teamIcon}
          />
        )}
        {admin && (
          <Feather
            name="users"
            color="#000"
            onPress={() => {
              navigation.navigate('TeamSettingsScreen');
            }}
            style={styles.teamIcon}
          />
        )}
        <Feather
          name="log-out"
          color="#000"
          onPress={() => {
            Alert.alert(
              'Log Out',
              'Are you sure you want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => Auth.signOut() },
              ],
              { cancelable: true }
            );
          }}
          style={styles.signOutIcon}
        />
      </View>
    ),
  });

  const TabNavigationHeader = ({ navigation }) => ({
    headerTitle: () => (
      <View style={styles.container}>
        <Text style={styles.jobTitle}>{user.jobTitle}</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#0009EE',
      shadowColor: 'transparent',
      height: 190,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: () => <Image source={imageEsther} style={styles.image} />,
    headerRight: () => (
      <HeaderRightContent
        onPress={() => {
          navigation.navigate('SettingsScreen');
        }}
      />
    ),
  });

  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabNavigation} options={TabNavigationHeader} />
      <Stack.Screen
        name="RatingsDetailsScreen"
        component={RatingsDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailedRatingScreen"
        component={DetailedRatingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EvaluateScreen"
        component={EvaluateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EvaluateCommentScreen"
        component={EvaluateCommentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={SettingsScreenHeader}
      />
      <Stack.Screen
        name="TeamSettingsScreen"
        component={TeamSettingsScreen}
        options={{ title: 'Team Settings' }}
      />
      <Stack.Screen
        name="CompanySettingsScreen"
        component={CompanySettingsScreen}
        options={{ title: 'Company Settings' }}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
    </Stack.Navigator>
  );
}

const imageSize = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 154,
    marginLeft: 70,
    justifyContent: 'center',
  },
  jobTitle: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'CooperHewitt-BookItalic',
    width: 250,
  },
  circle: {
    // zIndex: 0,
  },
  name: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    fontFamily: 'CooperHewitt-Heavy',
    width: 250,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginLeft: 20,
  },
  settingsIcon: {
    marginBottom: 120,
    marginRight: 20,
    fontSize: 20,
    zIndex: 10,
  },
  icons: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  teamIcon: {
    fontSize: 20,
    paddingRight: 20,
  },
  signOutIcon: {
    fontSize: 20,
  },
  transparentCircle: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -160,
    right: -100,
    borderRadius: 500,
    opacity: 0.2,
    // zIndex:-2 hides circle on android
  },
});

export default StackNavigation;
