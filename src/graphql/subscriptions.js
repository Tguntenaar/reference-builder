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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
        updatedAt
      }
      status
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
        updatedAt
      }
      status
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
            }
            status
            updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
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
            ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
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
                ratings {
                  nextToken
                }
                averageRatings {
                  id
                  createdAt
                  userId
                  authorId
                  comment
                  updatedAt
                }
                evaluations {
                  nextToken
                }
                updatedAt
              }
              evaluations {
                items {
                  id
                  ratingId
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
              }
              nextToken
            }
            updatedAt
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
                evaluations {
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              ratings {
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
                evaluations {
                  nextToken
                }
                comment
                updatedAt
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
              updatedAt
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
        updatedAt
      }
      status
      updatedAt
    }
  }
`;
