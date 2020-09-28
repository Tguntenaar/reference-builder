import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
/** import modules */
import user from './modules/User';
import team from './modules/Team';
import evaluation from './modules/Evaluation';

const company = {
  updateCompany: (input) => {
    return API.graphql(
      graphqlOperation(mutations.updateCompany, {
        input,
      })
    );
  },
};

const userTeamLink = {
  createTeamMemberLink: (input) => {
    return API.graphql(graphqlOperation(mutations.createTeamMemberLink, { input }));
  },
  updateTeamMemberLink: (input) => {
    return API.graphql(graphqlOperation(mutations.updateTeamMemberLink, { input }));
  },
  deleteTeamMemberLink: (input) => {
    return API.graphql(
      graphqlOperation(mutations.deleteTeamMemberLink, {
        input,
      })
    );
  },
};

const skill = {
  createSkill: (input) => {
    return API.graphql(graphqlOperation(mutations.createSkill, { input }));
  },
  updateSkill: (input) => {
    return API.graphql(graphqlOperation(mutations.updateSkill, { input }));
  },
  deleteSkill: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteSkill, { input }));
  },
};

const average = {
  /**
   * Gets called every time create Skill is called
   * @param {skillId, userId}
   */
  createUserAverage: (ids) => {
    return API.graphql(
      graphqlOperation(mutations.createAverageUserRating, {
        input: { ...ids, grade: 0, timesRated: 0 },
      })
    );
  },
  deleteUserAverage: (id) => {
    return API.graphql(
      graphqlOperation(mutations.deleteAverageUserRating, {
        input: { id },
      })
    );
  },
  /**
   * Gets called every time create Skill is called
   * @param {skillId, teamId}
   */
  createTeamAverage: (ids) => {
    return API.graphql(
      graphqlOperation(mutations.createAverageTeamRating, {
        input: { ...ids, grade: 0, timesRated: 0 },
      })
    );
  },
  deleteTeamAverage: (id) => {
    return API.graphql(
      graphqlOperation(mutations.deleteAverageTeamRating, {
        input: { id },
      })
    );
  },
};

export default {
  ...average,
  ...team,
  ...user,
  ...userTeamLink,
  ...company,
  ...skill,
  ...evaluation,
};
