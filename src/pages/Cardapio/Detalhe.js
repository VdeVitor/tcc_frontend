import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import http from 'axios'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import imagem from './foto_original.jpg'
import ButtonAppBar from '../../components/Navbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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
  botao: {
      display: 'inline-block',
      backgroundColor: '#5f0f40',
      color: '#ffff',
      width: '100%',
  },
  aux: { 
      display: 'flex',
      justifyContent: 'center',
  },
  media: {
    marginLeft: '1.5rem',
    marginTop: '2rem',
    justifyContent: 'space-between',
    boxShadow: '0px 1px 7px #B3B6B7'
  }
}));


export default function Detalhe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [produto, setProduto] = useState({});
  

  useEffect(() => {
    let code = window.location.pathname.split('/')[3]
    setLoading(true)
    http.get(`http://localhost:3333/produtos/${code}`)
      .then(response => {
        setProduto(response.data)
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
      
  }, []);

  const handleClick = () => {
    setOpen(true);
    console.log()
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  if (loading) {
    return <span>{loading}</span>;
  }

  return (
    <div className={classes.rootRaiz}>
      <ButtonAppBar url={'/cardapio'} />
      <div className={classes.container}>
      <Card className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Pedido realizado com sucesso!
        </Alert>
      </Snackbar>
      <CardActionArea>
        <img
          className={classes.media}
          src={imagem}
          alt="Produto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {produto[0].nome}
          </Typography>
          <Typography gutterBottom>
              {produto[0].descricao}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ {produto[0].valor}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.aux}>
        <Button className={classes.botao} onClick={handleClick} variant="contained" size="small">
          Comprar
        </Button>
      </CardActions>
    </Card>
    
      </div>
    </div>
  );
}