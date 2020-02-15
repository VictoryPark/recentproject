import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, addPost } from '../../api/boardApi';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: [],
      title: '',
      content: '',
    };
  }

  stateRefresh = () => {
    this.setState({
      isLoading: true,
      posts: [],
      title: '',
      content: '',
    });
    this.getPosts();
  };

  getPosts = async () => {
    const { data } = await getPosts();
    this.setState({ posts: data, isLoading: false });
  };

  changeValue = e => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  submitPost = e => {
    e.preventDefault();

    const { title, content } = this.state;
    const post = {
      title,
      content,
    };

    addPost(post).then(response => {
      const { history } = this.props;

      history.push({
        pathname: `/post/${response.data.insertId}`,
        state: post,
      });
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts, title, content } = this.state;
    return (
      <>
        {isLoading ? (
          'loading'
        ) : (
          <div>
            {posts.map(post => (
              <div key={post.post_id}>
                <Link
                  to={{
                    pathname: `/post/${post.post_id}`,
                    state: {
                      title: post.title,
                      content: post.content,
                    },
                  }}
                >
                  {post.title}
                </Link>
              </div>
            ))}
            <p>
              제목:{' '}
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.changeValue}
              />
            </p>
            <p>
              내용:{' '}
              <input
                type="text"
                name="content"
                value={content}
                onChange={this.changeValue}
              />
            </p>
            <button type="button" onClick={this.submitPost}>
              등록
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Posts;
