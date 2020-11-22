import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import printAction from './Logger';

export default {
  getUser: (id) => {
    printAction('getUser called');
    return API.graphql(graphqlOperation(queries.getUser, { id }));
  },
  createUser: (input) => {
    printAction('createUser called');
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
    printAction('updateUser called');
    return API.graphql(graphqlOperation(mutations.updateUser, { input }));
  },
  deleteUser: (input) => {
    printAction('deleteUser called');
    return API.graphql(graphqlOperation(mutations.deleteUser, { input }));
  },
};
