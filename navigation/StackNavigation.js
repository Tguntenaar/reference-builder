import React, { useContext } from 'react';
import { Image, View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import TabNavigation from './TabNavigation';

// Screens
import RatingsDetailsScreen from '../screens/Rating/RatingChart';
import DetailedRatingScreen from '../screens/Rating/RatingDetails';
import EvaluateSliders from '../screens/Evaluate/Sliders';
import EvaluateCommentScreen from '../screens/Evaluate/Comment';
import SettingsScreen from '../screens/Settings/Main';
import TeamSettingsScreen from '../screens/Settings/Team';
import SendRequestsScreen from '../screens/Settings/SendRequest';
import ModalScreen from '../screens/ModalScreen';
import Form from '../screens/Form';
import TestScreen from '../screens/Test';

// Constants
import { imageEsther } from '../constants/Images';

import { S3Image } from 'aws-amplify-react-native';
import BackButton from '../components/BackButton';
import { UserContext } from '../contexts/UserContext';
// Navigation
const Stack = createStackNavigator();
const imageSize = 100;

function StackNavigation({ user }) {
  // user = user || { name: 'Esther Rookhuijzen', jobTitle: 'Designer' };
  const admin = true;
  const userContext = useContext(UserContext) 
  const HeaderRightContent = ({ onPress }) => {
    return (
      <>
        <TouchableOpacity onPress={onPress} style={styles.settingsIconContainer}>
          <Feather name="settings" color="#fff" onPress={onPress} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.transparentCircle} />
      </>
    );
  };

  // hidden
  const SettingsScreenHeader = ({ navigation }) => ({
    title: 'Settings',
    headerShown: false,
    // multiple icons in header
    headerRight: () => (
      <View style={styles.icons}>
        {admin && (
          <Feather
            name="sliders"
            color="#000"
            onPress={() => {
              navigation.navigate('TeamSettingsScreen');
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

  const TabNavigationHeader = ({ navigation, route }) => {
  let objURL = "https://reference-builer-avatars-dev111859-dev.s3-us-west-2.amazonaws.com/public/avatars/0/avatarb403da70-bea8-4e54-9cff-6a68e9d07f4d.jpeg";
  let key = "public/avatars/0/avatarb403da70-bea8-4e54-9cff-6a68e9d07f4d.jpeg";
  const teamView = route.params?.team !== undefined;
  // let test = "public/avatars/0/avatarb403da70-bea8-4e54-9cff-6a68e9d07f4d.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAjHPuICsxPj5l7q1DAw8Gh7dJfrdcFRVbzcz%2FBFDH1HAiB7aSvZJ6uvYaX04X7Obn6Gw5bPq3JvDGaf29BRxohtECrEAgh4EAAaDDc3NDkyNzA5ODkzNyIMQPJTH3AqKsM2FSA4KqECYMeWX0EWyei3BrLc8jRQAQtADVO54Y%2Bgh3xR2lqT%2FKKrX2adFkwwnnyEom25o1EbmS2BiL4EEGK3f4NyPQbowjOgMw4GEQMdf22RIXRUkaD456ZXaA%2BRLFNiqGmLMZvix5D80AZsGE%2FAOJ0LK2E1rDGdrKwn%2BfSe1lQq%2Fgko%2Fm2noFyQrvsHzjUFPJwiP6b4XbzpL9dTAn09yfXoOt6jVsUiZOxOYsIZ6imJvAAwRNVJAun3IwoXhJBjEhd3gC5nIH%2FM%2BP2yEfjWqvLsFCHhNp%2BnT0ah0sJ5E6RMjZcTjGpshKJKveNf9ufvlB7tWWG%2BTVzlwgHUv00bbJUT1JnaKFhnZ71sYLrF4N2O7R8JTyC20Ad%2FmNyg13D2jZn2n0uExDCgwc%2F5BTqxAoBQNyy93domNLMJaSGPh10hmFf4GQsEbeq8vzERlct6XG4pUSYHDH0cdpkcczmE8FUbTEpuarBxrljCdvBmLI8dN0OL2mPm2l9xYJtj%2Fy1tMMadEFLGqqT6TrfP8V8cTViunaQ2ptLJ3Svzqxzq8rkx9hmUS3X093xiAg05fPIKntHG4bVvSSR5hQ2oNfxuAyczYERp8vOCJUew3K7utS%2Fx8OgwcXEOx4jDRNjtu0Rr7Dsz7YUHP5BJPXmyNcppVDJyM02uOcVHBtj%2BNFre%2BrRpDmkzqgcI0Mgrdl8vUl92Db0sgh88KuwOGsW6bfFqweS%2BlKxzSyJW29oSHYuC2%2Bd3ttmShE6EpeRYmX2SLsdvCvjM%2BE7dJ1N5LmQAwCLGH3LDnGOOK4KuBPorIxoFhz3G&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200812T143909Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3I3KBEQ4YZ5YKX6X%2F20200812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=86bd8d844dbfef21281dadafe458cc9276d2be99de52ed353eaed276a4528398";
  return ({
      headerTitle: () => {    
        return route.params?.team ? (
          <View style={styles.container}>
          <Text style={styles.name}>{route.params.team.name}</Text>
        </View>
        ) :
        route.params?.otherUserRatings !== undefined  ? 
        (<View style={styles.container}>
          <Text style={styles.jobTitle}>{route.params?.otherUserRatings.jobTitle}</Text>
          <Text style={styles.name}>{route.params?.otherUserRatings.name}</Text>
        </View>) 
          :
        (<View style={styles.container}>
          <Text style={styles.jobTitle}>{userContext.jobTitle}</Text>
          <Text style={styles.name}>{userContext.name}</Text>
        </View>)
      },
      headerStyle: {
        backgroundColor: teamView ? "#6511C7": "#0009EE",
        shadowColor: 'transparent',
        height: 190,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // /**<S3Image imgKey={key} />*/
      headerLeft: () => {
        const canGoBack = navigation.canGoBack()
        const scaleWithBackButton = 0.85;
        const smallerImageStyle = canGoBack ? {
          width: imageSize*scaleWithBackButton,
          height: imageSize* scaleWithBackButton,
          borderRadius: imageSize* scaleWithBackButton / 2,
          marginLeft: 40,
        }: {};
        return (
          <> 
            {
              navigation.canGoBack() ? 
               <BackButton color={{backgroundColor: "#fff", color: '#0009EE'}} size={25} onPress={() => navigation.goBack()} /> 
              : null
            }
            <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack(): console.log('cant go back')}>
              <Image source={imageEsther} style={[styles.image, smallerImageStyle]}/>
            </TouchableOpacity>
          </>)
      },
      headerRight: () => {
          const { index, routes } = navigation.dangerouslyGetState();
          return routes[index].name !== 'RatingsDetailsScreen' ?  <HeaderRightContent
            onPress={() => {
              if (teamView) {
                navigation.navigate('TeamSettingsScreen', {
                  team: route.params.team,
                })
              } else {
                navigation.navigate('SettingsScreen')
              }
            }}
          />: null
        
      },
    });
  }

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
        name="EvaluateSliders"
        component={EvaluateSliders}
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
        name="SendRequests"
        component={SendRequestsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeamSettingsScreen"
        component={TeamSettingsScreen}
        options={{ headerShown: false, title: 'Team Settings' }}
      />
      
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen}  options={{headerShown:false}}/>
      <Stack.Screen
        name="Form"
        component={Form}
        options={({ route }) => ({ headerShown: false, title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

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
    marginTop: 10,
    marginRight: 5,
    fontSize: 20,
    zIndex: 10,
  },
  settingsIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    height: 50,
    // backgroundColor: 'red',
    width: 50,
    alignItems: 'flex-end',
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
