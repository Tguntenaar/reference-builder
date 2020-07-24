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

// TODO: :
// https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
//
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html
const aws = require('aws-sdk');

const ses = new aws.SES({ region: 'us-west-2' });

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();

exports.handler = async (event, context, callback) => {
  try {
    // trim down to just "INSERT" events
    const insertRecords = event.Records.filter((record) => record.eventName === 'INSERT');

    // Unmarshall records them to plain JSON objects
    const unmarshalledRecords = insertRecords.map((record) =>
      aws.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    );

    for (const record of unmarshalledRecords) {
      console.log('Unmarshalled record!');
      console.log(JSON.stringify(record));
      const { Id: id } = record;
      console.log(id);
      // record.__typename
      // record.jobTitle
      // record.name
      // record.email
    }
  } catch (error) {
    console.log(error);
  }

  signUp()
    .then(function () {
      sendEmail();
    })
    .catch(function () {
      console.log('');
    });

  return Promise.resolve('Successfully processed DynamoDB record!');
};

/**
 * Sign up user
 * TODO: adminConfirmSignup | confirmSignUp
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#signUp-property
 *  */

function signUp() {
  const signUpParams = {
    ClientId: 'STRING_VALUE' /* required */,
    Password: 'STRING_VALUE' /* required */,
    Username: 'STRING_VALUE' /* required */,
    AnalyticsMetadata: {
      AnalyticsEndpointId: 'STRING_VALUE',
    },
    ClientMetadata: {
      '<StringType>': 'STRING_VALUE',
      /* '<StringType>': ... */
    },
    SecretHash: 'STRING_VALUE',
    UserAttributes: [
      {
        Name: 'STRING_VALUE' /* required */,
        Value: 'STRING_VALUE',
      },
      /* more items */
    ],
    UserContextData: {
      EncodedData: 'STRING_VALUE',
    },
    ValidationData: [
      {
        Name: 'STRING_VALUE' /* required */,
        Value: 'STRING_VALUE',
      },
      /* more items */
    ],
  };
  cognitoidentityserviceprovider.signUp(signUpParams, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
}

/**
 * Send a invite email to a user
 */
function sendEmail() {
  // Send email
  const sendEmailParams = {
    Destination: {
      ToAddresses: ['thomasguntenaar@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data:
            'Hey, you have been invited to the referencebuilder download the app in de appstore and click on this link',
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
