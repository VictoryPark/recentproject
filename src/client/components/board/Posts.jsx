import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
  state = {
    isLoading: true,
    posts: [],
  };

  getPosts = async () => {
    const { data } = await axios.get('/api/posts');
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
          'loding'
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
