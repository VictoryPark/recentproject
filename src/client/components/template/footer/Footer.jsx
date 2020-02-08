import React from 'react';

import FooterMenuTop from './FooterMenuTop';
import FooterMenuBottom from './FooterMenuBottom';

const style = {
  // color: "#BABDAB",
  // backgroundColor: "#353535"
};

const Footer = () => {
  return (
    <>
      <div>
        <FooterMenuTop />
      </div>
      <div style={style}>
        <FooterMenuBottom />
      </div>
    </>
  );
};

export default Footer;
