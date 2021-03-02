import React from 'react';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




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

function generate(opcao) {
    return[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => React.cloneElement(opcao, {
        key: value,
    }), );
}

export default function Comidas() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  

  return (
    <div className={classes.rootRaiz}>
      <div className={classes.container}>
      <Grid item xs={6}>
      <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem className={classes.item} style={{borderRadius: '5px'}}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nome do Produto"
                    secondary="Description"
                  />
                 <Button size="large">
                     <Avatar className={classes.product}>
                    <ChevronRightIcon></ChevronRightIcon>
                    </Avatar>
                 </Button>
                </ListItem>,
              )}
            </List>
          </div>
      </Grid>
      </div>
    </div>
  );
}