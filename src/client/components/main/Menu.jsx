import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MenuList from './MenuList';
import PAGES from '../../constants/menuList';

const style = {
  minHeight: '800px',
  backgroundColor: 'yellow',
};

function MenuComponent() {
  return (
    <div style={style}>
      <Container>
        <Grid>
          {PAGES.menu.menuList.map(mn => {
            return <MenuList menu={mn} key={mn.title} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default MenuComponent;
