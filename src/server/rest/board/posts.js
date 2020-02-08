const router = require('../../routes/router');
const controller = require('./postsController');

router.get('/', controller.getPosts);

router.get('/:id', controller.getPost);

module.exports = router;
