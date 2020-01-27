const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/bundle.js')));
app.get('/api/getusername', (req, res) =>
  res.send({ username: os.userInfo().username }),
);
app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(`${__dirname}/./../../dist/index.html`));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`),
);
