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
          avatar {
            bucket
            region
            key
          }
          name
          admins
          group
          companyId
          company {
            id
            name
            admins
            teams {
              items {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              nextToken
            }
            group
            createdAt
            updatedAt
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
              forManager
              active
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          averageRatings {
            items {
              id
              teamId
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
      group
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
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          nextToken
        }
        group
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
      avatar {
        bucket
        region
        key
      }
      name
      admins
      group
      companyId
      company {
        id
        name
        admins
        teams {
          items {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          nextToken
        }
        group
        createdAt
        updatedAt
      }
      membersLink {
        items {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
          forManager
          active
          group
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      averageRatings {
        items {
          id
          teamId
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          skillId
          skill {
            id
            teamId
            name
            description
            forManager
            active
            group
            createdAt
            updatedAt
          }
          grade
          timesRated
          createdAt
          updatedAt
        }
        nextToken
      }
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
        avatar {
          bucket
          region
          key
        }
        name
        admins
        group
        companyId
        company {
          id
          name
          admins
          teams {
            items {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          group
          createdAt
          updatedAt
        }
        membersLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
            forManager
            active
            group
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
        averageRatings {
          items {
            id
            teamId
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
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
      activeTeam {
        id
        userId
        teamId
        group
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        team {
          id
          createdAt
          avatar {
            bucket
            region
            key
          }
          name
          admins
          group
          companyId
          company {
            id
            name
            admins
            teams {
              items {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              nextToken
            }
            group
            createdAt
            updatedAt
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
              forManager
              active
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          averageRatings {
            items {
              id
              teamId
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        createdAt
        updatedAt
      }
      teamsLink {
        items {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          status
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          status
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          comment
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          comment
          group
          updatedAt
        }
        nextToken
      }
      group
      updatedAt
      averageRatings {
        items {
          id
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          skillId
          skill {
            id
            teamId
            name
            description
            forManager
            active
            group
            createdAt
            updatedAt
          }
          grade
          timesRated
          createdAt
          updatedAt
        }
        nextToken
      }
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          skillId
          skill {
            id
            teamId
            name
            description
            forManager
            active
            group
            createdAt
            updatedAt
          }
          grade
          group
          createdAt
          updatedAt
        }
        nextToken
      }
      comment
      group
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            group
            createdAt
            updatedAt
          }
          nextToken
        }
        comment
        group
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            group
            createdAt
            updatedAt
          }
          nextToken
        }
        comment
        group
        updatedAt
      }
      skillId
      skill {
        id
        teamId
        name
        description
        forManager
        active
        group
        createdAt
        updatedAt
      }
      grade
      group
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          comment
          group
          updatedAt
        }
        skillId
        skill {
          id
          teamId
          name
          description
          forManager
          active
          group
          createdAt
          updatedAt
        }
        grade
        group
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
      forManager
      active
      group
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
        forManager
        active
        group
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      status
      group
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        status
        group
        updatedAt
      }
      nextToken
    }
  }
`;
export const evaluationsByUser = /* GraphQL */ `
  query EvaluationsByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    evaluationsByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            group
            createdAt
            updatedAt
          }
          nextToken
        }
        comment
        group
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAverageUserRating = /* GraphQL */ `
  query GetAverageUserRating($id: ID!) {
    getAverageUserRating(id: $id) {
      id
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
        activeTeam {
          id
          userId
          teamId
          group
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
            activeTeam {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              createdAt
              updatedAt
            }
            teamsLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                status
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
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
                  group
                  updatedAt
                }
                authorId
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                ratings {
                  nextToken
                }
                comment
                group
                updatedAt
              }
              nextToken
            }
            group
            updatedAt
            averageRatings {
              items {
                id
                userId
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          team {
            id
            createdAt
            avatar {
              bucket
              region
              key
            }
            name
            admins
            group
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
                  group
                  companyId
                  updatedAt
                }
                nextToken
              }
              group
              createdAt
              updatedAt
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
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
                forManager
                active
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            averageRatings {
              items {
                id
                teamId
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                timesRated
                createdAt
                updatedAt
              }
              nextToken
            }
          }
          createdAt
          updatedAt
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            status
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
                  group
                  updatedAt
                }
                skillId
                skill {
                  id
                  teamId
                  name
                  description
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                grade
                group
                createdAt
                updatedAt
              }
              nextToken
            }
            comment
            group
            updatedAt
          }
          nextToken
        }
        group
        updatedAt
        averageRatings {
          items {
            id
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      skillId
      skill {
        id
        teamId
        name
        description
        forManager
        active
        group
        createdAt
        updatedAt
      }
      grade
      timesRated
      createdAt
      updatedAt
    }
  }
`;
export const listAverageUserRatings = /* GraphQL */ `
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
          activeTeam {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            createdAt
            updatedAt
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              status
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              ratings {
                items {
                  id
                  evaluationId
                  skillId
                  grade
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comment
              group
              updatedAt
            }
            nextToken
          }
          group
          updatedAt
          averageRatings {
            items {
              id
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        skillId
        skill {
          id
          teamId
          name
          description
          forManager
          active
          group
          createdAt
          updatedAt
        }
        grade
        timesRated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAverageTeamRating = /* GraphQL */ `
  query GetAverageTeamRating($id: ID!) {
    getAverageTeamRating(id: $id) {
      id
      teamId
      team {
        id
        createdAt
        avatar {
          bucket
          region
          key
        }
        name
        admins
        group
        companyId
        company {
          id
          name
          admins
          teams {
            items {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          group
          createdAt
          updatedAt
        }
        membersLink {
          items {
            id
            userId
            teamId
            group
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
              activeTeam {
                id
                userId
                teamId
                group
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  companyId
                  updatedAt
                }
                createdAt
                updatedAt
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  group
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
                  group
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
                  group
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
                  group
                  updatedAt
                }
                nextToken
              }
              group
              updatedAt
              averageRatings {
                items {
                  id
                  userId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
            forManager
            active
            group
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
        averageRatings {
          items {
            id
            teamId
            team {
              id
              createdAt
              avatar {
                bucket
                region
                key
              }
              name
              admins
              group
              companyId
              company {
                id
                name
                admins
                teams {
                  nextToken
                }
                group
                createdAt
                updatedAt
              }
              membersLink {
                items {
                  id
                  userId
                  teamId
                  group
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
                  forManager
                  active
                  group
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            skillId
            skill {
              id
              teamId
              name
              description
              forManager
              active
              group
              createdAt
              updatedAt
            }
            grade
            timesRated
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      skillId
      skill {
        id
        teamId
        name
        description
        forManager
        active
        group
        createdAt
        updatedAt
      }
      grade
      timesRated
      createdAt
      updatedAt
    }
  }
`;
export const listAverageTeamRatings = /* GraphQL */ `
  query ListAverageTeamRatings(
    $filter: ModelaverageTeamRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAverageTeamRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamId
        team {
          id
          createdAt
          avatar {
            bucket
            region
            key
          }
          name
          admins
          group
          companyId
          company {
            id
            name
            admins
            teams {
              items {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              nextToken
            }
            group
            createdAt
            updatedAt
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
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
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  createdAt
                  updatedAt
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
                group
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
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
              forManager
              active
              group
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          averageRatings {
            items {
              id
              teamId
              team {
                id
                createdAt
                avatar {
                  bucket
                  region
                  key
                }
                name
                admins
                group
                companyId
                company {
                  id
                  name
                  admins
                  group
                  createdAt
                  updatedAt
                }
                membersLink {
                  nextToken
                }
                skills {
                  nextToken
                }
                updatedAt
                averageRatings {
                  nextToken
                }
              }
              skillId
              skill {
                id
                teamId
                name
                description
                forManager
                active
                group
                createdAt
                updatedAt
              }
              grade
              timesRated
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        skillId
        skill {
          id
          teamId
          name
          description
          forManager
          active
          group
          createdAt
          updatedAt
        }
        grade
        timesRated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
