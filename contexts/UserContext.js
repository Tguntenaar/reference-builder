import React, { createContext } from 'react';

// default value
const defaultUser = {
  name: 'Thomas Guntenaar',
  jobTitle: 'developer',
};

export const UserContext = createContext(defaultUser);

const UserContextProvider = (props) => {
  return <UserContext.Provider value={props.user}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
