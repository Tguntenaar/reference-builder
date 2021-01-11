import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
/** import modules */
import user from './modules/User';
import team from './modules/Team';
import evaluation from './modules/Evaluation';
import printAction from './modules/Logger';

const manageFunctions = {
  deleteUserAvagereWithOutUser: () => {
    console.log('deleteUserAvagereWithOutUser');
    API.graphql(
      graphqlOperation(`
    query ListAverageUserRatings(
      $filter: ModelaverageUserRatingFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listAverageUserRatings(
        filter: $filter
        limit: $limit
        nextToken: $nextToken
      ) {
        items {
          id
        }
      }
    }`)
    )
      .then(
        ({
          data: {
            listAverageUserRatings: { items },
          },
        }) => {
          const ids = items.map((object) => object.id);

          API.graphql(graphqlOperation(queries.listAverageUserRatings))
            .then(({ data: { listAverageUserRatings } }) => {
              console.log('no errors found');
              return true;
            })
            .catch(({ data, errors }) => {
              const nonErroredObjectsIds = data.listAverageUserRatings.items
                .filter((object) => object !== null)
                .map((object) => object.id);
              console.log('Total number of Objects', items.length);
              console.log('Objects without errors: ', nonErroredObjectsIds.length);
              const objectsIdsWithErrors = ids.filter((id) => !nonErroredObjectsIds.includes(id));
              console.log('Objects with errors: ', objectsIdsWithErrors.length);
              const promises = objectsIdsWithErrors.map((id) =>
                API.graphql(
                  graphqlOperation(mutations.deleteAverageUserRating, {
                    input: { id },
                  })
                )
              );
              Promise.all(promises)
                .then(() => {
                  console.log('deleted all objects with errors');
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        }
      )
      .catch(() => {
        console.log('custom query errored');
      });
  },
  deleteObjectsWithErrors: (listQuery, deleteMutation) => {
    console.log('deleting');
    // TODO: test deze functie.. + test of het missen van die filters uitmaakt.
    // $filter: ModelaverageUserRatingFilterInput
    // filter: $filter
    API.graphql(
      graphqlOperation(`
    query ${listQuery}(
      $limit: Int
      $nextToken: String
    ) {
      ${listQuery}(
        limit: $limit
        nextToken: $nextToken
      ) {
        items {
          id
        }
      }
    }`)
    )
      .then(({ data }) => {
        const { items } = data[listQuery];
        const ids = items.map((object) => object.id);

        API.graphql(graphqlOperation(listQuery))
          .then(({ data }) => {
            // TODO: nextToken;
            console.log('no errors found');
            return true;
          })
          .catch(({ data, errors }) => {
            const { items: errorItems } = data[listQuery];
            const nonErroredObjectsIds = errorItems
              .filter((object) => object !== null)
              .map((object) => object.id);
            console.log('Total number of Objects', items.length);
            console.log('Objects without errors: ', nonErroredObjectsIds.length);
            const objectsIdsWithErrors = ids.filter((id) => !nonErroredObjectsIds.includes(id));
            console.log('Objects with errors: ', objectsIdsWithErrors.length);
            const promises = objectsIdsWithErrors.map((id) =>
              API.graphql(
                graphqlOperation(deleteMutation, {
                  input: { id },
                })
              )
            );
            Promise.all(promises)
              .then(() => {
                console.log('deleted all objects with errors');
              })
              .catch((error) => {
                console.log(error);
              });
          });
      })
      .catch(() => {
        console.log('custom query errored');
      });
  },
};

const company = {
  updateCompany: (input) => {
    printAction('updateCompany called');
    return API.graphql(
      graphqlOperation(mutations.updateCompany, {
        input,
      })
    );
  },
};

const userTeamLink = {
  createTeamMemberLink: (input) => {
    printAction('createTeamMemberLink called');
    return API.graphql(
      graphqlOperation(mutations.createTeamMemberLink, {
        input: { ...input, active: true },
      })
    );
  },
  updateTeamMemberLink: (input) => {
    printAction('updateTeamMemberLink called');
    return API.graphql(graphqlOperation(mutations.updateTeamMemberLink, { input }));
  },
  deleteTeamMemberLink: (input) => {
    printAction('deleteTeamMemberLink called');
    return API.graphql(graphqlOperation(mutations.deleteTeamMemberLink, { input }));
  },
  fixNullValuesTeamLink: () => {
    printAction('fixNullValuesTeamLink called');
    API.graphql(graphqlOperation(queries.listTeamMemberLinks))
      .then((response) => {
        const links = response.data.listTeamMemberLinks.items;
        links.map((link) => {
          return new Promise((resolve, reject) => {
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
                  resolve(response);
                })
                .catch((error) => {
                  console.log(`%c CANT update`, 'color:red');
                  console.log(error);
                  reject(error);
                });
            }
          });
        });
        // for (const link of links) {
        //   if (link.active === null) {
        //     console.log('found null value');

        //     API.graphql(
        //       graphqlOperation(mutations.updateTeamMemberLink, {
        //         id: link.id,
        //         active: true,
        //       })
        //     )
        //       .then((response) => {
        //         console.log('succesfully updated to active');
        //       })
        //       .catch((error) => {
        //         console.log(`%c CANT update`, 'color:red');
        //         console.log(error);
        //       });
        //   }
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const skill = {
  createSkill: (input) => {
    return API.graphql(
      graphqlOperation(mutations.createSkill, {
        input: { ...input, active: true },
      })
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
    printAction('createUserAverage called');

    return API.graphql(
      graphqlOperation(mutations.createAverageUserRating, {
        input: { ...ids },
      })
    );
  },
  deleteUserAverage: (id) => {
    printAction('deleteUserAverage called');

    return API.graphql(
      graphqlOperation(mutations.deleteAverageUserRating, {
        input: { id },
      })
    );
  },
  updateUserAverage: (input) => {
    printAction('updateUserAverage called');

    return API.graphql(
      graphqlOperation(mutations.updateAverageUserRating, {
        input,
      })
    );
  },
  averageRatingsByUser: (input) => {
    /** { userId[, skillId] } = input  */
    printAction('averageRatingsByUser called');

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
  createTeamAverage: (input) => {
    return API.graphql(
      graphqlOperation(mutations.createAverageTeamRating, {
        input: { ...input },
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
    printAction('updateTeamAverage called');
    return API.graphql(
      graphqlOperation(mutations.updateAverageTeamRating, {
        input,
      })
    );
  },
  averageRatingsByTeam: (input) => {
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
  ...manageFunctions,
};
