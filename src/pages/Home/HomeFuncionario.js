import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FaceIcon from '@material-ui/icons/Face';
import ButtonAppBar from '../../components/Navbar';
import artHome from '../../assets/images/art1.svg';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import http from 'axios';



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
  },
  texto: {
    margin: '1% 2% 5% 2%',
    backgroundColor: '#d7bad2',
    boxShadow: '0px 1px 7px #B3B6B7'
  },
  footer: {
   marginTop: '30%',
   left: '0',
   bottom: '0',
   width: '90%'
  }
}));

export default function HomeFuncionario() {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(true);
  const usuNome = localStorage.getItem('usuario');
  const idUsuario = localStorage.getItem('id')
  const [loginStatus, setLoginStatus] = useState();

  useEffect(() => {
    http.get('http://localhost:3333/usuarios/session').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].login);
        console.log(loginStatus)
      }

    });
  }, [loginStatus])

  return (
    <div className={classes.root}>
      <ButtonAppBar url={'/home'} />
      <div className={classes.container}>
      <Badge color="primary" variant="dot" invisible={false}>
        <Chip className={classes.texto} label={usuNome} icon={<FaceIcon />} />
      </Badge>
      <Grid item xs={12}>
          <Button className={classes.botoes} href={'/listacomandas'} startIcon={<AssignmentIcon />} variant="contained">Comandas</Button>
          <Button className={classes.botoes} href={'/cardapio'} startIcon={<MenuBookRoundedIcon />} variant="contained">Cardápio</Button>
          <Button className={classes.botoes} href={'/listapedidos'} startIcon={<ShoppingCartRoundedIcon />} variant="contained">Pedidos</Button>
        </Grid>
        <img className={classes.footer} src={artHome} alt="arthome" />
      </div>
    </div>
  );
}