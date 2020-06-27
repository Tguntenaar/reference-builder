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

export default {
  ...team,
  ...user,
  ...userTeamLink,
  ...company,
  ...skill,
  ...evaluationRequest,
};
