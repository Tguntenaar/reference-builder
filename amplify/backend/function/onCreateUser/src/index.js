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
// Admin create user
// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property
// https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html
const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: 'AKIA3I3KBEQ443REAAN7',
  secretAccessKey: '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',
});
const ses = new aws.SES({ region: 'us-west-2' });

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

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
 *
 * @param {*} event
 * @param {*} context
 * @param {*} callback
 */
exports.handler = (event, context, callback) => {
  // try {
  // trim down to just "INSERT" events
  // const insertRecords = event.Records.filter((record) => record.eventName === 'INSERT');

  // // Unmarshall records them to plain JSON objects
  // const unmarshalledRecords = insertRecords.map((record) =>
  //   aws.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
  // );

  // // eslint-disable-next-line no-restricted-syntax
  // for (const record of unmarshalledRecords) {
  //   console.log('Unmarshalled record!');
  //   console.log(JSON.stringify(record));

  const params = {
    UserPoolId: 'us-west-2_NOUaoo6CH' /* required */,
    Username: 'thomasguntenaar@gmail.com' /* record.email required */,
    ClientMetadata: {
      // '<StringType>': 'STRING_VALUE',
      /* '<StringType>': ... */
    },
    DesiredDeliveryMediums: [
      'EMAIL',
      // SMS | EMAIL,
      /* more items */
    ],
    ForceAliasCreation: 'true', // || false,
    MessageAction: 'RESEND', // RESEND | SUPPRESS,
    // TemporaryPassword: 'STRING_VALUE', auto generates
    UserAttributes: [
      {
        Name: 'email' /* required */,
        Value: 'thomasguntenaar@gmail.com', // record.email,
      },
      {
        Name: 'email_verified',
        Value: 'True',
      },
      /* more items */
    ],
    ValidationData: [
      // {
      //   Name: record.name /* required */,
      //   // Value: 'STRING_VALUE',
      // },
      /* more items */
    ],
  };
  console.log('admincreateuser action');
  // const result = cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
  //   if (err) {
  //     console.log(err, err.stack);
  //     // an error occurred
  //   } else {
  //     console.log('admin create user callback');
  //     console.log(data);
  //   } // successful response
  // });
  console.log('result');
  // console.log(result);
  console.log('admincreateuser voorbij');
  // signUp(record)
  // .then(function () {
  //   console.log('signed up now sending email');
  // sendEmail(record, event, context, callback);

  // .catch(function (err) {
  //   console.log(err);
  // });
  // }
  // } catch (error) {
  //   console.log(error);
  // }

  return new Promise((res, rej) => {
    cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        rej(err);
        // an error occurred
      } else {
        console.log('admin create user callback');
        console.log(data);
        // TODO: Send another email with download links email
        res(data);
      } // successful response
    });
  });
  // resolve('Successfully processed DynamoDB record!');
};
