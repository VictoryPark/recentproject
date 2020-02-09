const os = require('os');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ username: os.userInfo().username, login: true });
});

module.exports = router;
