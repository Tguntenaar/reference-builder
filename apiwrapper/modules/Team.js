import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export default {
  getTeam: (id) => {
    return API.graphql(graphqlOperation(queries.getTeam, { id }));
  },
  createTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.createTeam, { input }));
  },
  deleteTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteTeam, { input }));
  },
  updateTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.updateTeam, { input }));
  },
};
