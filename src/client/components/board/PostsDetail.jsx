import React from 'react';

class PostsDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <span>
          {location.state.title}
          {location.state.content}
        </span>
      );
    }
    return null;
  }
}

export default PostsDetail;
