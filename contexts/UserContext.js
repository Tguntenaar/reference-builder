import React, { createContext, useState } from 'react';
import api from '../apiwrapper';

// default value
const defaultUser = {}; // TODO:

export const UserContext = createContext(defaultUser);

const getActiveTeam = (userContext) => {
  let usersActiveTeam;
  const {
    activeTeamID: activeTeam, // FIXME: also updateUser on line 20 and 30
    teamsLink,
  } = userContext;
  if (activeTeam) {
    if (teamsLink.items.length) {
      return teamsLink.items.filter(({ team }) => team.id === activeTeam);
    }
    api.updateUser({
      id: userContext.id,
      activeTeamID: null,
    });
  } else if (teamsLink.items.length) {
    usersActiveTeam = teamsLink.items[0].team;
    api.updateUser({
      id: userContext.id,
      activeTeamID: usersActiveTeam.id,
    });
  }
  return usersActiveTeam;
};

const isManager = (userContext) => {
  const activeTeam = getActiveTeam(userContext);
  return activeTeam.admins.includes(userContext.id);
};

const isAdmin = (userContext) => {
  const activeTeam = getActiveTeam(userContext);
  return activeTeam.company.admins.includes(userContext.id);
};

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = useState({ ...props.user }); // FIXME: isAdmin isManager functions
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // console.log(user);
    api
      .getUser(user.id)
      .then((result) => {
        // console.log('Usercontext');
        // console.log(Object.keys(result.data.getUser));
        setUser({ ...result.data.getUser }); // FIXME:
        setRefreshing(false);
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
  }, [refreshing]);

  return (
    <UserContext.Provider
      value={{ ...user, refreshing, onRefresh, isAdmin: true, isManager: true }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
