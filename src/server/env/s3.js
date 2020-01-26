const AWS = require('aws-sdk');
const { s3Config } = require('./devEnv');

const s3 = new AWS.S3(s3Config);

s3.listObjects(
  { Delimiter: '/' /*  Prefix: "test222/" */ },
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
  },
);
