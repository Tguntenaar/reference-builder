/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
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
export const onUpdateRating = `subscription OnUpdateRating {
  onUpdateRating {
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
export const onDeleteRating = `subscription OnDeleteRating {
  onDeleteRating {
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
export const onCreateEvaluation = `subscription OnCreateEvaluation {
  onCreateEvaluation {
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
export const onUpdateEvaluation = `subscription OnUpdateEvaluation {
  onUpdateEvaluation {
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
export const onDeleteEvaluation = `subscription OnDeleteEvaluation {
  onDeleteEvaluation {
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
export const onUpdateEvaluationRequest = `subscription OnUpdateEvaluationRequest {
  onUpdateEvaluationRequest {
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
export const onDeleteEvaluationRequest = `subscription OnDeleteEvaluationRequest {
  onDeleteEvaluationRequest {
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
