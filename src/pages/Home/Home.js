import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { useHistory } from "react-router-dom";



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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
      <Grid item xs={12}>
          <Button className={classes.botoes} href={'/home'} startIcon={<HomeRoundedIcon />} variant="contained">Home</Button>
          <Button className={classes.botoes} href={'/comanda'} startIcon={<AssignmentIcon />} variant="contained">Comanda</Button>
          <Button className={classes.botoes} href={'/cardapio'} startIcon={<MenuBookRoundedIcon />} variant="contained">Cardápio</Button>
          <Button className={classes.botoes} href={'/pedidos'} startIcon={<ShoppingCartRoundedIcon />} variant="contained">Pedidos</Button>
        </Grid>
      </div>
    </div>
  );
}