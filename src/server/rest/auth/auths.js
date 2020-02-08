const os = require('os');
const router = require('../../routes/router');

router.get('/', (req, res) =>
  res.send({ username: os.userInfo().username }),
);
