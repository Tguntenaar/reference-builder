import * as React from 'react';
/** Navigation */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import EvaluationsScreen from '../screens/EvaluationsScreen.js';
import MyTeamScreen from '../screens/MyTeamScreen.js';
import RatingsScreen from '../screens/RatingsScreen.js';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

// const _getTopBar = () => {
//   let tops = {};
//   this.topParams.map((item, index) => {
//     tops[`tab${index}`] = {
//       screen: props => <TaskContent labelItem={item} {...props} />,
//       navigationOptions: {
//           tabBarLabel: ({ tintColor, focused }) => 
//             focused ? (<Text style={{ fontWeight: 'bold' }} >{item}</Text>) :
//                       (<Text style={{ fontWeight: 'normal' }} >{item}</Text>),
//       }
//     }
//   })
//   return tops;
// }

//   const Tab = createMaterialTopTabNavigator(_getTopBar(), {
//     'lazy': false,

//     initialLayout: {
//         height: 0,
//         width: Dimensions.get('window').width,
//     },

//     tabBarOptions: {
//         pressOpacity: 0,
//         tabStyle: { ...styles.tabStyle },
//         activeTintColor: "red",

//         labelStyle: { ...styles.labelStyle },
//         // showIcon: true,  
//         // activeTabStyle: {
//         //     fontWeight: 'bold',
//         //     backgroundColor: 'red',
//         // },

//         scrollEnabled: true,
//         indicatorStyle: styles.indicatorStyle,
//         style: {
//             backgroundColor: "#fff",

//         }
//     },
//     tabBarPosition: 'top',
// });

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator 
      initialRouteName="Evaluations"
      initialLayout={{ width: Dimensions.get('window').width }}
      screenOptions={({ route }) => ({
        
        // Dit werkt alleen in bottom 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'My Ratings') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Evaluations') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name == 'My team') {

          }

          // You can return any component that you like here!
          return <Feather name={"settings"} color={"#fff"} 
          onPress={() => { navigation.navigate("SettingsScreen") }}
          style={styles.settingsIcon}/>;
        },
      })}
      tabBarOptions={{
        // TODO:
        // allowFontScaling: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        // activeBackgroundColor: 'rgb(44,44,44)', Bottom only
        // inactiveBackgroundColor: 'rgb(44,44,44)',
        activeTabStyle: {
        //   fontWeight: 900,
        //   fontSize: 30,
        backgroundColor: 'red',
        },
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor:"#0009EE",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        indicatorStyle: {
          backgroundColor:'#fff',
          width: 30,
          marginLeft: 15,
        },
    }}>
      <Tab.Screen name="My Ratings" component={RatingsScreen} />
      <Tab.Screen name="Evaluations" component={EvaluationsScreen} />
      <Tab.Screen name="My team" component={MyTeamScreen} 
      options={{ 
        tabBarLabel: 'Custom',
      }}/>
    </Tab.Navigator>
  );
}

export default TopTabNavigator