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
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation.js';
import LoginNavigation from './navigation/LoginNavigation.js';
// import useLinking from './navigation/useLinking'; TODO: app.json 

// AWS
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure({...awsconfig, Analytics: { disabled: true}});
// PREBUILT UI
import { withAuthenticator } from 'aws-amplify-react-native'
// Load/fetch ratings evaluations and team members
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState({name:'Esther Rookhuijzen', jobTitle: 'Founder Jaaf'})
  const [ratings, setRatings] = useState([{evaluator:"Thomas Guntenaar"}])
  const [evaluationRequests, setEvaluationRequests] = useState([{}])
  
  const [teamMembers, setTeamMembers] = useState([{name:"App Level", jobTitle:'Founder'},{name:'Thomas', jobTitle:'developer'}])
  
  // Load initial Navigation state TODO: sign up link
  // const [initialNavigationState, setInitialNavigationState] = useState();
  // const containerRef = useRef();
  // const { getInitialState } = useLinking(containerRef);

  // TODO: start using redux
  const store = configureStore();

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

        // TODO: USER first login
        // thomas@guntenaar.org
        // thomasguntenaar
        const getUser1 = `query GetUser($id: ID!) {
          getUser(id: $id) {
            id
            createdAt
            name
            jobTitle
            avatar {
              bucket
              region
              key
            }
          }
        }
        `;
        let currentAuthenticatedUser = await Auth.currentAuthenticatedUser().catch(err => console.log(err));
        const { attributes } = currentAuthenticatedUser;
        console.log({attributes});
        const id = attributes.sub; // "b403da70-bea8-4e54-9cff-6a68e9d07f4d";
        var result = await API.graphql(graphqlOperation(getUser1, {id}))
        console.log({result});
        const { getUser } = result.data;
        setUser( getUser );
 

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
    // const [isSignedIn, setSignedIn] = useState(true) // FIXME:
    // return isSignedIn ? ( 
    //   <SafeAreaProvider>
    //       <NavigationContainer>
    //         <StackNavigation user={user} />
    //       </NavigationContainer>
    //   </SafeAreaProvider>
    // ) :
    return (
      <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <LoginNavigation/>
            </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
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