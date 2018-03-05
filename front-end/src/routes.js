import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import IngredientList from "./components/IngretintList/IngredientList";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Day } from "./components/Day/Day";
import { App } from "./components/App";
import { Login } from "./components/Login/Login";
import {CreateMenu} from "./components/Menu/CreateMenu";
import { Pacient } from "./components/Medic/Pacient";
import { PacientsList } from "./components/Medic/PacientsList";
export const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/search" component={IngredientList} />
      <Route path="/login" component={Login} />
      <Route path="/info" component={UserInfo} />
      <Route path="/day" component={Day} />
      <Route path="/createMenu" component={CreateMenu}/>
      <Route path="/pacient" component={Pacient} />
      <Route path="/pacients" component={PacientsList} />
    </Switch>
  </App>;