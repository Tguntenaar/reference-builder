const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // console.log(JSON.stringify(event, null, 2));
  // const id =
  //   Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const writeParams = {
    TableName: 'User-5ewtrl3mujdszlbmiha3wrdk5i-dev',
    Item: {
      id: {
        S: '1011',
      },
      name: {
        S: 'Liza Miller',
      },
      jobTitle: {
        S: 'Europees parlement vertegenwoordiger',
      },
      email: {
        S: 'lizamiller@eu.com',
      },
    },
  };
  // batchWriteItem
  console.log('put item');
  const result = await documentClient.put(writeParams).promise();
  // dynamodb.putItem(writeParams, function (err, data) {
  //   if (err) console.log(err, err.stack);
  //   // an error occurred
  //   else console.log(data); // successful response
  // });
  console.log('put item');
  console.log(result);

  return Promise.resolve('Successfully processed DynamoDB record Thomas');
  // try {
  // //trim down to just "INSERT" events
  // const insertRecords = event.Records.filter(record => record.eventName === 'INSERT');

  // // Unmarshall records them to plain JSON objects
  // const unmarshalledRecords = insertRecords.map(record =>
  //   AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
  // );

  // for (let record of unmarshalledRecords) {
  //   // this could be changed to any time window (a month, a year) and, in theory, the below algorithm would still work
  //   const MS_IN_DAY = 1000 * 60 * 60 * 24;
  //   const recordEndTime = new Date(record.TransferTime);
  //   const aggregatedDay = recordEndTime.getTime() - recordEndTime.getTime() % MS_IN_DAY;
  //   const params = {
  //       TableName: 'User-5ewtrl3mujdszlbmiha3wrdk5i-dev',
  //       Key: {
  //         CustomerId: record.CustomerId,
  //         Day: new Date(aggregatedDay).toISOString(),
  //       },
  //       UpdateExpression: 'ADD #TotalBytes :Bytes, #CombinedRecords :CombinedRecords',
  //       ExpressionAttributeNames: {
  //         '#TotalBytes': 'TotalBytes',
  //         '#CombinedRecords': 'CombinedRecords',
  //       },
  //       ExpressionAttributeValues: {
  //         ':Bytes': record.Bytes,
  //         ':CombinedRecords': 1
  //       },
  //   };
  //   try {
  //     // Write updates to daily rollup table
  //     await documentClient.update(params).promise();
  //   } catch (err) {
  //     // Swallow any errors
  //     console.error(
  //       `Internal Error: Error updating dynamoDB record with keys [${JSON.stringify(
  //           params.Key
  //       )}] and Attributes [${JSON.stringify(params.ExpressionAttributeValues)}]`
  //     );
  //     console.error(err);
  //   }
  // }
  // callback(null, `Successfully processed ${event.Records.length} records.`);
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
