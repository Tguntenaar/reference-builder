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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
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
          id
          evaluationId
          skillId
          grade
          createdAt
          updatedAt
        }
        updatedAt
      }
      status
      updatedAt
    }
  }
`;
