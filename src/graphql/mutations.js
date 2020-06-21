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
export const updateEvaluationRequest = /* GraphQL */ `
  mutation UpdateEvaluationRequest(
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
export const deleteEvaluationRequest = /* GraphQL */ `
  mutation DeleteEvaluationRequest(
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
