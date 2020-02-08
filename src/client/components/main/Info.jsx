import React from 'react';

import { Container, Typography, Button } from '@material-ui/core';

const style = {
  minHeight: '777px',
  backgroundColor: 'yellowgreen',
};
const samImgStyle = {
  backgroundImage: `url(http://mblogthumb3.phinf.naver.net/MjAxNjExMDJfMTI2/MDAxNDc4MDc5MjQzNzcx.Y09oDp2VxEcv8fISKqR_VkldXKfVa4oe5ObCPZqBIfkg.sikPg9WBHcV2RNNLYMuJ8gVyu2OfCw2lEL5FavXIsmYg.PNG.yheegee/%EC%9D%B4%EB%AF%B8%EC%A7%80_001.png?type=w800)`,
  width: '1280px',
  height: '420px',
  backgroundSize: 'cover',
};

function InfoComponent() {
  return (
    <div style={style}>
      <Container>
        <Typography variant="h3">
          <p>Recent가 비즈니스 성장을</p>
          <p>지원하는 방법에 대해 알아보십시오.</p>
        </Typography>
        <Button variant="contained" color="primary">
          무료 체험
        </Button>
        <div style={samImgStyle} />
      </Container>
    </div>
  );
}

export default InfoComponent;
