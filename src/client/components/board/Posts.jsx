import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <div key={post.ID}>
                <Link
                  to={{
                    pathname: `/post/${post.ID}`,
                    state: {
                      title: post.post_title,
                      content: post.post_content,
                    },
                  }}
                >
                  {post.post_title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Posts;
