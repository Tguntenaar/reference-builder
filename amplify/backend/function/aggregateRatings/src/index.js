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

async function updateTeamTable(record, newAverage) {
  const params = {
    TableName: 'averageTeamRatings-5ewtrl3mujdszlbmiha3wrdk5i-dev',
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

async function getUserAverage(userId) {
  const params = {
    Key: {
      id: userId,
    },
    TableName: 'User-5ewtrl3mujdszlbmiha3wrdk5i-dev',
  };

  return documentClient.get(params).promise();
}

async function updateUserTable() {
  const params = {
    TableName: 'averageUserRatings-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    Key: {
      CustomerId: record.CustomerId,
      Day: new Date(aggregatedDay).toISOString(),
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
  const id =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const date = new Date(record.TransferTime).toString();
  const writeParams = {
    TableName: 'User-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    // Get item parameter
    // Key: {
    //   id: 'dbb0b1a7-ec21-49ee-aa83-bce55dd44da3',
    // },
    Item: {
      id: 'dbb0b1a7-ec21-49ee-aa83-bce55dd44da4',
      name: 'Liza Miller',
      jobTitle: 'Europa voorzitter',
      email: 'lizamiller@eu.com',
      createdAt: date,
      updatedAt: date,
      __typename: 'User',
    },
  };

  // // batchWriteItem
  // console.log('put item');
  const result = await documentClient.put(writeParams).promise();
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
