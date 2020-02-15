import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import Main from '../../components/main/MainComp';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function DefaultLayout() {
  const classes = useStyles();
  return (
    <div id="wrap">
      <DefaultHeader />
      <div className={classes.root}>
        <Main />
      </div>
      <DefaultFooter />
    </div>
  );
}

export default DefaultLayout;
