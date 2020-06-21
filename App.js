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
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';

import UserContextProvider from './contexts/UserContext'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation.js';
// import useLinking from './navigation/useLinking'; TODO: app.json 

// AWS
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
// PREBUILT UI
import { withAuthenticator } from 'aws-amplify-react-native'
// Load/fetch ratings evaluations and team members
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';

const defaultUser = { 
  name:"Thomas Guntenaar", 
  jobTitle:"App creator", 
  team: [
    { name:"App", jobTitle:'Founder'}, 
    { name:'Thomas', jobTitle:'developer'}
  ]}
function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(defaultUser)
  // Load initial Navigation state TODO: sign up link
  // const [initialNavigationState, setInitialNavigationState] = useState();
  // const containerRef = useRef();
  // const { getInitialState } = useLinking(containerRef);

  const loadAuth = async () => {
    const { attributes: { sub } } = await Auth.currentAuthenticatedUser().catch(e => console.log(e));
    const { data: { getUser: user } } = await API.graphql(graphqlOperation(queries.getUser, { id: sub })).catch(e => console.log(e))
    setUser(user);
    // console.log(user.teams.items[0].team)
  }

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

        await loadAuth()

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
  } else {
    return (
      <UserContextProvider user={user}>
        <SafeAreaProvider>
          <NavigationContainer>
              <StackNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </UserContextProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0009EE",
  },
});


// export default App
// PREBUILT UI
const greetings = false;
export default withAuthenticator(App, greetings)