/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
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
export const updateTeam = `mutation UpdateTeam(
  $input: UpdateTeamInput!
  $condition: ModelTeamConditionInput
) {
  updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = `mutation DeleteTeam(
  $input: DeleteTeamInput!
  $condition: ModelTeamConditionInput
) {
  deleteTeam(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createRating = `mutation CreateRating(
  $input: CreateRatingInput!
  $condition: ModelRatingConditionInput
) {
  createRating(input: $input, condition: $condition) {
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
export const updateRating = `mutation UpdateRating(
  $input: UpdateRatingInput!
  $condition: ModelRatingConditionInput
) {
  updateRating(input: $input, condition: $condition) {
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
export const deleteRating = `mutation DeleteRating(
  $input: DeleteRatingInput!
  $condition: ModelRatingConditionInput
) {
  deleteRating(input: $input, condition: $condition) {
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
export const createEvaluation = `mutation CreateEvaluation(
  $input: CreateEvaluationInput!
  $condition: ModelEvaluationConditionInput
) {
  createEvaluation(input: $input, condition: $condition) {
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
export const updateEvaluation = `mutation UpdateEvaluation(
  $input: UpdateEvaluationInput!
  $condition: ModelEvaluationConditionInput
) {
  updateEvaluation(input: $input, condition: $condition) {
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
export const deleteEvaluation = `mutation DeleteEvaluation(
  $input: DeleteEvaluationInput!
  $condition: ModelEvaluationConditionInput
) {
  deleteEvaluation(input: $input, condition: $condition) {
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
export const createSkill = `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    teamId
    name
    description
  }
}
`;
export const updateSkill = `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    teamId
    name
    description
  }
}
`;
export const deleteSkill = `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    teamId
    name
    description
  }
}
`;
export const createEvaluationRequest = `mutation CreateEvaluationRequest(
  $input: CreateEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  createEvaluationRequest(input: $input, condition: $condition) {
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
export const updateEvaluationRequest = `mutation UpdateEvaluationRequest(
  $input: UpdateEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  updateEvaluationRequest(input: $input, condition: $condition) {
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
export const deleteEvaluationRequest = `mutation DeleteEvaluationRequest(
  $input: DeleteEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  deleteEvaluationRequest(input: $input, condition: $condition) {
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
