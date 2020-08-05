/* Amplify Params - DO NOT EDIT
	API_REFERENCEBUILDER_GRAPHQLAPIENDPOINTOUTPUT
	API_REFERENCEBUILDER_GRAPHQLAPIIDOUTPUT
  API_REFERENCEBUILDER_GRAPHQLAPIKEYOUTPUT

	ENV
	REGION
Amplify Params - DO NOT EDIT */ /* eslint-disable no-restricted-syntax */
const AWS = require('aws-sdk');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');

const documentClient = new AWS.DynamoDB.DocumentClient();

const { print } = graphql;

const listTodos = gql`
  query listTodos {
    listUsers {
      items {
        id
        name
      }
    }
  }
`;

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));
  /**
   * User-5ewtrl3mujdszlbmiha3wrdk5i-dev
   * averageUserRating-5ewtrl3mujdszlbmiha3wrdk5i-dev
   * Team-5ewtrl3mujdszlbmiha3wrdk5i-dev
   * averageTeamRating-5ewtrl3mujdszlbmiha3wrdk5i-dev
   */

  try {
    const graphqlData = await axios({
      url: process.env.API_URL,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_REFERENCEBUILDER_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(listTodos),
      },
    });
    const body = {
      graphqlData: graphqlData.data.data.listTodos,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (err) {
    console.log('error posting to appsync: ', err);
  }

  // console.log(JSON.stringify(result, null, 2));
  return Promise.resolve('Successfully processed DynamoDB record Thomas');
};

// const result = await documentClient.update(writeParams).promise();
// const writeParams = {
//   TableName: '',
//   Key: {
//     id: 'e71256b7-03f9-4c90-9ead-305855fb354d', // teamtable
//     // userId: "b403da70-bea8-4e54-9cff-6a68e9d07f4d", //record.userId,
//   },
//   UpdateExpression: 'ADD #timesRated :timesRated, #grade :grade',
//   ExpressionAttributeNames: {
//     '#timesRated': 'timesRated',
//     '#grade': 'grade',
//   },
//   ExpressionAttributeValues: {
//     ':timesRated': 1,
//     ':grade': 80, // record.grade,
//   },
//   ReturnValues: 'ALL_NEW',
// };
