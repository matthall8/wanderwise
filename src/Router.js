import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
  Oaxaca,
  Homepage
} from "./pages";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/oaxaca" component={Oaxaca} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;