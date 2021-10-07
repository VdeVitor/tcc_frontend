import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonAppBar from '../../components/Navbar';
import { Snackbar, TextField, Typography } from '@material-ui/core';
import logo from '../../assets/images/logo.png'
import http from 'axios';
import { useHistory } from 'react-router';
import Alert from '@material-ui/lab/Alert';

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
    margin: '5% 2% 1% 2%',
    width: '70%',
    backgroundColor: '#5f0f40',
    color: '#ffff',
    padding: '10px'
  },
  input: {
    boxShadow: '0px 1px 7px #E8EAEB'
  },
  large: {
    width: '40%',
    height: '40%',
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '30%'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const classes = useStyles();
  const [loginStatus, setLoginStatus] = useState();
  const [msg, setMsg] = useState();
  const componentIsMounted = useRef(true);
  const [open, setOpen] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setLogin('');
    setSenha('');

    http.get('http://localhost:3333/usuarios/session').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].login);
      }
    });

    return () => {
      componentIsMounted.current = false;
    };
  }, [])

  const handleClose = () => {
    setOpen(true);
  }

  function criaComanda(){
    let id = parseInt(localStorage.getItem('id'));

    http.post('http://localhost:3333/comandas/', {id})
      .then((response) => {
        localStorage.setItem('idComanda', response.data.id);
    })
  }

  function handleLogin(){
    http.defaults.withCredentials = true;
    http.post('http://localhost:3333/usuarios/login', {login, senha})
      .then((response) => {
        console.log(response);
        localStorage.setItem('id', '12');
        window.location.href="/home";
      }).catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className={classes.root}>
      <ButtonAppBar url={'/'} segundaUrl={'/cadastro'} />
      <div className={classes.container}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          { msg }
        </Alert>
      </Snackbar>
        <Typography variant="h5" style={{color: '#898989', marginTop: '5%'}} component="h5" gutterBottom>Seja Bem-vindo!</Typography>
        <Typography variant="subtitle1" style={{color: '#898989'}} component="subtitle1" gutterBottom>Realize seu Login</Typography>
        <div >
        <img alt="Remy Sharp" src={logo} className={classes.large} />
        </div>
          <div className="row">
          <TextField
            margin="dense"
            id="outlined-basic"
            className={classes.input}
            label="Login"
            variant="outlined"
            name="login"
            type="text"
            value={login || ''}
            onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className="row">
          <TextField
            margin="dense"
            id="outlined-basic"
            className={classes.input}
            label="Senha"
            variant="outlined"
            name="senha"
            type="password"
            value={senha || ''}
            onChange={e => setSenha(e.target.value)}
            />
          </div>

          <Button className={classes.botoes} onClick={handleLogin} variant="contained">Entrar</Button>
      </div>
    </div>
  );
}