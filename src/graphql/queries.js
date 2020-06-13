/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
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
      status
    }
    nextToken
  }
}
`;
