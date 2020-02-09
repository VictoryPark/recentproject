import React, { Component } from 'react';
// import axios from 'axios';
import { goLogin } from '../../api/loginApi';

export default class Test extends Component {
  constructor() {
    super();
    this.state = { login: false };
  }

  componentDidMount() {
    this.login();
  }

  login = async () => {
    const { data } = await goLogin();
    this.setState({ login: data.login, username: data.username });
  };

  render() {
    const { login, username } = this.state;
    return (
      <div>
        {login ? (
          <h1>{`Please Login ${username}!!!!!!`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
