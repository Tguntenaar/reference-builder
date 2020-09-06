/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvaluationRequest = /* GraphQL */ `
  subscription OnCreateEvaluationRequest {
    onCreateEvaluationRequest {
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateEvaluationRequest = /* GraphQL */ `
  subscription OnUpdateEvaluationRequest {
    onUpdateEvaluationRequest {
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteEvaluationRequest = /* GraphQL */ `
  subscription OnDeleteEvaluationRequest {
    onDeleteEvaluationRequest {
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
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
        activeTeam
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
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
              activeTeam
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
                }
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
              activeTeam
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
                }
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
            }
          }
          nextToken
        }
      }
    }
  }
`;
