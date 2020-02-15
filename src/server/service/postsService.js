const mysql = require('mysql');
const { dbConfig } = require('../env/devEnv');

const connection = mysql.createConnection(dbConfig);
connection.connect();

const posts = {
  selectPosts: (req, result) => {
    connection.query(
      'SELECT * FROM posts WHERE type = "POST" ORDER BY post_id DESC limit 10',
      (err, rows) => {
        result(rows);
      },
    );
  },

  selectPost: (req, result) => {
    connection.query(
      'SELECT * FROM posts WHERE type = "POST" AND post_id = ?',
      [req.params.id],
      (err, rows) => {
        result(rows);
      },
    );
  },

  insertPost: (req, result) => {
    connection.query(
      'INSERT INTO posts VALUES (null, "POST", ?, ?, "Y", now(), "", now(), "", "", null)',
      [req.body.title, req.body.content],
      (err, rows) => {
        result(rows);
      },
    );
  },
};

module.exports = posts;
