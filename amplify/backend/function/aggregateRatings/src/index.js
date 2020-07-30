/* eslint-disable no-restricted-syntax */
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

async function getTeamAverage(teamId) {
  const params = {
    Key: {
      id: teamId,
    },
    TableName: 'Team-5ewtrl3mujdszlbmiha3wrdk5i-dev',
  };

  return documentClient.get(params).promise();
}

async function getUserAverage(userId) {
  const params = {
    Key: {
      id: userId,
    },
    TableName: 'User-5ewtrl3mujdszlbmiha3wrdk5i-dev',
  };

  return documentClient.get(params).promise();
}

async function updateTeamTable(record) {
  const params = {
    TableName: 'averageTeamRating-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    Key: {
      id: record.id,
    },
    UpdateExpression: 'ADD #TotalRating :Rating, #NumberOfRatings :NumberOfRatings',
    ExpressionAttributeNames: {
      '#TotalRating': 'ToTotalRatingtal',
      '#NumberOfRatings': 'NumberOfRatings',
    },
    ExpressionAttributeValues: {
      ':Rating': record.Bytes,
      ':CombinedRecords': 1,
    },
  };
  try {
    // Write updates to daily rollup table
    await documentClient.update(params).promise();
  } catch (err) {
    // Swallow any errors
    console.error(
      `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
        params.Key
      )}] and Attributes [${JSON.stringify(params.ExpressionAttributeValues)}]`
    );
    console.error(err);
  }
}

async function updateUserTable(record) {
  const params = {
    TableName: 'averageUserRating-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    Key: {
      userId: record.userId,
      Day: new Date(record.TransferTime).toISOString(),
    },
    UpdateExpression: 'ADD #TotalBytes :Bytes, #CombinedRecords :CombinedRecords',
    ExpressionAttributeNames: {
      '#TotalBytes': 'TotalBytes',
      '#CombinedRecords': 'CombinedRecords',
    },
    ExpressionAttributeValues: {
      ':Bytes': record.Bytes,
      ':CombinedRecords': 1,
    },
  };
  try {
    // Write updates to daily rollup table
    await documentClient.update(params).promise();
  } catch (err) {
    // Swallow any errors
    console.error(
      `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
        params.Key
      )}] and Attributes [${JSON.stringify(params.ExpressionAttributeValues)}]`
    );
    console.error(err);
  }
}

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));

  const date = new Date().toString();
  const writeParams = {
    TableName: 'averageTeamRating-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    Key: {
      id: 'e71256b7-03f9-4c90-9ead-305855fb354d', // teamtable
      // userId: "b403da70-bea8-4e54-9cff-6a68e9d07f4d", //record.userId,
    },
    UpdateExpression: 'ADD #timesRated :timesRated, #grade :grade',
    ExpressionAttributeNames: {
      '#timesRated': 'timesRated',
      '#grade': 'grade',
    },
    ExpressionAttributeValues: {
      ':timesRated': 1,
      ':grade': 80, // record.grade,
    },
    ReturnValues: 'ALL_NEW',
  };

  const result = await documentClient.update(writeParams).promise();
  console.log(JSON.stringify(result, null, 2));
  return Promise.resolve('Successfully processed DynamoDB record Thomas');
  // try {
  //   // trim down to just "INSERT" events
  //   const insertRecords = event.Records.filter((record) => record.eventName === 'INSERT');

  //   // Unmarshall records them to plain JSON objects
  //   const unmarshalledRecords = insertRecords.map((record) =>
  //     AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
  //   );
  //   getUserAverage()
  //   getTeamAverage()
  //   // For every rating record
  //   for (const record of unmarshalledRecords) {
  //     updateUserTable()
  //     updateTeamTable()
  //   }
  //   // callback(null, `Successfully processed ${event.Records.length} records.`);
  // } catch (err) {
  //   console.error(`Error processing records. Event was [${JSON.stringify(event)}`);
  //   console.error(err);
  //   // Note we don't actually fail the lambda function here by calling back with the error e.g. callback(err)
  //   callback(null, `Swallowed the error ${JSON.stringify(err)}`);
  // }

  // event.Records.forEach((record) => {
  //   console.log('record event id:',record.eventID);
  //   console.log('record event name:',record.eventName);
  //   console.log('DynamoDB Record: %j', record.dynamod b);
  // });

  // return Promise.resolve('Successfully processed DynamoDB record Thomas');
};
