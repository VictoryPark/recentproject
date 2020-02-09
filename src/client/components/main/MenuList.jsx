import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 296,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MenuList = ({ menu }) => {
  // const Icon = menu.icon;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Icon /> */}
        <Typography
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {menu.title}
        </Typography>
        <Typography variant="h6">{menu.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          자세히 보기
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuList;
