import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiAlert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


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
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function Comanda() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  

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
      <Card className={classes.cartao}>
      <Button className={classes.botao} variant="contained">Fechar comanda</Button>
      </Card>
      </div>
    </div>
  );
}