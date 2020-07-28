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
import PropTypes from 'prop-types';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
// import useLinking from './navigation/useLinking'; TODO: app.json

// AWS
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { onCreateEvaluationRequest } from './apiwrapper/graphql/subscriptions';

// PREBUILT UI
// Load/fetch ratings evaluations and team members
import api from './apiwrapper';
import awsconfig from './aws-exports';
import StackNavigation from './navigation/StackNavigation';
import UserContextProvider from './contexts/UserContext';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

global.Buffer = global.Buffer || require('buffer').Buffer; //

const defaultUser = {
  name: 'Thomas Guntenaar',
  jobTitle: 'App creator',
  receivedRequests: [],
  teamsLink: {
    items: [
      { team: { membersLink: { items: [] }, skills: [], company: { teams: { items: [] } } } },
    ],
  },
};
function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(defaultUser);
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
    // console.log({ result });
    if (result.errors || !result.data) {
      // FIXME: Cant getUser
      // if user deleted route to other screen
      // if status do this
      // errors = result.errors.map((error) => error.message);
      console.log('ohjee er zitten errors in');
    } else {
      const {
        data: { getUser: userData },
      } = result;
      console.log(userData.receivedRequests.items.length);
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
        // await loadUserContext();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // console.log(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();

    // Load only once
  }, []);

  useEffect(() => {
    // subscribe

    // const subscription = API.graphql(graphqlOperation(onCreateEvaluationRequest)).subscribe({
    //   error: (err) => console.log('Error subscribing', err),
    //   next: (data) => console.log('Subscription data', data.value),
    // });
    return () => {
      // unsubscribe
      // subscription.unsubscribe();
    };
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
const greetings = false;
export default withAuthenticator(App, greetings);
