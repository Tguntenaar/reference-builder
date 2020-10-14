import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export default {
  getUser: (id) => {
    return API.graphql(graphqlOperation(queries.getUser, { id }));
  },
  createUser: (input) => {
    return API.graphql(graphqlOperation(mutations.createUser, { input }));
  },
  async addToGroup(username, groupname) {
    const apiName = 'AdminQueries';
    const path = '/addUserToGroup';
    const myInit = {
      body: {
        username,
        groupname,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    };
    return API.post(apiName, path, myInit);
  },
  async removeFromGroup(username, groupname) {
    const apiName = 'AdminQueries';
    const path = '/removeUserFromGroup';
    const myInit = {
      body: {
        username,
        groupname,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    };
    return API.post(apiName, path, myInit);
  },
  async disableUser(username) {
    const apiName = 'AdminQueries';
    const path = '/disableUser';
    const myInit = {
      body: {
        username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    };
    return API.post(apiName, path, myInit);
  },
  updateUser: (input) => {
    return API.graphql(graphqlOperation(mutations.updateUser, { input }));
  },
  deleteUser: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteUser, { input }));
  },
};
