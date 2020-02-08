const express = require('express');

const router = express.Router();

const controller = require('./postsController');

router.get('/', controller.getPosts);

router.get('/:id', controller.getPost);

module.exports = router;
