/* eslint-disable no-await-in-loop */
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

/**
 * 1. create a user
 * 2. place user in group
 * 3. send a email to this user
 *
 *
 *
 * TODO:
 * Second possibility 3 loops (map + promise.all)
 * For every record createUser
 *
 * For every record add them to the group
 *
 *
 * For every record send an email
 */

// Admin create user
// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property
// Send Email
// https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
//
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

async function sendEmail(record) {
  // Send email
  // https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
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

  const result = ses.sendEmail(sendEmailParams).promise();
  /**
   * SECOND Argument
  function (err, data) {
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
  }
  */
  return result;
}

async function adminCreateUser(record) {
  console.log('record - Admin create user');
  console.log(record);
  const createUserParams = {
    UserPoolId: 'us-west-2_NOUaoo6CH' /* required */,
    Username: record.email /* record.email required */,
    ClientMetadata: {
      // '<StringType>': 'STRING_VALUE',
      /* '<StringType>': ... */
    },
    DesiredDeliveryMediums: [
      'EMAIL',
      // SMS | EMAIL,
      /* more items */
    ],
    ForceAliasCreation: true, // || false,
    MessageAction: 'SUPPRESS', // RESEND | SUPPRESS, RESEND is only possible if the user still has his temporary password
    // MessageAction: 'SUPPRESS', // If MessageAction is not set, the default is to send a welcome message via email or phone (SMS).
    // TemporaryPassword: 'STRING_VALUE', auto generates
    UserAttributes: [
      {
        Name: 'sub',
        Value: record.id,
      },
      {
        Name: 'email' /* required */,
        Value: record.email, // record.email,
      },
      {
        Name: 'email_verified',
        Value: 'False',
      },
      /* more items */
    ],
    ValidationData: [],
  };
  // const result = await cognitoidentityserviceprovider.adminCreateUser(createUserParams).promise();
  // return result;
  return new Promise((res, rej) => {
    cognitoidentityserviceprovider.adminCreateUser(createUserParams, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        rej(err);
        // an error occurred
      } else {
        console.log('admin create user callback');
        console.log(data);
        console.log(JSON.stringify(data));
        res(data);
      } // successful response
    });
  });
}

async function adminAddUserToGroup(record) {
  const groupName = record.group;
  const addToGroupParams = {
    GroupName: 'jaaf', // 'STRING_VALUE', /* required */
    UserPoolId: 'us-west-2_NOUaoo6CH', // 'STRING_VALUE', /* required */
    Username: 'thomasguntenaar@gmail.com', // 'STRING_VALUE' /* required */
  };

  const result = await cognitoidentityserviceprovider
    .adminAddUserToGroup(addToGroupParams)
    .promise();

  return result;
}

exports.handler = async (event, context, callback) => {
  try {
    // trim down to just "INSERT" events
    const insertRecords = event.Records.filter((record) => record.eventName === 'INSERT');

    // Unmarshall records them to plain JSON objects
    const unmarshalledRecords = insertRecords.map((record) =>
      aws.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    );
    unmarshalledRecords.forEach(console.log);
    const createdUserPromises = unmarshalledRecords.map(adminCreateUser);

    const resultArray = await Promise.all(createdUserPromises);
    console.log('resultArray');
    console.log(resultArray);
    const addToGroupPromises = unmarshalledRecords.map(adminAddUserToGroup);
    const resultArray2 = await Promise.all(addToGroupPromises);
    console.log('resultArray2');
    console.log(resultArray2);

    const gotAMail = unmarshalledRecords.map(sendEmail);
    const resultArray3 = await Promise.all(gotAMail);
    console.log('resultArray3');
    console.log(resultArray3);
    return 'success';
    // eslint-disable-next-line no-restricted-syntax
    // for (const record of unmarshalledRecords) {
    //   console.log('Unmarshalled record!');
    //   console.log(JSON.stringify(record));
    //   //
    //   const result = await adminCreateUser(record, event, context, callback);
    //   // if user already existed
    //   // send mail about it
    //   // else
    //   // add user to group
    //   // send email instructions to download app
    //   console.log('result', result);
    //   console.log('test');
    //   const [r1, r2] = await Promise.all([
    //     adminAddUserToGroup(record, event, context, callback),
    //     sendEmail(record, event, context, callback),
    //   ]);
    //   console.log(r1);
    //   console.log(r2);
    // }
  } catch (error) {
    console.log(error);
  }
};
