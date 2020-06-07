/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
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
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        userId
        authorId
        comment
        createdAt
      }
      evaluations {
        nextToken
      }
    }
    company
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
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      company
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
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      company
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
        evaluatorId
        userId
        status
        createdAt
      }
      nextToken
    }
    ratings {
      items {
        id
        userId
        authorId
        comment
        createdAt
      }
      nextToken
    }
    averageRatings {
      id
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
      createdAt
    }
    evaluations {
      items {
        id
        userId
        authorId
        comment
        createdAt
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
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        userId
        authorId
        comment
        createdAt
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
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        userId
        authorId
        comment
        createdAt
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
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        userId
        authorId
        comment
        createdAt
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
    createdAt
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
      createdAt
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
      createdAt
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
        userId
        authorId
        comment
        createdAt
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
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      averageRatings {
        id
        userId
        authorId
        comment
        createdAt
      }
      evaluations {
        nextToken
      }
    }
    status
    createdAt
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
      createdAt
    }
    nextToken
  }
}
`;
