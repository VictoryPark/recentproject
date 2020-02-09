import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import PAGES from '../../../constants/footerList';
import MenuTopSocialItem from './MenuTopSocialItem';
import MenuTopItem from './MenuTopItem';
import Logo from '../../../assets/icon/logo.svg';

const FooterMenuTop = () => {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography>
              <Logo width="80" height="60" />
            </Typography>
            <Typography>
              {PAGES.footerTop.social.map(page => {
                return (
                  <MenuTopSocialItem menu={page} key={page.title} />
                );
              })}
            </Typography>
          </Grid>

          {PAGES.footerTop.menuList.map((page, index) => {
            return (
              <Grid item xs={index !== 2 ? 3 : 2} key={page.title}>
                <Typography>
                  <h4>{page.title}</h4>
                  {page.menu.map(pg => {
                    return <MenuTopItem menu={pg} key={pg.title} />;
                  })}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default FooterMenuTop;
