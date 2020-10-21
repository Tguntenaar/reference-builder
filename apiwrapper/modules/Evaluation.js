import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const evaluationRequest = {
  createEvaluationRequest: (input) => {
    return API.graphql(graphqlOperation(mutations.createEvaluationRequest, { input }));
  },
  deleteEvaluationRequest: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteEvaluationRequest, { input }));
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

  deleteEvaluation: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteEvaluation, { input }));
  },
  /** a bug created a lot of evaluations with errors this function deletes them faster
   * then me. one by one
   */
  cleanUpEvaluations: () => {
    API.graphql(
      graphqlOperation(`
        query ListEvaluations(
          $filter: ModelEvaluationFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              userId
            }
          }
        }`)
    )
      .then(({ data: { listEvaluations } }) => {
        const faultyEvaluations = listEvaluations.items.filter((evaluation) => {
          return evaluation.userId === 'ed710d85-5d20-4504-a76a-0e64991667ed';
        });
        for (const eva of faultyEvaluations) {
          const input = { id: eva.id };
          API.graphql(graphqlOperation(mutations.deleteEvaluation, { input }))
            .then(() => {
              console.log('succes');
            })
            .catch((error) => {
              console.log(error);
              console.log('failed');
            });
        }
      })
      .catch((result) => {
        console.log(result);
        // console.log(
        //   evaluations.map((evaluation) => {
        //     if (evaluation === null) {
        //       return;
        //     }
        //     return evaluation.id;
        //   })
        // );
      });
  },
};

export default {
  ...evaluation,
  ...rating,
  ...evaluationRequest,
};
