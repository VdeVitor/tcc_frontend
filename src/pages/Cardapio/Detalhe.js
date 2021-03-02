import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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
  }
}));


export default function Detalhe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.rootRaiz}>
      <div className={classes.container}>
      <Card className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Pedido realizado com sucesso!
        </Alert>
      </Snackbar>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./pages/Cardapio/imagens/foto_original.jpg"
          title="Produto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Produto
          </Typography>
          <Typography gutterBottom>
              Descrição do Produto do Cardápio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ 8,50
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