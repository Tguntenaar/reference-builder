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
  const newActiveTeamLinkID = teamsLink.items[0].id;
  api.updateUser({
    id: userContext.id,
    activeTeamID: newActiveTeamLinkID,
  });

  return teamsLink.items[0];
};

const isManager = (userContext) => {
  const activeTeamLink = getActiveTeamLink(userContext);
  return activeTeamLink.team.admins.includes(userContext.id);
};

const isAdmin = (userContext) => {
  const activeTeamLink = getActiveTeamLink(userContext);
  return activeTeamLink.team.company.admins.includes(userContext.id);
};

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = useState({ ...props.user });
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // console.log(user);
    api
      .getUser(user.id)
      .then((result) => {
        // console.log('Usercontext');
        // console.log(Object.keys(result.data.getUser));
        setUser({ ...result.data.getUser });
        setRefreshing(false);
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
  }, [refreshing]);
  console.log('isAdmin:', isAdmin(user), 'isMangager: ', isManager(user));
  return (
    <UserContext.Provider
      value={{
        ...user,
        refreshing,
        onRefresh,
        isAdmin: isAdmin(user),
        isManager: isManager(user),
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
