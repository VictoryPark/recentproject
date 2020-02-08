import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const style = {
  minHeight: '411px',
  backgroundColor: 'orange',
};

const samImgStyle = {
  backgroundImage: `url(http://image.ohmynews.com/down/images/box/234831_1[1].jpg)`,
  width: '1280px',
  height: '55px',
  backgroundSize: 'contain',
};

const textCenterStyle = {
  textAlign: 'center',
};

function CustomerComponent() {
  return (
    <div style={style}>
      <Container>
        <Typography variant="h3">
          <p>150,000개 이상의 대기업과 중소기업이</p>
          <p>Recent로 비즈니스를 성장시키고 있습니다.</p>
        </Typography>
        <div style={samImgStyle} />
        <Grid>
          <p style={textCenterStyle}>
            <NavLink to="/customer-success-stories">
              RECENT의 고객보기 &gt;
            </NavLink>
          </p>
        </Grid>
      </Container>
    </div>
  );
}

export default CustomerComponent;
