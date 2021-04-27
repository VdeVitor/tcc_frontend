import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Cardapio from './pages/Cardapio/Cardapio'
import Comidas from './pages/Cardapio/Comidas'
import Detalhe from './pages/Cardapio/Detalhe'
import Comanda from './pages/Comanda/Comanda'
import Home from './pages/Home/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={(props) => <Home {...props} />} />
                <Route path="/cardapio" component={(props) => <Cardapio {...props} />} />
                <Route path="/comidas" component={(props) => <Comidas {...props} />} />
                <Route path="/detalhe" component={(props) => <Detalhe {...props} />} />
                <Route path="/comanda" component={(props) => <Comanda {...props} />} />
            </Switch>
        </BrowserRouter> 
    );
} 