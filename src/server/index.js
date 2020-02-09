const express = require('express');
const os = require('os');
// const path = require('path');
const app = express();

const posts = require('./routes/posts');
const auth = require('./routes/auths');

const API = '/api';
app.use(`${API}/posts`, posts);
app.use(`${API}/auths`, auth);

app.get(`${API}/getusername`, (req, res) =>
  res.send({ username: os.userInfo().username }),
);
// app.use(express.static(path.join(__dirname, 'public/bundle.js')));
// app.get('/', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(`${__dirname}/./../../dist/index.html`));
// });

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`),
);
