import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, MenuList, MenuItem } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../../assets/images/common/logo.png';
import NavData from '../../data/NavData';

const useStyles = makeStyles(() => ({
  header: {
    flexGrow: 1,
    backgroundColor: '#AB2B35',
  },
  logo: {
    display: 'block',
    padding: '10px',
  },
  logoImg: {
    maxWidth: '120px',
  },
  navRoot: {
    position: 'relative',
    padding: '10px 0',
    textAlign: 'left',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  },
  navItem: {
    position: 'absolute',
    backgroundColor: '#666',
    top: 'calc(100% - 5px)',
    display: 'none',
    transition: 'all 0.5s',
    left: 0,
    opacity: 0,
  },
}));

const handleMouseEnter = (e, link) => {
  const menu = document.getElementById(`${link}_child`);
  menu.style.display = 'block';
  setTimeout(() => {
    menu.style.opacity = 1;
  }, 100);
};

const handleMouseLeave = (e, link) => {
  const menu = document.getElementById(`${link}_child`);
  menu.style.opacity = 0;
  setTimeout(() => {
    menu.style.display = 'none';
  }, 500);
};

const CreateNavigation = () => {
  const classes = useStyles();
  return NavData.map(root => (
    <Grid
      item
      xs={2}
      className={classes.navRoot}
      key={root.name}
      onMouseEnter={
        root.children && (e => handleMouseEnter(e, root.link))
      }
      onMouseLeave={
        root.children && (e => handleMouseLeave(e, root.link))
      }
    >
      <Link to={`/${root.link}`}>{root.name}</Link>
      {root.children && (
        <MenuList
          className={classes.navItem}
          id={`${root.link}_child`}
        >
          <NavChildren
            parent={root.link}
            childArray={root.children}
          />
        </MenuList>
      )}
    </Grid>
  ));
};

const NavChildren = ({ parent, childArray }) => {
  return childArray.map((child, index) => (
    <Fragment key={child.link}>
      {index > 0 ? <Divider /> : ''}
      <MenuItem component="a" href={`/${parent}/${child.link}`}>
        {child.name}
      </MenuItem>
    </Fragment>
  ));
};

export default function DefaultHeader() {
  const classes = useStyles();
  return (
    <Router>
      <Grid container className={classes.header} alignItems="center">
        <Grid item xs={6} className="logo">
          <Link to="/" className={classes.logo}>
            <img src={Logo} alt="" className={classes.logoImg} />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Grid container alignItems="center" justify="center">
            <CreateNavigation />
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
}
