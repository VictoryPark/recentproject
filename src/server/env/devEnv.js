const path = `${__dirname}/./../../../.env.dev`;
require('dotenv').config({ path });

const dbConfig = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
};

const s3Config = {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
  params: { Bucket: process.env.S3_BUCKET },
};

module.exports = { dbConfig, s3Config };
