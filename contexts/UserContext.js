import React, { createContext, useState } from 'react';
import api from '../apiwrapper';

// default value
const defaultUser = {
  name: 'Thomas Guntenaar',
  jobTitle: 'developer',
};

export const UserContext = createContext(defaultUser);

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = useState(props.user);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // console.log(user);
    api
      .getUser(user.id) // 'b403da70-bea8-4e54-9cff-6a68e9d07f4d'
      .then((result) => {
        // console.log('SUCCES');
        console.log(result.data.getUser.receivedRequests.items.length);
        setUser(result.data.getUser);
        setRefreshing(false);
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
  }, [refreshing]);

  return (
    <UserContext.Provider value={{ ...user, refreshing, onRefresh }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
