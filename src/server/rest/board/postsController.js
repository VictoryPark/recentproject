const postsService = require('./postsService').posts;

const getPosts = (req, res) => {
  postsService.selectPosts(req, result => {
    res.json(result);
  });
};

const getPost = (req, res) => {
  postsService.selectPost(req, result => {
    res.json(result);
  });
};

module.exports = { getPosts, getPost };
