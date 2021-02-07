/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        group
        colors {
          id
          group
          primary
          secondary
          rating1
          rating2
          rating3
          gradientStart
          gradientEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      admins
      group
      colors {
        id
        group
        primary
        secondary
        rating1
        rating2
        rating3
        gradientStart
        gradientEnd
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          active
          companyId
          updatedAt
          company {
            id
            name
            admins
            group
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
        nextToken
      }
    }
  }
`;
export const getColors = /* GraphQL */ `
  query GetColors($id: ID!) {
    getColors(id: $id) {
      id
      group
      primary
      secondary
      rating1
      rating2
      rating3
      gradientStart
      gradientEnd
      createdAt
      updatedAt
    }
  }
`;
export const listColorss = /* GraphQL */ `
  query ListColorss(
    $filter: ModelColorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColorss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        group
        primary
        secondary
        rating1
        rating2
        rating3
        gradientStart
        gradientEnd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmail = /* GraphQL */ `
  query GetEmail($id: ID!) {
    getEmail(id: $id) {
      id
      createdAt
      group
      message
      userId
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
export const listEmails = /* GraphQL */ `
  query ListEmails(
    $filter: ModelEmailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        group
        message
        userId
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      nextToken
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
        active
        companyId
        updatedAt
        company {
          id
          name
          admins
          group
          colors {
            id
            group
            primary
            secondary
            rating1
            rating2
            rating3
            gradientStart
            gradientEnd
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
            nextToken
          }
        }
        membersLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
      active
      companyId
      updatedAt
      company {
        id
        name
        admins
        group
        colors {
          id
          group
          primary
          secondary
          rating1
          rating2
          rating3
          gradientStart
          gradientEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
            active
            companyId
            updatedAt
            company {
              id
              name
              admins
              group
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
          nextToken
        }
      }
      membersLink {
        items {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
  }
`;
export const getTeamMemberLink = /* GraphQL */ `
  query GetTeamMemberLink($id: ID!) {
    getTeamMemberLink(id: $id) {
      id
      userId
      teamId
      group
      active
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
          colors {
            id
            group
            primary
            secondary
            rating1
            rating2
            rating3
            gradientStart
            gradientEnd
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
            nextToken
          }
        }
        membersLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
export const listTeamMemberLinks = /* GraphQL */ `
  query ListTeamMemberLinks(
    $filter: ModelTeamMemberLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamMemberLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        teamId
        group
        active
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const teamMemberLinkByUser = /* GraphQL */ `
  query TeamMemberLinkByUser(
    $userId: ID
    $teamId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTeamMemberLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TeamMemberLinkByUser(
      userId: $userId
      teamId: $teamId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        teamId
        group
        active
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const teamMemberLinkByTeam = /* GraphQL */ `
  query TeamMemberLinkByTeam(
    $teamId: ID
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTeamMemberLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TeamMemberLinkByTeam(
      teamId: $teamId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        teamId
        group
        active
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      nextToken
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
      activeTeamID
      group
      updatedAt
      activeTeam {
        id
        userId
        teamId
        group
        active
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      teamsLink {
        items {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                ratings {
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
        }
        nextToken
      }
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                ratings {
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
          group
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
          teamId
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
          teamId
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
  }
`;
export const getEvaluation = /* GraphQL */ `
  query GetEvaluation($id: ID!) {
    getEvaluation(id: $id) {
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
      author {
        id
        createdAt
        name
        email
        jobTitle
        avatar {
          bucket
          region
          key
        }
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            user {
              id
              createdAt
              name
              email
              jobTitle
              avatar {
                bucket
                region
                key
              }
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
        user {
          id
          createdAt
          name
          email
          jobTitle
          avatar {
            bucket
            region
            key
          }
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          user {
            id
            createdAt
            name
            email
            jobTitle
            avatar {
              bucket
              region
              key
            }
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
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
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                ratings {
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
`;
export const getAverageUserRating = /* GraphQL */ `
  query GetAverageUserRating($id: ID!) {
    getAverageUserRating(id: $id) {
      id
      userId
      skillId
      grade
      timesRated
      group
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
        skillId
        grade
        timesRated
        group
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
  }
`;
export const averageRatingsByUser = /* GraphQL */ `
  query AverageRatingsByUser(
    $userId: ID
    $skillId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelaverageUserRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    averageRatingsByUser(
      userId: $userId
      skillId: $skillId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        skillId
        grade
        timesRated
        group
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
  }
`;
export const getAverageTeamRating = /* GraphQL */ `
  query GetAverageTeamRating($id: ID!) {
    getAverageTeamRating(id: $id) {
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
          colors {
            id
            group
            primary
            secondary
            rating1
            rating2
            rating3
            gradientStart
            gradientEnd
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              active
              companyId
              updatedAt
              company {
                id
                name
                admins
                group
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
            nextToken
          }
        }
        membersLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
        skillId
        grade
        timesRated
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
`;
export const averageRatingsByTeam = /* GraphQL */ `
  query AverageRatingsByTeam(
    $teamId: ID
    $skillId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelaverageTeamRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    averageRatingsByTeam(
      teamId: $teamId
      skillId: $skillId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            colors {
              id
              group
              primary
              secondary
              rating1
              rating2
              rating3
              gradientStart
              gradientEnd
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
              nextToken
            }
          }
          membersLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
export const getEvaluationRequest = /* GraphQL */ `
  query GetEvaluationRequest($id: ID!) {
    getEvaluationRequest(id: $id) {
      id
      createdAt
      evaluatorId
      userId
      teamId
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
        activeTeamID
        group
        updatedAt
        activeTeam {
          id
          userId
          teamId
          group
          active
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
              colors {
                id
                group
                primary
                secondary
                rating1
                rating2
                rating3
                gradientStart
                gradientEnd
                createdAt
                updatedAt
              }
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
                active
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
                  activeTeamID
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
            activeTeamID
            group
            updatedAt
            activeTeam {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            teamsLink {
              items {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                  activeTeamID
                  group
                  updatedAt
                }
                author {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                group
                createdAt
                updatedAt
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
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
                teamId
                status
                group
                updatedAt
                evaluator {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
                user {
                  id
                  createdAt
                  name
                  email
                  jobTitle
                  activeTeamID
                  group
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        teamsLink {
          items {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            group
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
            teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
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
        userId
        teamId
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
          activeTeamID
          group
          updatedAt
          activeTeam {
            id
            userId
            teamId
            group
            active
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
                colors {
                  id
                  group
                  primary
                  secondary
                  rating1
                  rating2
                  rating3
                  gradientStart
                  gradientEnd
                  createdAt
                  updatedAt
                }
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
                  active
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
              activeTeamID
              group
              updatedAt
              activeTeam {
                id
                userId
                teamId
                group
                active
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
                  activeTeamID
                  group
                  updatedAt
                }
              }
              teamsLink {
                items {
                  id
                  userId
                  teamId
                  group
                  active
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
                  teamId
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
                  teamId
                  status
                  group
                  updatedAt
                }
                nextToken
              }
            }
          }
          teamsLink {
            items {
              id
              userId
              teamId
              group
              active
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            }
            nextToken
          }
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              author {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              group
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
          receivedRequests {
            items {
              id
              createdAt
              evaluatorId
              userId
              teamId
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
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
              user {
                id
                createdAt
                name
                email
                jobTitle
                avatar {
                  bucket
                  region
                  key
                }
                activeTeamID
                group
                updatedAt
                activeTeam {
                  id
                  userId
                  teamId
                  group
                  active
                  createdAt
                  updatedAt
                }
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
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
