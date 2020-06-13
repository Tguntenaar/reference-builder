/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
    id
    name
    admins
    teams {
      items {
        id
        createdAt
        name
        admins
        companyId
        company {
          id
          name
          admins
          teams {
            items {
              id
              createdAt
              name
              admins
              companyId
            }
            nextToken
          }
        }
        members {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
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
      nextToken
    }
  }
}
`;
export const updateCompany = `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
    id
    name
    admins
    teams {
      items {
        id
        createdAt
        name
        admins
        companyId
        company {
          id
          name
          admins
          teams {
            items {
              id
              createdAt
              name
              admins
              companyId
            }
            nextToken
          }
        }
        members {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
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
      nextToken
    }
  }
}
`;
export const deleteCompany = `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
    id
    name
    admins
    teams {
      items {
        id
        createdAt
        name
        admins
        companyId
        company {
          id
          name
          admins
          teams {
            items {
              id
              createdAt
              name
              admins
              companyId
            }
            nextToken
          }
        }
        members {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
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
      nextToken
    }
  }
}
`;
export const createTeam = `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
    id
    createdAt
    name
    admins
    companyId
    company {
      id
      name
      admins
      teams {
        items {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
        nextToken
      }
    }
    members {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
    createdAt
    name
    admins
    companyId
    company {
      id
      name
      admins
      teams {
        items {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
        nextToken
      }
    }
    members {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
    createdAt
    name
    admins
    companyId
    company {
      id
      name
      admins
      teams {
        items {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
        nextToken
      }
    }
    members {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
export const createTeamMemberLink = `mutation CreateTeamMemberLink(
  $input: CreateTeamMemberLinkInput!
  $condition: ModelTeamMemberLinkConditionInput
) {
  createTeamMemberLink(input: $input, condition: $condition) {
    id
    userId
    teamId
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    team {
      id
      createdAt
      name
      admins
      companyId
      company {
        id
        name
        admins
        teams {
          items {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
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
      members {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
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
}
`;
export const updateTeamMemberLink = `mutation UpdateTeamMemberLink(
  $input: UpdateTeamMemberLinkInput!
  $condition: ModelTeamMemberLinkConditionInput
) {
  updateTeamMemberLink(input: $input, condition: $condition) {
    id
    userId
    teamId
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    team {
      id
      createdAt
      name
      admins
      companyId
      company {
        id
        name
        admins
        teams {
          items {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
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
      members {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
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
}
`;
export const deleteTeamMemberLink = `mutation DeleteTeamMemberLink(
  $input: DeleteTeamMemberLinkInput!
  $condition: ModelTeamMemberLinkConditionInput
) {
  deleteTeamMemberLink(input: $input, condition: $condition) {
    id
    userId
    teamId
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    team {
      id
      createdAt
      name
      admins
      companyId
      company {
        id
        name
        admins
        teams {
          items {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
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
      members {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
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
    teams {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
      nextToken
    }
    requests {
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        status
      }
      nextToken
    }
    ratings {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        avatar {
          bucket
          region
          key
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        nextToken
      }
      comment
    }
    evaluations {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
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
    teams {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
      nextToken
    }
    requests {
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        status
      }
      nextToken
    }
    ratings {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        avatar {
          bucket
          region
          key
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        nextToken
      }
      comment
    }
    evaluations {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
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
    teams {
      items {
        id
        userId
        teamId
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        team {
          id
          createdAt
          name
          admins
          companyId
          company {
            id
            name
            admins
            teams {
              nextToken
            }
          }
          members {
            items {
              id
              userId
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
      nextToken
    }
    requests {
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        status
      }
      nextToken
    }
    ratings {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        avatar {
          bucket
          region
          key
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        nextToken
      }
      comment
    }
    evaluations {
      items {
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    evaluations {
      items {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
    comment
  }
}
`;
export const updateRating = `mutation UpdateRating(
  $input: UpdateRatingInput!
  $condition: ModelRatingConditionInput
) {
  updateRating(input: $input, condition: $condition) {
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    evaluations {
      items {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
    comment
  }
}
`;
export const deleteRating = `mutation DeleteRating(
  $input: DeleteRatingInput!
  $condition: ModelRatingConditionInput
) {
  deleteRating(input: $input, condition: $condition) {
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    evaluations {
      items {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
    comment
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
export const updateEvaluation = `mutation UpdateEvaluation(
  $input: UpdateEvaluationInput!
  $condition: ModelEvaluationConditionInput
) {
  updateEvaluation(input: $input, condition: $condition) {
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
        avatar {
          bucket
          region
          key
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
export const deleteEvaluation = `mutation DeleteEvaluation(
  $input: DeleteEvaluationInput!
  $condition: ModelEvaluationConditionInput
) {
  deleteEvaluation(input: $input, condition: $condition) {
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
        avatar {
          bucket
          region
          key
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
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
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              jobTitle
            }
            team {
              id
              createdAt
              name
              admins
              companyId
            }
          }
          nextToken
        }
        requests {
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
            }
            status
          }
          nextToken
        }
        ratings {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
            teams {
              nextToken
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
        evaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              jobTitle
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
            }
            evaluations {
              nextToken
            }
            comment
          }
          nextToken
        }
      }
      evaluations {
        items {
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    status
  }
}
`;
export const updateEvaluationRequest = `mutation UpdateEvaluationRequest(
  $input: UpdateEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  updateEvaluationRequest(input: $input, condition: $condition) {
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    status
  }
}
`;
export const deleteEvaluationRequest = `mutation DeleteEvaluationRequest(
  $input: DeleteEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  deleteEvaluationRequest(input: $input, condition: $condition) {
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
      teams {
        items {
          id
          userId
          teamId
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
            teams {
              nextToken
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
          team {
            id
            createdAt
            name
            admins
            companyId
            company {
              id
              name
              admins
            }
            members {
              nextToken
            }
            skills {
              nextToken
            }
          }
        }
        nextToken
      }
      requests {
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
            avatar {
              bucket
              region
              key
            }
            teams {
              nextToken
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
        nextToken
      }
      ratings {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
          avatar {
            bucket
            region
            key
          }
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
          teams {
            items {
              id
              userId
              teamId
            }
            nextToken
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
            }
            authorId
            author {
              id
              createdAt
              name
              jobTitle
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
        evaluations {
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
        comment
      }
      evaluations {
        items {
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
            teams {
              nextToken
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
            teams {
              nextToken
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
        nextToken
      }
    }
    status
  }
}
`;
