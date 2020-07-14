/* eslint-disable global-require */
/**
 * TODO:
 * Concepts to implement/investigate
 * - useEffect Hook
 * - Context
 * - Redux Store
 * - Presentational vs Container components -> classes -> functions
 * - subscribe to what data?
 * - circle overnemen van Fiverr
 * - team settings screen
 * - user settings screen
 */

/** First import gesture handler */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
// import useLinking from './navigation/useLinking'; TODO: app.json

// AWS
import Amplify, { Auth } from 'aws-amplify';
// PREBUILT UI
import { withAuthenticator } from 'aws-amplify-react-native';
// Load/fetch ratings evaluations and team members
import api from './apiwrapper';
import awsconfig from './aws-exports';
import StackNavigation from './navigation/StackNavigation';
import UserContextProvider from './contexts/UserContext';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const defaultUser = {
  name: 'Thomas Guntenaar',
  jobTitle: 'App creator',
  teams: {
    items: [
      { name: 'App', jobTitle: 'Founder' },
      { name: 'Thomas', jobTitle: 'developer' },
    ],
  },
  receivedRequests: [],
  teamsLink: {
    items: [],
  },
};
function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(defaultUser);
  let errors;
  // Load initial Navigation state TODO: sign up link
  // const [initialNavigationState, setInitialNavigationState] = useState();
  // const containerRef = useRef();
  // const { getInitialState } = useLinking(containerRef);

  const loadAuth = async () => {
    const {
      attributes: { sub },
    } = await Auth.currentAuthenticatedUser().catch(console.log);
    console.log(sub);
    const result = await api.getUser(sub); // .catch((error) => console.log({ error }));
    console.log({ result });
    if (!result.data) {
      // FIXME: Cant getUser
      // if user deleted route to other screen
      errors = result.errors.map((error) => error.message);
    } else {
      const {
        data: { getUser: userData },
      } = result;
      setUser(userData);
    }
  };

  // Data fetching, setting up a subscription are both examples of side effects
  useEffect(() => {
    // Function to load resources
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

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
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
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
          {/** errors ? (
            errors.map((error) => {
              return <Text> {error} </Text>;
            })
          ) : (
            <StackNavigation user={user} />
          ) */}
          <StackNavigation user={user} />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContextProvider>
  );
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

// export default App
// PREBUILT UI
const greetings = false;
export default withAuthenticator(App, greetings);
