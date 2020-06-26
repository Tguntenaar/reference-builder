import React from 'react';

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';

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
  createUser: (input) => {
    return API.graphql(graphqlOperation(mutations.createUser, { input }));
  },
  deleteUser: (userId) => {},
};

const userteamlink = {
  createTeamMemberLink: ({ userId, teamId }) => {
    return API.graphql(
      graphqlOperation(mutations.createTeamMemberLink, { input: { userId, teamId } })
    );
  },
  deleteTeamMemberLink: (teamMemberLinkId) => {
    return API.graphql(
      graphqlOperation(mutations.deleteTeamMemberLink, {
        input: { id: teamMemberLinkId },
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

export default {
  ...team,
  ...user,
  ...userteamlink,
  ...company,
  ...skill,
};
