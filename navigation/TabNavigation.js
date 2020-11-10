import * as React from "react";
/** Navigation */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
/** Screens */
import { Text } from "react-native";
import EvaluationRequestsTab from "../screens/EvaluationsScreen";
import TeamTab from "../screens/MyTeamScreen";
import RatingTab from "../screens/Rating/RatingTab";
import { width } from "../constants/Utils";
import { TabContextProvider } from "../contexts/TabContext";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator({ route }) {

  // viewPersonal - Shows the tab navigator as if a manager looks at a employee
  const viewPersonal = route.params?.otherUserRatings !== undefined;
  const indicatorStyle = viewPersonal
    ? {
        backgroundColor: "#fff",
        marginLeft: 35,
      }
    : {
        backgroundColor: "#fff",
        width: 30,
        marginLeft: 35,
      };
  
  return (
    <TabContextProvider otherUserRatings={route.params?.otherUserRatings} team={route.params?.team} >
      <Tab.Navigator
        initialRouteName="My Ratings"
        initialLayout={{ width }}
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "rgba(255,255,255,0.7)",
          activeTabStyle: {
            backgroundColor: "red",
          },
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: "#0009EE",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            paddingBottom: 5,
          },
          indicatorStyle: indicatorStyle,
        }}
      >
        <Tab.Screen
          name="My Ratings"
          component={RatingTab}
          options={{
            tabBarLabel: ({ tintColor, focused }) => (
              <Text
                style={{
                  fontWeight: focused ? "bold" : null,
                  color: focused ? "#fff" : "rgba(255,255,255,0.7)",
                  fontSize: focused ? 16 : 14,
                  textAlign: viewPersonal ? "left" : "center",
                  paddingLeft: viewPersonal ? 40 : 0,
                  width: viewPersonal ? width : width / 3.5,
                  fontFamily: focused
                    ? "CooperHewitt-Heavy"
                    : "CooperHewitt-Medium",
                }}
              >
                {" "}
                {route.params?.otherUserRatings === undefined &&
                !route.params?.team
                  ? "My Ratings"
                  : "Ratings"}
              </Text>
            ),
          }}
        />
        {!route.params?.team && route.params?.otherUserRatings === undefined ? (
          <Tab.Screen
            name="Evaluations"
            component={EvaluationRequestsTab}
            options={{
              tabBarLabel: ({ tintColor, focused }) => (
                <Text
                  style={{
                    fontWeight: focused ? "bold" : null,
                    color: focused ? "#fff" : "rgba(255,255,255,0.7)",
                    fontSize: focused ? 16 : 14,
                    textAlign: "center",
                    width: width / 3.5,
                    fontFamily: focused
                      ? "CooperHewitt-Heavy"
                      : "CooperHewitt-Medium",
                  }}
                >
                  Evaluations
                </Text>
              ),
            }}
          />
        ) : null}
        {route.params?.otherUserRatings === undefined ? (
          <Tab.Screen
            name="MyTeamScreen"
            component={TeamTab}
            options={{
              tabBarLabel: ({ tintColor, focused }) => (
                <Text
                  style={{
                    fontWeight: focused ? "bold" : null,
                    color: focused ? "#fff" : "rgba(255,255,255,0.7)",
                    fontSize: focused ? 16 : 14,
                    textAlign: "center",
                    width: width / 3.5,
                    fontFamily: focused
                      ? "CooperHewitt-Heavy"
                      : "CooperHewitt-Medium",
                  }}
                >
                  {route.params?.team ? "Team" : "My Team"}
                </Text>
              ),
            }}
          />
        ) : null}
      </Tab.Navigator>
    </TabContextProvider>
  );
}

export default TopTabNavigator;
