// https://medium.com/@jan.hesters/how-to-access-the-user-in-lambda-functions-with-amplify-4f531dc6af51

const AWS = require('aws-sdk');

exports.handler = (event) => {
  // API_REFERENCEBUILDER_GRAPHQLAPIENDPOINTOUTPUT
  // API_REFERENCEBUILDER_GRAPHQLAPIIDOUTPUT
  // AUTH_TOPTABTESTC335DB9C_USERPOOLID
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
