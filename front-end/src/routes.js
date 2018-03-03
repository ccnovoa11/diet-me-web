import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import IngredientList from "./components/IngretintList/IngredientList";
import {Home} from "./components/Home/Home";
import {App} from "./components/App";

export const AppRoutes=() => 
	<App>
		<Switch>
			<Route path="/search" component={IngredientList}/>
			<Route path="/" component={Home}/>
		</Switch>
	</App>;