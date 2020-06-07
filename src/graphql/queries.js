/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    adminId
    admin {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    teams {
      items {
        id
        createdAt
        name
        adminId
        companyId
      }
      nextToken
    }
  }
}
`;
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      teams {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    createdAt
    name
    adminId
    admin {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    companyId
    company {
      id
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      teams {
        nextToken
      }
    }
    members {
      items {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      nextToken
    }
    skills {
      items {
        id
        teamId
        name
        description
      }
      nextToken
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      companyId
      company {
        id
        name
        adminId
      }
      members {
        nextToken
      }
      skills {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    createdAt
    name
    jobTitle
    avatar {
      bucket
      region
      key
    }
    teamId
    team {
      id
      createdAt
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      companyId
      company {
        id
        name
        adminId
      }
      members {
        nextToken
      }
      skills {
        nextToken
      }
    }
    requests {
      items {
        id
        createdAt
        evaluatorId
        userId
        status
      }
      nextToken
    }
    ratings {
      items {
        id
        createdAt
        userId
        authorId
        comment
      }
      nextToken
    }
    averageRatings {
      id
      createdAt
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      authorId
      author {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      evaluations {
        nextToken
      }
      comment
    }
    evaluations {
      items {
        id
        createdAt
        userId
        authorId
        comment
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRating = `query GetRating($id: ID!) {
  getRating(id: $id) {
    id
    createdAt
    userId
    user {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    authorId
    author {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    evaluations {
      items {
        id
        ratingId
        skillId
        grade
      }
      nextToken
    }
    comment
  }
}
`;
export const listRatings = `query ListRatings(
  $filter: ModelRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      authorId
      author {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      evaluations {
        nextToken
      }
      comment
    }
    nextToken
  }
}
`;
export const getEvaluation = `query GetEvaluation($id: ID!) {
  getEvaluation(id: $id) {
    id
    ratingId
    rating {
      id
      createdAt
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      authorId
      author {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      evaluations {
        nextToken
      }
      comment
    }
    skillId
    skill {
      id
      teamId
      name
      description
    }
    grade
  }
}
`;
export const listEvaluations = `query ListEvaluations(
  $filter: ModelEvaluationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ratingId
      rating {
        id
        createdAt
        userId
        authorId
        comment
      }
      skillId
      skill {
        id
        teamId
        name
        description
      }
      grade
    }
    nextToken
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    teamId
    name
    description
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      teamId
      name
      description
    }
    nextToken
  }
}
`;
export const getEvaluationRequest = `query GetEvaluationRequest($id: ID!) {
  getEvaluationRequest(id: $id) {
    id
    createdAt
    evaluatorId
    userId
    user {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        createdAt
        name
        adminId
        companyId
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        createdAt
        userId
        authorId
        comment
      }
      evaluations {
        nextToken
      }
    }
    status
  }
}
`;
export const listEvaluationRequests = `query ListEvaluationRequests(
  $filter: ModelEvaluationRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvaluationRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      evaluatorId
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      status
    }
    nextToken
  }
}
`;
