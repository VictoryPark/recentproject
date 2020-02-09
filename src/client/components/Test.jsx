import React, { Component } from 'react';
// import axios from 'axios';
import '../app.css';
import ReactImage from '../react.png';
import { getTest } from '../api/productApi';

export default class Test extends Component {
  constructor() {
    super();
    this.state = { username: '' };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    const { data } = await getTest();
    this.setState({ username: data.username });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
