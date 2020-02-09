const router = require('./router');
const controller = require('../rest/postsController');

router.get('/', controller.getPosts);

router.get('/:id', controller.getPost);

module.exports = router;
