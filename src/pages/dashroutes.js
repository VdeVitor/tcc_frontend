import React from "react";
import { Route, Switch } from "react-router-dom";
import Cardapio from '../pages/Cardapio/Cardapio'
import Comidas from '../pages/Cardapio/Comidas'
import Detalhe from '../pages/Cardapio/Detalhe'
import Comanda from '../pages/Comanda/Comanda'
import Home from '../pages/Home/Home'
// import Error404 from "../../../common/containers/404Page/404Error"
// import UnitInclude from '../screens/unit/unit-include'


export const DashRoute = ({ match }) => {
	return (
		<Switch>
			<Route exact path={`${match.url}`} component={(props) => <Home {...props} />} />
			{/* <Route path={`${match.url}/unitinclude`} component={(props) => <UnitInclude {...props} />} /> */}
			{/* <Route from="*" component={Error404} /> */}
            <Route path={`${match.url}/cardapio`} component={(props) => <Cardapio {...props} />} />
            <Route path={`${match.url}/comidas`} component={(props) => <Comidas {...props} />} />
            <Route path={`${match.url}/detalhe`} component={(props) => <Detalhe {...props} />} />
            <Route path={`${match.url}/comanda`} component={(props) => <Comanda {...props} />} />
		</Switch>
	);
};
