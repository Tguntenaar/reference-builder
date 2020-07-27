/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
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
                company {
                  id
                  name
                  admins
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          membersLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            items {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              teamId
              team {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
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
                items {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            skills {
              items {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                teamId
                team {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
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
                items {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            skills {
              items {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                teamId
                team {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      membersLink {
        items {
          id
          userId
          teamId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            skills {
              items {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                teamId
                team {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          teamId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      averageRatings {
        items {
          teamId
          team {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          skillId
          skill {
            id
            teamId
            name
            description
            createdAt
            updatedAt
          }
          grade
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
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
                teams {
                  nextToken
                }
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        membersLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            teamId
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            teamId
            team {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      name
      email
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamsLink {
        items {
          id
          userId
          teamId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            skills {
              items {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                teamId
                team {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      requests {
        items {
          id
          createdAt
          evaluatorId
          evaluator {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          userId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          status
          updatedAt
        }
        nextToken
      }
      receivedRequests {
        items {
          id
          createdAt
          evaluatorId
          evaluator {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          userId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          status
          updatedAt
        }
        nextToken
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
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          authorId
          author {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          ratings {
            items {
              id
              evaluationId
              evaluation {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          comment
          updatedAt
        }
        nextToken
      }
      receivedEvaluations {
        items {
          id
          createdAt
          userId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          authorId
          author {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          ratings {
            items {
              id
              evaluationId
              evaluation {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          comment
          updatedAt
        }
        nextToken
      }
      averageRatings {
        items {
          userId
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            teamsLink {
              items {
                id
                userId
                teamId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            requests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
            }
            receivedRequests {
              items {
                id
                createdAt
                evaluatorId
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                status
                updatedAt
              }
              nextToken
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
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            receivedEvaluations {
              items {
                id
                createdAt
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            averageRatings {
              items {
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          skillId
          skill {
            id
            teamId
            name
            description
            createdAt
            updatedAt
          }
          grade
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvaluation = /* GraphQL */ `
  query GetEvaluation($id: ID!) {
    getEvaluation(id: $id) {
      id
      createdAt
      userId
      user {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      authorId
      author {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      ratings {
        items {
          id
          evaluationId
          evaluation {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          skillId
          skill {
            id
            teamId
            name
            description
            createdAt
            updatedAt
          }
          grade
          createdAt
          updatedAt
        }
        nextToken
      }
      comment
      updatedAt
    }
  }
`;
export const listEvaluations = /* GraphQL */ `
  query ListEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userId
        user {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        authorId
        author {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        ratings {
          items {
            id
            evaluationId
            evaluation {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        comment
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAverageUserRatings = /* GraphQL */ `
  query GetAverageUserRatings($id: ID!) {
    getAverageUserRatings(id: $id) {
      userId
      user {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      skillId
      skill {
        id
        teamId
        name
        description
        createdAt
        updatedAt
      }
      grade
      createdAt
      updatedAt
    }
  }
`;
export const listAverageUserRatingss = /* GraphQL */ `
  query ListAverageUserRatingss(
    $filter: ModelaverageUserRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAverageUserRatingss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        user {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        skillId
        skill {
          id
          teamId
          name
          description
          createdAt
          updatedAt
        }
        grade
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAverageTeamRatings = /* GraphQL */ `
  query GetAverageTeamRatings($id: ID!) {
    getAverageTeamRatings(id: $id) {
      teamId
      team {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      skillId
      skill {
        id
        teamId
        name
        description
        createdAt
        updatedAt
      }
      grade
      createdAt
      updatedAt
    }
  }
`;
export const listAverageTeamRatingss = /* GraphQL */ `
  query ListAverageTeamRatingss(
    $filter: ModelaverageTeamRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAverageTeamRatingss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        teamId
        team {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        skillId
        skill {
          id
          teamId
          name
          description
          createdAt
          updatedAt
        }
        grade
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      teamId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvaluationRequest = /* GraphQL */ `
  query GetEvaluationRequest($id: ID!) {
    getEvaluationRequest(id: $id) {
      id
      createdAt
      evaluatorId
      evaluator {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      userId
      user {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        teamsLink {
          items {
            id
            userId
            teamId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
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
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              skills {
                items {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  teamId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        requests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
        }
        receivedRequests {
          items {
            id
            createdAt
            evaluatorId
            evaluator {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            status
            updatedAt
          }
          nextToken
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
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        receivedEvaluations {
          items {
            id
            createdAt
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            authorId
            author {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            ratings {
              items {
                id
                evaluationId
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  createdAt
                  updatedAt
                }
                grade
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            updatedAt
          }
          nextToken
        }
        averageRatings {
          items {
            userId
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  createdAt
                  updatedAt
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
                  updatedAt
                }
                nextToken
              }
              receivedRequests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  updatedAt
                }
                nextToken
              }
              evaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              receivedEvaluations {
                items {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                nextToken
              }
              averageRatings {
                items {
                  userId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              createdAt
              updatedAt
            }
            grade
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      status
      updatedAt
    }
  }
`;
export const listEvaluationRequests = /* GraphQL */ `
  query ListEvaluationRequests(
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
        evaluator {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        userId
        user {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          teamsLink {
            items {
              id
              userId
              teamId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
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
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          requests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              evaluator {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              status
              updatedAt
            }
            nextToken
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
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          receivedEvaluations {
            items {
              id
              createdAt
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              authorId
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              updatedAt
            }
            nextToken
          }
          averageRatings {
            items {
              userId
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                teamsLink {
                  nextToken
                }
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
                evaluations {
                  nextToken
                }
                receivedEvaluations {
                  nextToken
                }
                averageRatings {
                  nextToken
                }
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                createdAt
                updatedAt
              }
              grade
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        status
        updatedAt
      }
      nextToken
    }
  }
`;
