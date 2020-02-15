import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class PostsDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/post');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <>
          <span>
            {location.state.title}
            <br />
            {location.state.content}
          </span>
          <div>
            <Button
              component={Link}
              to="/post"
              variant="contained"
              color="primary"
            >
              목록
            </Button>
            <Button
              component={Link}
              to="/post"
              variant="contained"
              color="secondary"
            >
              삭제
            </Button>
            <Button
              component={Link}
              to="/post"
              variant="outlined"
              color="secondary"
            >
              수정
            </Button>
          </div>
        </>
      );
    }
    return null;
  }
}

export default PostsDetail;
