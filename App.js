/* eslint-disable global-require */

/** First import gesture handler */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
// import useLinking from './navigation/useLinking'; TODO: app.json

// AWS
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import AuthTheme from './constants/AuthTheme';
import { onCreateEvaluationRequest } from './apiwrapper/graphql/subscriptions';

// PREBUILT UI
// Load/fetch ratings evaluations and team members
import api from './apiwrapper';
import awsconfig from './aws-exports';
import StackNavigation from './navigation/StackNavigation';
import UserContextProvider from './contexts/UserContext';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

global.Buffer = global.Buffer || require('buffer').Buffer; //

const defaultUser = {};

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(defaultUser); // FIXME: useReducer + dont keep state user twice...
  // Load initial Navigation state: sign up link
  // const [initialNavigationState, setInitialNavigationState] = useState();
  // const containerRef = useRef();
  // const { getInitialState } = useLinking(containerRef);

  const loadAuth = async () => {
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser().catch(console.log);
    const { attributes } = currentAuthenticatedUser;
    const userID = attributes['custom:userObjectID'];
    // Auth.signOut();
    // api.cleanUpEvaluations();
    // api.deleteUserAvagereWithOutUser();
    // TODO: get profile image like this
    // const path = await CacheManager.get(uri).getPath();
    const result = await api
      .getUser(userID)
      .then(({ data: { getUser } }) => {
        setUser({ ...getUser });
      })
      .catch(({ data: { getUser }, errors }) => {
        console.log('ERRORS in App.js');
        console.log(errors[0]);

        // console.log(errors.map((error) => error.message));
        setUser(getUser);
      });
  };

  // Data fetching, setting up a subscription are both examples of side effects
  useEffect(() => {
    // Function to load resources
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load our initial navigation state
        // setInitialNavigationState(await getInitialState());

        await Font.loadAsync({
          'CooperHewitt-BookItalic': require('./assets/fonts/CooperHewitt-BookItalic.otf'),
          'CooperHewitt-Book': require('./assets/fonts/CooperHewitt-Book.otf'),
          'CooperHewitt-Bold': require('./assets/fonts/CooperHewitt-Bold.otf'),
          'CooperHewitt-Heavy': require('./assets/fonts/CooperHewitt-Heavy.otf'),
          'CooperHewitt-Light': require('./assets/fonts/CooperHewitt-Light.otf'),
          'CooperHewitt-Medium': require('./assets/fonts/CooperHewitt-Medium.otf'),
          'SourceSansPro-It': require('./assets/fonts/SourceSansPro-It.otf'),
          'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.otf'),
          'Montserrat-Black': require('./assets/fonts/Montserrat-Black.otf'),
        });

        await loadAuth();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // console.log(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();

    // Load only once
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  }

  return (
    <UserContextProvider user={user}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation user={user} />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContextProvider>
  );
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultTypes = {
  skipLoadingScreen: false,
};

// export default App
// PREBUILT UI
export default withAuthenticator(App, { includeGreetings: false }, undefined, undefined, AuthTheme);
