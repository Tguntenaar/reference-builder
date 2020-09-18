import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const evaluationRequest = {
  createEvaluationRequest: (input) => {
    return API.graphql(
      graphqlOperation(mutations.createEvaluationRequest, {
        input,
      })
    );
  },
  deleteEvaluationRequest: (id) => {
    return API.graphql(
      graphqlOperation(mutations.deleteEvaluationRequest, {
        input: { id },
      })
    );
  },
};

const rating = {
  createRating: (input) => {
    return API.graphql(graphqlOperation(mutations.createRating, { input }));
  },
};

const evaluation = {
  getEvaluationsByUser: (userId) => {
    return API.graphql(graphqlOperation(queries.evaluationsByUser, { userId }));
  },
  createEvaluation: (input) => {
    return API.graphql(graphqlOperation(mutations.createEvaluation, { input }));
  },
};

export default {
  ...evaluation,
  ...rating,
  ...evaluationRequest,
};
