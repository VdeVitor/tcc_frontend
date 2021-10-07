import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Cardapio from './pages/Cardapio/Cardapio'
import Comidas from './pages/Cardapio/Comidas'
import Bebidas from './pages/Cardapio/Bebidas'
import Detalhe from './pages/Cardapio/Detalhe'
import Comanda from './pages/Comanda/Comanda'
import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Cadastro/Login';
import { Component } from 'react';
import HomeFuncionario from './pages/Home/HomeFuncionario';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function Routes() {
    const autenticado = localStorage.getItem('id');

    // Autenticado e Rota Publica => Redirect /home
    // Autenticado e Rota Privada => mantem
    // Nao autenticado e Rota Publica => mantem
    // Nao auenticado e Rota Privada => Redirect /

    const PrivateRoute = ({ component: Component, ...rest}) => (
        <Route
            {...rest}
            render={(props) => {
            if(autenticado && window.location.pathname !== '/') {
                console.log('aqui')
                return <Component {...props} />
            } else if(autenticado && window.location.pathname === '/') {
                return window.location.href = '/home'
            } else if(!autenticado && window.location.pathname === '/') {
                return <Login {...props} />
            }
        }}
        />
    )

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={(props) => <Login {...props} />} />
                <Route path="/cadastro" exact component={(props) => <Cadastro {...props} />} />
                <PrivateRoute path="/dashboard" exact component={(props) => <HomeFuncionario {...props} />} />
                <PrivateRoute exact path="/home" component={(props) => <Home {...props} />} />
                <PrivateRoute exact path="/cardapio" component={(props) => <Cardapio {...props} />} />
                <PrivateRoute exact path="/cardapio/comidas" component={(props) => <Comidas {...props} />} />
                <PrivateRoute exact path="/cardapio/bebidas" component={(props) => <Bebidas {...props} />} />
                <PrivateRoute path="/produto/detalhe/:id" component={(props) => <Detalhe {...props} />} />
                <PrivateRoute path="/comanda" component={(props) => <Comanda {...props} />} />
            </Switch>
        </BrowserRouter>
    );
}