import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export default {
  createTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.createTeam, { input }));
  },
  deleteTeam: (teamId) => {
    return API.graphql(graphqlOperation(mutations.deleteTeam, { input: { id: teamId } }));
  },
  updateTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.updateTeam, { input }));
  },
};
