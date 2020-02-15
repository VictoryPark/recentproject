const express = require('express');

const router = express.Router();
const controller = require('../rest/postsController');

router.get('/', controller.getPosts);

router.get('/:id', controller.getPost);

router.post('/', controller.addPost);

module.exports = router;
