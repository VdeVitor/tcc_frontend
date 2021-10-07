import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton href={props.url} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          { window.location.pathname !== '/home'  ?
            <ChevronLeft style={{color: '5f0f40'}} />
          : null}
          </IconButton>
          <Button className={classes.AddIcon} href={props.segundaUrl}>
          { window.location.pathname === '/login' ?
            <PersonAddIcon style={{color: '5f0f40'}} />
          : window.location.pathname === '/cadastro' ?
          null : <AddIcon style={{color: '5f0f40'}} />}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}