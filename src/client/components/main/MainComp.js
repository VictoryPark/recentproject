import React from 'react';
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgournd from '../../assets/images/main/hero-bg.png';
import mainImg from '../../assets/images/main/korea_jumbotron.png';
import '../../assets/css/main.css';
import CardData from '../../data/CardData';

const useStyles = makeStyles(() => ({
  mainVisual: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '30px',
  },
  card: {
    textAlign: 'center',
    '& img': {
      maxWidth: '100px',
      display: 'block',
      margin: 'auto',
    },
  },
}));

const MainCard = () => {
  const classes = useStyles();
  return CardData.map(card => (
    <Grid item sm={3} key={card.name}>
      <Card className={classes.card}>
        <CardMedia>
          <img src={card.icon} alt="" className="img-fluid" />
        </CardMedia>
        <CardContent>
          <h5 className="title">{card.title}</h5>
          <p>{card.description}</p>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={card.link}
          >
            자세히보기
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default function Main() {
  const classes = useStyles();
  return (
    <div className="wrap main" style={{ backgroundColor: '#eeeeee' }}>
      <section
        className={classes.mainVisual}
        style={{ backgroundImage: `url(${backgournd})` }}
      >
        <Container>
          <Grid container>
            <Grid item sm={6}>
              <h1 className="title">글로벌 #1 CRM Saleforce</h1>
              <h5 className="subTitle">
                새로운 방식으로 고객과 소통하세요
              </h5>
              <div className="btnGroup">
                <Button variant="contained" color="primary">
                  제품 데모 보기
                </Button>
                <Button variant="contained">제품 무료 체험</Button>
                <Button variant="contained" color="primary">
                  SALES CLOUD 가이드 투어
                </Button>
              </div>
            </Grid>
            <Grid item sm={6}>
              <img src={mainImg} alt="" className="img-fluid" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="contents01">
        <Container>
          <h1 className="contentsTitle">제품 라인업</h1>
          <Grid container spacing={2}>
            <MainCard />
          </Grid>
        </Container>
      </section>
    </div>
  );
}
