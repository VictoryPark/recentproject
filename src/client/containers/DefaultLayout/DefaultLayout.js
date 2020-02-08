import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';

class DefaultLayout extends Component {
  render() {
    return (
      <div id="wrap">
        <DefaultHeader />
        Body
        <DefaultFooter />
      </div>
    );
  }
}

export default DefaultLayout;
