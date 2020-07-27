// exports.handler = (event) => {
//   //eslint-disable-line
//   console.log(JSON.stringify(event, null, 2));
//   event.Records.forEach((record) => {
//     console.log(record.eventID);
//     console.log(record.eventName);
//     console.log('DynamoDB Record: %j', record.dynamodb);
//   });
//   return Promise.resolve('Successfully processed DynamoDB record!');
// };

// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// TODO:
// https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
//
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html
const aws = require('aws-sdk');

const ses = new aws.SES({ region: 'us-west-2' });

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();

/**
 * Sign up user
 * TODO: adminConfirmSignup | confirmSignUp
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#signUp-property
 *  */

async function signUp(record) {
  const signUpParams = {
    ClientId: record.id /* required STRING_VALUE */,
    Password: record.email /* required STRING_VALUE */,
    Username: record.email /* required STRING_VALUE  */,
    AnalyticsMetadata: {
      AnalyticsEndpointId: 'STRING_VALUE',
    },
    ClientMetadata: {
      // '<StringType>': 'STRING_VALUE',
      /* '<StringType>': ... */
    },
    // SecretHash: 'STRING_VALUE',
    UserAttributes: [
      {
        Name: record.name /* required STRING_VALUE */,
        // Value: 'STRING_VALUE',
      },
      /* more items */
    ],
    UserContextData: {
      // EncodedData: 'STRING_VALUE',
    },
    ValidationData: [
      {
        Name: record.name /* required */,
        // Value: 'STRING_VALUE',
      },
      /* more items */
    ],
  };
  return cognitoidentityserviceprovider.signUp(signUpParams, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
}

/**
 * Send a invite email to a user
 */
function sendEmail(record, event, context, callback) {
  // Send email
  const sendEmailParams = {
    Destination: {
      ToAddresses: [record.email],
    },
    Message: {
      Body: {
        Text: {
          Data: `Hey ${record.name}, you have been invited to the referencebuilder download the app in de appstore and click on this link`,
        },
      },

      Subject: { Data: 'ReferenceBuilder invite' },
    },
    Source: 'thomas@guntenaar.org',
  };

  ses.sendEmail(sendEmailParams, function (err, data) {
    callback(null, { err, data });
    if (err) {
      //eslint-disable-line
      console.log(err);
      context.fail(err);
    } else {
      //eslint-disable-line
      console.log(data);
      context.succeed(event);
    }
  });
}

/**
 * Send a password email
 */
function sendPassword() {}

exports.handler = async (event, context, callback) => {
  try {
    // trim down to just "INSERT" events
    const insertRecords = event.Records.filter((record) => record.eventName === 'INSERT');

    // Unmarshall records them to plain JSON objects
    const unmarshalledRecords = insertRecords.map((record) =>
      aws.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    );

    // eslint-disable-next-line no-restricted-syntax
    for (const record of unmarshalledRecords) {
      console.log('Unmarshalled record!');
      console.log(JSON.stringify(record));
      // record.__typename
      // record.jobTitle
      // record.name
      // record.email
      signUp(record)
        .then(function () {
          console.log('signed up now sending email');
          sendEmail(record, event, context, callback);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }

  return Promise.resolve('Successfully processed DynamoDB record!');
};
