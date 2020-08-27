/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvaluationRequest = /* GraphQL */ `
  subscription OnCreateEvaluationRequest {
    onCreateEvaluationRequest {
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
export const onUpdateEvaluationRequest = /* GraphQL */ `
  subscription OnUpdateEvaluationRequest {
    onUpdateEvaluationRequest {
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
export const onDeleteEvaluationRequest = /* GraphQL */ `
  subscription OnDeleteEvaluationRequest {
    onDeleteEvaluationRequest {
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
