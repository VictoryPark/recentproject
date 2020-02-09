import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Container, Button } from '@material-ui/core';
import {
  Search as SearchIcon,
  Language as LanguageIcon,
} from '@material-ui/icons';
import Logo from '../../../assets/icon/logo.svg';
import PAGES from '../../../constants/menuList';

const Header = () => {
  return (
    <>
      <div>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Logo width="80" height="60" />
            </Grid>
            <Grid item xs={5}>
              {PAGES.menu.menuList.map(m => {
                return (
                  <NavLink key={m.href} to={m.href}>
                    {m.title}
                  </NavLink>
                );
              })}
            </Grid>
            <Grid item xs={5}>
              <div>
                <SearchIcon />
                02-8282-4545 (솔루션 문의) 12345-1-23456 (기술지원)
                <NavLink to="/inquiry">문의</NavLink>
                <LanguageIcon />|<NavLink to="/login">login</NavLink>
              </div>
              <div>
                <Button variant="contained">무료 체험판</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Header;
