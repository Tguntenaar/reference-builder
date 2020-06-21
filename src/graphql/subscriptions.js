/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvaluationRequest = /* GraphQL */ `
  subscription OnCreateEvaluationRequest {
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
      status
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
      status
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
      status
    }
  }
`;
