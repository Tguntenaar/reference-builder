/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
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
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
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
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
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
      updatedAt
    }
  }
`;
export const createTeamMemberLink = /* GraphQL */ `
  mutation CreateTeamMemberLink(
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
  }
`;
export const updateTeamMemberLink = /* GraphQL */ `
  mutation UpdateTeamMemberLink(
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
  }
`;
export const deleteTeamMemberLink = /* GraphQL */ `
  mutation DeleteTeamMemberLink(
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
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      createdAt
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      createdAt
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      createdAt
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
        nextToken
      }
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
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
export const createEvaluation = /* GraphQL */ `
  mutation CreateEvaluation(
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
  }
`;
export const updateEvaluation = /* GraphQL */ `
  mutation UpdateEvaluation(
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
  }
`;
export const deleteEvaluation = /* GraphQL */ `
  mutation DeleteEvaluation(
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
                  createdAt
                  updatedAt
                }
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
                  createdAt
                  updatedAt
                }
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
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      teamId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      teamId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      teamId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createEvaluationRequest = /* GraphQL */ `
  mutation CreateEvaluationRequest(
    $input: CreateEvaluationRequestInput!
    $condition: ModelEvaluationRequestConditionInput
  ) {
    createEvaluationRequest(input: $input, condition: $condition) {
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
export const updateEvaluationRequest = /* GraphQL */ `
  mutation UpdateEvaluationRequest(
    $input: UpdateEvaluationRequestInput!
    $condition: ModelEvaluationRequestConditionInput
  ) {
    updateEvaluationRequest(input: $input, condition: $condition) {
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
export const deleteEvaluationRequest = /* GraphQL */ `
  mutation DeleteEvaluationRequest(
    $input: DeleteEvaluationRequestInput!
    $condition: ModelEvaluationRequestConditionInput
  ) {
    deleteEvaluationRequest(input: $input, condition: $condition) {
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
