import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import IngredientList from "./components/IngretintList/IngredientList";
import {UserInfo} from "./components/UserInfo/UserInfo";
import {Day} from "./components/Day/Day";
import {App} from "./components/App";
import {Login} from "./components/Login/Login";

export const AppRoutes=() => 
	<App>
		<Switch>
			<Route path="/search" component={IngredientList}/>
			<Route path="/" component={Login}/>
			<Route path="/info" component={UserInfo}/>
			<Route path="/day" component={Day}/>
		</Switch>
	</App>;