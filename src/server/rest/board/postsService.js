const mysql = require('mysql');
const { dbConfig } = require('../../env/devEnv');

const connection = mysql.createConnection(dbConfig);
connection.connect();

const posts = {
  selectPosts: (req, result) => {
    connection.query(
      'SELECT * FROM wp_posts WHERE post_type = "post"',
      (err, rows) => {
        result(rows);
      },
    );
  },

  selectPost: (req, result) => {
    connection.query(
      'SELECT * FROM wp_posts WHERE post_type = "post" AND ID = ?',
      [req.params.id],
      (err, rows) => {
        result(rows);
      },
    );
  },
};

module.exports = { posts };
