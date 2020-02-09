import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import PAGES from '../../../constants/footerList';

const FooterMenuBottom = () => {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <LanguageButton />
          </Grid>
          <Grid item xs={10}>
            <div>
              <p>
                © Copyright 2020 recent.co.kr, inc.
                {PAGES.footerBottom.menu
                  .filter(
                    m => m.href === '/company/legal/intellectual',
                  )
                  .map(link => {
                    return (
                      <NavLink key={link.href} to={link.href}>
                        {link.title}
                      </NavLink>
                    );
                  })}
                여러 가지 상표에 대한 소유권은 각 소유자에게 있습니다.
              </p>
              <p>사업자 등록번호 : 120-86-92851 , 대표자 : 박아란</p>
              <p>
                리센트 코리아 서울특별시 중구 회현동 한강대로 416,
                (서울스퀘어, 13층) 04637
              </p>
              <p>
                recent.co.kr Korea 13th Floor, Seoulsquare Bldg, 416
                Hangang-daero, Jung-gu, Seoul, Republic of Korea
              </p>
            </div>
            <div>
              {PAGES.footerBottom.menu
                .filter(m => m.href !== '/company/legal/intellectual')
                .map(link => {
                  return (
                    <NavLink key={link.href} to={link.href}>
                      {link.title}
                    </NavLink>
                  );
                })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FooterMenuBottom;
