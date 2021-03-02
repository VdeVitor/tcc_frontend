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
import AssignmentIcon from '@material-ui/icons/Assignment';

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
  }
}));


export default function Comanda() {
  const classes = useStyles();
  

  return (
    <div className={classes.rootRaiz}>
      <div className={classes.container}>
      <Card className={classes.cartao}>
        <CardContent >
          <AssignmentIcon className={classes.icone} fontSize="large" />
          <div className={classes.content}>
          <Typography className={classes.texto}>
            <strong>Comanda:</strong> #00001
          </Typography>
          <Typography className={classes.texto}>
            <strong>Resp.:</strong> Vitor Oliveira de V
          </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.cartao}>
        <CardContent>
          
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
      </div>
    </div>
  );
}