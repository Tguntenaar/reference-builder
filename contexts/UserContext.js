import React, { createContext, useState } from 'react';
import api from '../apiwrapper';

// default value
const defaultUser = {};

export const UserContext = createContext(defaultUser);

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

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUserContext] = useState({ ...props.user });
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log("user");
    api
      .getUser(user.id)
      .then((result) => {
        setUserContext(result.data.getUser); // activeTeam: getActiveTeamLink(result.data.getUser)
        setRefreshing(false);
      })
      .catch(({ data: { getUser }, errors }) => {
        console.log('ERRORS in UserContext.js');
        console.log(errors.map((error) => error.message));
        setUserContext(getUser);
        setRefreshing(false);

      });
  }, [refreshing]);

  console.log('isAdmin:', isAdmin(user), 'isManager: ', isManager(user));
  return (
    <UserContext.Provider
      value={{
        ...user,
        refreshing,
        onRefresh,
        setUserContext,
        isAdmin: isAdmin(user),
        isManager: isManager(user),
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
