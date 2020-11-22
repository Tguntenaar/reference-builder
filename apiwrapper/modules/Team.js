import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import printAction from './Logger';

export default {
  getTeam: (id) => {
    printAction('getTeam called');
    return API.graphql(graphqlOperation(queries.getTeam, { id }));
  },
  createTeam: (input) => {
    printAction('createTeam called');
    return API.graphql(graphqlOperation(mutations.createTeam, { input }));
  },
  deleteTeam: (input) => {
    printAction('deleteTeam called');
    return API.graphql(graphqlOperation(mutations.deleteTeam, { input }));
  },
  updateTeam: (input) => {
    printAction('updateTeam called');
    return API.graphql(graphqlOperation(mutations.updateTeam, { input }));
  },
};
