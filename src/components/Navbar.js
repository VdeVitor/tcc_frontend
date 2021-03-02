import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#17202A',
  },
  title: {
    flexGrow: 1,
  },
  AddIcon: {
    color: '#17202A',
    display: 'flex',
  },
  left:{
    marginLeft: '80%'
  },
  Toolbar: {
    backgroundColor: '#ECF0F1',
    justifyContent: 'space-between',
    boxShadow: '0px 1px 7px #B3B6B7'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button className={classes.AddIcon}>
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}