import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  botoes: {
    width: '100%',
    flex: 1,
    display: 'block-inline',
    padding: '0.5em 5em 0.5em 5em',
    background: '#ffffff',
    color: '#5f0f40'
  },
  root: {
    display: 'flex',
    margin: '0.5rem 0rem 0.5rem 0rem',
  },
}));

export default function Cartao(props) {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <Button
        variant="contained"
        className={classes.botoes}
        startIcon={props.icon}
      >
        {props.name}
      </Button>

    </Card>

  );
}