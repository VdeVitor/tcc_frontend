import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Cartao from '../../components/Cartao'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';


const useStyles = makeStyles((theme) => ({
  rootRaiz: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    flexGrow: 1,
  },
  container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '5%',
      placeItems: 'center',
      
  }
}));

export default function Cardapio() {
  const classes = useStyles();

  return (
    <div className={classes.rootRaiz}>
      <div className={classes.container}>
      <Grid item xs={6}>
      <Cartao name="Comida" icon={<FastfoodIcon></FastfoodIcon>}></Cartao>
      <Cartao name="Bebidas" icon={<LocalBarIcon></LocalBarIcon>}></Cartao>
      <Cartao name="Sobremesas" icon={<LocalDiningIcon></LocalDiningIcon>}></Cartao>
      </Grid>
      </div>
    </div>
  );
}