import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
  Oaxaca,
  HomePage
} from "./pages";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/oaxaca" component={Oaxaca} />
          </Switch>
      </BrowserRouter>
    );
  }
}
