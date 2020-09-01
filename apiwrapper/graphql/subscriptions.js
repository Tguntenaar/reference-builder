/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvaluationRequest = /* GraphQL */ `
  subscription OnCreateEvaluationRequest($owner: String!) {
    onCreateEvaluationRequest(owner: $owner) {
      id
      createdAt
      evaluatorId
      userId
      status
      group
      updatedAt
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateEvaluationRequest = /* GraphQL */ `
  subscription OnUpdateEvaluationRequest($owner: String!) {
    onUpdateEvaluationRequest(owner: $owner) {
      id
      createdAt
      evaluatorId
      userId
      status
      group
      updatedAt
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteEvaluationRequest = /* GraphQL */ `
  subscription OnDeleteEvaluationRequest($owner: String!) {
    onDeleteEvaluationRequest(owner: $owner) {
      id
      createdAt
      evaluatorId
      userId
      status
      group
      updatedAt
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              createdAt
              updatedAt
              teams {
                items {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                nextToken
              }
            }
            membersLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              nextToken
            }
            averageRatings {
              items {
                id
                teamId
                skillId
                grade
                timesRated
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
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
          }
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
                active
                companyId
                updatedAt
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
                averageRatings {
                  nextToken
                }
                skills {
                  nextToken
                }
              }
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
                group
                updatedAt
                teamsLink {
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
                requests {
                  nextToken
                }
                receivedRequests {
                  nextToken
                }
              }
            }
            group
            updatedAt
            teamsLink {
              items {
                id
                userId
                teamId
                group
                createdAt
                updatedAt
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
            averageRatings {
              items {
                id
                userId
                skillId
                grade
                timesRated
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
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
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
                owner
              }
              nextToken
            }
          }
        }
        group
        updatedAt
        teamsLink {
          items {
            id
            userId
            teamId
            group
            createdAt
            updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                createdAt
                updatedAt
                teams {
                  nextToken
                }
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
              averageRatings {
                items {
                  id
                  teamId
                  skillId
                  grade
                  timesRated
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
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
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
                evaluation {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  group
                  updatedAt
                }
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
              }
              nextToken
            }
          }
          nextToken
        }
        averageRatings {
          items {
            id
            userId
            skillId
            grade
            timesRated
            createdAt
            updatedAt
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
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
                team {
                  id
                  createdAt
                  name
                  admins
                  group
                  active
                  companyId
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  group
                  updatedAt
                }
              }
              group
              updatedAt
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
              requests {
                items {
                  id
                  createdAt
                  evaluatorId
                  userId
                  status
                  group
                  updatedAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
