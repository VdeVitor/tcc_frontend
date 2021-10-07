import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ButtonAppBar from '../../components/Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
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

  },
  botoes: {
    margin: '1% 2% 1% 2%',
    width: '97%',
    justifyContent: 'start',
    backgroundColor: '#F7F9F9',
    color: '#5F0F40',
    padding: '10px'
  }
}));

export default function Cardapio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonAppBar url={'/home'} />
      <div className={classes.container}>
      <Grid item xs={12}>
        <Button className={classes.botoes} href={'/cardapio/comidas'} name="Comida" startIcon={<FastfoodIcon />} variant="contained">Comidas</Button>
        <Button className={classes.botoes} href={'/cardapio/bebidas-alcoolicas'} name="Bebidas" startIcon={<LocalBarIcon />} variant="contained">Bebidas</Button>
        <Button className={classes.botoes} name="Sobremesas" startIcon={<LocalDiningIcon />} variant="contained">Sobremesas</Button>
      </Grid>
      </div>
    </div>
  );
}