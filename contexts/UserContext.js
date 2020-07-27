import React, { createContext, useState } from 'react';
import api from '../apiwrapper';

// default value
const defaultUser = {
  name: 'Thomas Guntenaar',
  jobTitle: 'developer',
};

export const UserContext = createContext(defaultUser);

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const UserContextProvider = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = useState(props.user);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // console.log(user);
    api
      .getUser('b403da70-bea8-4e54-9cff-6a68e9d07f4d') // user.id
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
    // wait(1000).then(() => {
    //   setRefreshing(false);
    // });
  }, [refreshing]);
  // const [refresh, setRefresh] = useState(false);
  // const activateRefresh = async (user) => {
  //   const user = await api.getUser(user.id); // FIXME:
  //   setRefresh(!refresh);
  // };
  return (
    <UserContext.Provider value={{ ...user, refreshing, onRefresh }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
