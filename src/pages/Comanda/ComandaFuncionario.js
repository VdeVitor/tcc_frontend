import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ButtonAppBar from '../../components/Navbar';
import WarningIcon from '@material-ui/icons/Warning';
import Box from '../../assets/images/box.svg';
import http from 'axios';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  rootRaiz: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    flexGrow: 1,
    backgroundColor: '#D0D3D4',
  },
  container: {
      display: 'flex',
      flexDirection: 'column',
  },
  cartao: {
    margin: '1em',
  },
  icone: {
    color: '#5f0f40',
    marginTop: 3,
    marginLeft: 3
  },
  content: {
    display: 'inline-block',
    paddingLeft: 15,
  },
  texto: {
    color: '#5f0f40'
  },
  downArea: {
    display: 'inline-block',
    margin: '1em',
  },
  Main: {
    color: '#5f0f40',
    marginBottom: 3,
  },
  Sub: {
    fontSize: '15px',
    color: 'grey',
  },
  Valor: {
    color: '#5f0f40',
    marginTop: 10,
  },
  stats: {
    marginLeft: 130,
  },
  valores: {
    fontSize: '13px',
    marginBottom: 3,
    color: 'grey',
    fontWeight: 'bold'
  },
  valorFinal: {
    fontSize: '13px',
    marginTop: 10,
    color: 'grey',
    fontWeight: 'bold'
  },
  botao: {
    display: 'inline-block',
    backgroundColor: '#5f0f40',
    color: '#ffff',
    width: '100%',
  },
  comand: {
    margin: '1rem',
    height: '60vh'
  },
  aviso: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '40%',
    color: '#e5e5e5'
  },
  imagem: {
    width: '100%',
    marginLeft: '20%',
    marginTop: '10%',
    opacity: '15%'
  }
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function ComandaFuncionario() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const usuNome = localStorage.getItem('usuario');
  const idComanda = localStorage.getItem('idComanda');
  const [statusComanda, setStatus] = useState();
  const [open, setOpen] = useState(false);
  const codigoComanda = '';

  useEffect(() => {

  }, [])

  const handleClose = () => {
    setOpen(true);
  }

  async function fechaComanda() {
    codigoComanda = localStorage.getItem('idComanda');

    if(codigoComanda){
      http.delete(`http://localhost:3333/comandas/${codigoComanda}`)
        .then((response) => {
          console.log(response);

        })
    }
  }


  return (
    <div className={classes.rootRaiz}>
      <ButtonAppBar url={'/home'} />
      <div className={classes.container}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {  }
        </Alert>
      </Snackbar>
      <Card className={classes.cartao}>
        <CardContent >
          <AssignmentIcon className={classes.icone} fontSize="large" />
          <div className={classes.content}>
          <Typography className={classes.texto}>
            <strong>Comanda:</strong> {idComanda}
          </Typography>
          <Typography className={classes.texto}>
            <strong>Resp.:</strong> {usuNome}
          </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.comand}>
        <CardContent>
          <WarningIcon className={classes.aviso} fontSize="large" />
          <div >
            <Typography style={{ opacity: '30%', textAlign: 'center' }}>
              Opa! Pelo visto não há produtos na sua comanda!
            </Typography>
          </div>
          <div className={classes.imagem}>
            <img src={Box} alt="clean" style={{ width: '50%'}} />
          </div>
        </CardContent>
      </Card>
  { statusComanda === true ?
      <Card className={classes.cartao}>
        <CardContent >
        <Grid container>
        <Grid item xs={12}>
          <div >
            <List dense={dense}>
              {generate(
                <ListItem >
                  <ListItemAvatar>
                    <Avatar alt="Produto">
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Desc do Produto"
                    secondary="Qtd: --"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" >
                      <Typography>
                        R$ --,--
                      </Typography>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
        </Grid>
        </CardContent>
        <CardActions>
          <div className={classes.downArea}>
            <Typography className={classes.Main}>
              Subtotal
            </Typography>
            <Typography className={classes.Sub}>
              Gorjeta
            </Typography>
            <Typography className={classes.Valor}>
              Total
            </Typography>
          </div>
          <div className={classes.downArea}>
            <div className={classes.stats}>
            <Typography className={classes.valores}>
              R$ 100,00
            </Typography>
            </div>
            <div className={classes.stats}>
            <Typography className={classes.valores}>
              R$ 2,50
            </Typography>
            </div>
            <div className={classes.stats}>
            <Typography className={classes.valorFinal}>
              R$ 102,50
            </Typography>
            </div>
          </div>
        </CardActions>
      </Card>
      : null}
      <Card className={classes.cartao}>
      <Button className={classes.botao} variant="contained">Fechar comanda</Button>
      </Card>
      </div>
    </div>
  );
}