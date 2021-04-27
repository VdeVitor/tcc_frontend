import React from 'react';
import Login from './pages/Login/index'
import './global.css'
import ButtonAppBar from './components/Navbar'
import Home from './pages/Home/Home'
import Cardapio from './pages/Cardapio/Cardapio'
import Comidas from './pages/Cardapio/Comidas'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Detalhe from './pages/Cardapio/Detalhe'
import Comanda from './pages/Comanda/Comanda'
import Routes from './routes'

function App() {
  return (
    
    <div>
    <ButtonAppBar />
    <Routes />
    </div>
  );
}

export default App;
