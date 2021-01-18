import React, { createContext, useState, useReducer } from 'react';
import api from '../apiwrapper';
import { developerMode } from '../constants/Utils';

// default value
const initialState = {};

export const UserContext = createContext(initialState);

const getActiveTeamLink = (userContext) => {
  const { activeTeamID: activeTeamLinkID, teamsLink } = userContext;
  if (activeTeamLinkID) {
    return userContext.activeTeam;
  }
  if (teamsLink?.items[0]) {
    const newActiveTeamLinkID = teamsLink.items[0].id;
    api.updateUser({
      id: userContext.id,
      activeTeamID: newActiveTeamLinkID,
    });
    return teamsLink.items[0];
  }
  return { team: {
    admins: [],
    skills: { items: [] },
    company: {
      admins: []
    }
  }}
};

export const isManager = (userContext) => {
  const activeTeamLink = getActiveTeamLink(userContext);
  return activeTeamLink.team.admins.includes(userContext.id);
};

export const isAdmin = (userContext) => {
  const activeTeamLink = getActiveTeamLink(userContext);
  return activeTeamLink.team.company.admins.includes(userContext.id);
};

const reducer = (state, action) => {
  // action.payload
  let newState;
  switch(action.type) {
    case 'newAPIRequest':
      return action.user;
    case 'changeName':
      newState = {...state, name: action.name, jobTitle: action.jobTitle};
      console.log('newState:', newState.name, newState.jobTitle);
      return newState;
    case 'addRequest':
      newState = {...state, receivedRequests: { items: [...state.receivedRequests.items, action.request]}};
      return newState;
    case 'setActiveTeam':
      newState = {...state, activeTeam: action.activeTeamLink }
      return newState;

      case 'changeTeamName':
        // TODO:
        // const newTeam = {...oldTeam, name: action.name};
        newState = {...state, teamMemberLinks: { items:  [...state.teamMemberLinks.items ]} }
        return newState;

      case 'toggleDevMode':
        return {...state, developerMode: !state.developerMode}
      case 'toggleIsManager':
        return {...state, isManager: !state.isManager}
    default:
      throw new Error(`action type doesnt not exist for ${action.type}`);
  };
};

const callback = (user, setRefreshing, dispatch) => {
  setRefreshing(true);
  console.log("user");
  api
    .getUser(user.id)
    .then((result) => {
      dispatch({type: 'newAPIRequest', user: result.data.getUser });
      setRefreshing(false);
    })
    .catch(({ data: { getUser }, errors }) => {
      console.log('ERRORS in UserContext.js');
      console.log(errors.map((error) => error.message));
      dispatch({type: 'newAPIRequest', user: getUser });
      setRefreshing(false);
    });
};

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { Provider } = UserContext;
  const [user, dispatch] = useReducer(reducer, { ...props.user, developerMode, isManager: isManager(props.user) });
  const onRefresh = React.useCallback(() => callback(user, setRefreshing, dispatch), [refreshing]);
  console.log(user.name, user.jobTitle);
  console.log('isAdmin:', isAdmin(user), 'isManager: ', isManager(user));
  return (
    <Provider
      value={{
        ...user,
        refreshing,
        onRefresh,
        dispatch,
        isAdmin: isAdmin(user),
      }}
    >
      {props.children}
    </Provider>
  );
};

export default UserContextProvider;
