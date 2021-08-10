import * as React from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Builder } from "views/builder";
import { Solver } from "views/solver";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={"/"} component={Builder} />
      <Route path={"/:size/:data"} component={Solver} />
      <Route path={"*"}>
        <Redirect to={"/"} />
      </Route>
    </Switch>
  </Router>
);
