const mysql = require('mysql');
const { dbConfig } = require('./devEnv');

const con = mysql.createConnection(dbConfig);

con.connect(err => {
  if (err) {
    console.log('에러가 발생했습니다.');
    console.log(err);
    return;
  }
  console.log('연결되었습니다.');
});

con.query('SELECT * FROM user', (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);
  for (let i = 0; i < rows.length; i += 1) {
    const user = rows[i];
    console.log(user.no, user.Id, user.pw);
  }
});
con.end();
