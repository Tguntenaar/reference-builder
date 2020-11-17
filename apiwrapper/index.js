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
    return API.graphql(
      graphqlOperation(mutations.createTeamMemberLink, { input: { ...input, active: true } })
    );
  },
  updateTeamMemberLink: (input) => {
    return API.graphql(graphqlOperation(mutations.updateTeamMemberLink, { input }));
  },
  deleteTeamMemberLink: (input) => {
    return API.graphql(graphqlOperation(mutations.deleteTeamMemberLink, { input }));
  },
  fixNullValuesTeamLink: () => {
    API.graphql(graphqlOperation(queries.listTeamMemberLinks))
      .then((response) => {
        const links = response.data.listTeamMemberLinks.items;
        for (const link of links) {
          if (link.active === null) {
            console.log('found null value');

            API.graphql(
              graphqlOperation(mutations.updateTeamMemberLink, {
                id: link.id,
                active: true,
              })
            )
              .then((response) => {
                console.log('succesfully updated to active');
              })
              .catch((error) => {
                console.log(`%c CANT update`, 'color:red');
                console.log(error);
              });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const skill = {
  createSkill: (input) => {
    return API.graphql(
      graphqlOperation(mutations.createSkill, { input: { ...input, active: true } })
    );
  },
  updateSkill: (input) => {
    return API.graphql(graphqlOperation(mutations.updateSkill, { input }));
  },
  // deleteSkill: (input) => {
  //   return API.graphql(graphqlOperation(mutations.deleteSkill, { input }));
  // },
};

const average = {
  /**
   * Gets called every time create Skill is called
   * Or every time a user is created { for every skill create user averages }
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
  updateUserAverage: (input) => {
    return API.graphql(
      graphqlOperation(mutations.updateAverageUserRating, {
        input,
      })
    );
  },
  getUserAverage: (input) => {
    /** { userId[, skillId] } = input  */
    return API.graphql(
      graphqlOperation(queries.averageRatingsByUser, {
        ...input, // unfold input
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
  updateTeamAverage: (input) => {
    return API.graphql(
      graphqlOperation(mutations.updateAverageTeamRating, {
        input,
      })
    );
  },
  getTeamAverage: (input) => {
    /** { teamId[, skillId] } = input  */
    return API.graphql(
      graphqlOperation(queries.averageRatingsByTeam, {
        ...input,
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
