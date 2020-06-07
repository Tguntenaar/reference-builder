/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
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
export const onUpdateRating = `subscription OnUpdateRating {
  onUpdateRating {
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
export const onDeleteRating = `subscription OnDeleteRating {
  onDeleteRating {
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
export const onCreateEvaluation = `subscription OnCreateEvaluation {
  onCreateEvaluation {
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
export const onUpdateEvaluation = `subscription OnUpdateEvaluation {
  onUpdateEvaluation {
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
export const onDeleteEvaluation = `subscription OnDeleteEvaluation {
  onDeleteEvaluation {
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
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
    id
    teamId
    name
    description
  }
}
`;
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
    id
    teamId
    name
    description
  }
}
`;
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
    id
    teamId
    name
    description
  }
}
`;
export const onCreateEvaluationRequest = `subscription OnCreateEvaluationRequest {
  onCreateEvaluationRequest {
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
export const onUpdateEvaluationRequest = `subscription OnUpdateEvaluationRequest {
  onUpdateEvaluationRequest {
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
export const onDeleteEvaluationRequest = `subscription OnDeleteEvaluationRequest {
  onDeleteEvaluationRequest {
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
