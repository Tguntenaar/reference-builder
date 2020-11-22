import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import printAction from './Logger';

const evaluationRequest = {
  createEvaluationRequest: (input) => {
    printAction('createEvaluationRequest called');
    return API.graphql(graphqlOperation(mutations.createEvaluationRequest, { input }));
  },
  deleteEvaluationRequest: (input) => {
    printAction('deleteEvaluationRequest called');
    return API.graphql(graphqlOperation(mutations.deleteEvaluationRequest, { input }));
  },
};

const rating = {
  createRating: (input) => {
    printAction('createRating called');
    return API.graphql(graphqlOperation(mutations.createRating, { input }));
  },
};

const evaluation = {
  getEvaluationsByUser: (input) => {
    printAction('getEvaluationsByUser called');
    return API.graphql(
      graphqlOperation(queries.evaluationsByUser, {
        ...input,
      })
    );
  },
  createEvaluation: (input) => {
    printAction('createEvaluation called');
    return API.graphql(graphqlOperation(mutations.createEvaluation, { input }));
  },

  deleteEvaluation: (input) => {
    printAction('deleteEvaluation called');
    return API.graphql(graphqlOperation(mutations.deleteEvaluation, { input }));
  },
  /** a bug created a lot of evaluations with errors this function deletes them faster
   * then me. one by one
   */
  cleanUpEvaluations: () => {
    printAction('cleanUpEvaluations called');
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
