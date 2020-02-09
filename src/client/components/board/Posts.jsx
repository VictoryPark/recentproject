import React, { Component } from 'react';
// import axios from 'axios';
import { getPosts } from '../../api/boardApi';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: [],
    };
  }

  getPosts = async () => {
    const { data } = await getPosts();
    this.setState({ posts: data, isLoading: false });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <>
        {isLoading ? (
          'loading'
        ) : (
          <div>
            {posts.map(post => (
              <div>{post.post_content}</div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Posts;
