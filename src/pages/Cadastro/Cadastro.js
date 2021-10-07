import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonAppBar from '../../components/Navbar';
import { TextField, Typography } from '@material-ui/core';
import LogoSimp from '../../assets/images/logoSimp.png'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import http from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    width: '30%',
    height: '30%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '35%'
  }
}));

export default function Cadastro() {
  const [usuario, setUsuario] = useState({nomeUsuario: '', telefone: '', status: '', tipo: '', login: '', senha: ''});

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState();
  const [confirmaSenha, setconfirmaSenha] = useState();
  const [senha, setSenha] = useState();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const componentIsMounted = useRef(true);

  const handleClose = () => {
    setOpen(!true);
  }

  function handleSubmit(){

   http.defaults.withCredentials = true;
    http.post('http://localhost:3333/usuarios/cadastro', {
      senha,
      telefone,
      nome,
      status: 1,
      tipo: 'Cliente',
      login: telefone,
    })
    .then((response) => {
      console.log(response)
      setOpen(true);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className={classes.root}>
      <ButtonAppBar url={'/login'} />
      <div className={classes.container}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Cadastro Realizado com sucesso!
        </Alert>
      </Snackbar>
        <Typography variant="h5" style={{color: '#898989', marginTop: '5%'}} component="h5" gutterBottom>Seja Bem-vindo!</Typography>
        <Typography  style={{color: '#898989'}}  gutterBottom>Preencha seu cadastro</Typography>
        <div >
        <img alt="logoSimplificado" src={LogoSimp} className={classes.large} />
        </div>
          <div className="row">
          <TextField
            margin="dense"
            className={classes.input}
            label="Nome"
            variant="outlined"
            name="nomeUsuario"
            type="text"
            value={nome || ''}
            onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="row">
          <TextField
            margin="dense"
            className={classes.input}
            label="Telefone"
            variant="outlined"
            name="telefone"
            type="text"
            value={telefone || ''}
            onChange={e => setTelefone(e.target.value)}
            />
          </div>
          <div className="row">
          <TextField
          margin="dense"
          className={classes.input}
          label="Senha"
          variant="outlined"
          name="senha"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />
          </div>
          <div className="row">
          <TextField
          margin="dense"
          className={classes.input}
          label="Confirmar senha"
          variant="outlined"
          name="confirmaSenha"
          type="password"
          value={confirmaSenha}
          onChange={e => setconfirmaSenha(e.target.value)}
          />
          </div>
          <Button className={classes.botoes} onClick={() => handleSubmit()} variant="contained">Cadastrar</Button>
      </div>
    </div>
  );
}