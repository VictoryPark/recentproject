import React from 'react';
import Jumbo from './Jumbo';
import Info from './Info';
import Customer from './Customer';
import Menu from './Menu';

const Main = ({ history }) => {
  console.log(history);
  return (
    <>
      <Jumbo />
      <Menu />
      <Customer />
      <Info />
    </>
  );
};

export default Main;
