import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import http from 'axios';
import ButtonAppBar from '../../components/Navbar';

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
  item: {
      marginBottom: '3px',
      marginLeft: '0.5rem',
      width: '190%',
      backgroundColor: '#ffff',

  },
  product: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: '2rem',
    justifyContent: 'center'
  }
}));


export default function Comidas() {
  const classes = useStyles();
  const history = useHistory();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    http.get("http://localhost:3333/produtos/")
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


  const test = () => {
    produto.map((prod) => {
      return console.log(prod);
    })

  }

  if (loading) {
    return <span>{loading}</span>;
  }

  return (
    <div className={classes.rootRaiz}>
      <ButtonAppBar url={'/cardapio'} />
      <div className={classes.container}>
      <Grid item xs={6}>
      <div className={classes.demo}>
            <List dense={dense}>
              {  produto ? produto.map((prod) => {
                if(prod.categoria === 'CM'){
                return (
                  <ListItem button="true" onClick={() => history.push(`/produto/detalhe/${prod.idprodutos}`)}  className={classes.item} style={{borderRadius: '5px'}}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      key={prod.idprodutos}
                      primary={prod.nome}
                      secondary={prod.descricao}
                    />
                  <Button onClick={test} size="large">
                      <Avatar className={classes.product}>
                        <ChevronRightIcon></ChevronRightIcon>
                      </Avatar>
                  </Button>
                  </ListItem>
                  )} else {
                    return(null);
                  }

                }) : null
              }
            </List>
          </div>
      </Grid>
      </div>
    </div>
  );
}