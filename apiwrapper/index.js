import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

const company = {
  updateCompany: (input) => {
    return API.graphql(
      graphqlOperation(mutations.updateCompany, {
        input,
      })
    );
  },
};

const user = {
  getUser: (id) => {
    return API.graphql(graphqlOperation(queries.getUser, { id }));
  },
  createUser: (input) => {
    return API.graphql(graphqlOperation(mutations.createUser, { input }));
  },
  updateUser: (input) => {
    return API.graphql(graphqlOperation(mutations.updateUser, { input }));
  },
  deleteUser: (id) => {
    return API.graphql(graphqlOperation(mutations.deleteUser, { input: { id } }));
  },
};

const userTeamLink = {
  createTeamMemberLink: ({ userId, teamId }) => {
    return API.graphql(
      graphqlOperation(mutations.createTeamMemberLink, { input: { userId, teamId } })
    );
  },
  deleteTeamMemberLink: (id) => {
    return API.graphql(
      graphqlOperation(mutations.deleteTeamMemberLink, {
        input: { id },
      })
    );
  },
};

const team = {
  createTeam: ({ companyId, name }) => {
    return API.graphql(graphqlOperation(mutations.createTeam, { input: { companyId, name } }));
  },
  deleteTeam: (teamId) => {
    return API.graphql(graphqlOperation(mutations.deleteTeam, { input: { id: teamId } }));
  },
  updateTeam: (input) => {
    return API.graphql(graphqlOperation(mutations.updateTeam, { input }));
  },
};

const skill = {
  createSkill: (input) => {
    return API.graphql(graphqlOperation(mutations.createSkill, { input }));
  },
  deleteSkill: (skillId) => {
    return API.graphql(
      graphqlOperation(mutations.deleteSkill, {
        input: { id: skillId },
      })
    );
  },
};

const average = {
  /**
   * Gets called every time create Skill is called
   * @param {skillId, userId}
   */
  createUserAverage: (ids) => {
    return API.graphql(
      graphqlOperation(mutations.createAverageUserRatings, {
        input: { ...ids, grade: 0, timesRated: 0 },
      })
    );
  },
  /**
   * Gets called every time create Skill is called
   * @param {skillId, teamId}
   */
  createTeamAverage: (ids) => {
    return API.graphql(
      graphqlOperation(mutations.createAverageTeamRatings, {
        input: { ...ids, grade: 0, timesRated: 0 },
      })
    );
  },
};

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
  ...average,
  ...team,
  ...user,
  ...userTeamLink,
  ...company,
  ...skill,
  ...evaluationRequest,
  ...evaluation,
  ...rating,
};
