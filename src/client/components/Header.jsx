import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => (
  <Grid>
    <ul>
      <li>
        <Link to="/main">Main</Link>
      </li>
      <li>
        <Link to="/board">Board</Link>
      </li>
      <li>
        <Link to="/details">Details</Link>
      </li>
      <li>
        <Link to="/test">Test</Link>
      </li>
    </ul>
  </Grid>
);

export default Header;
