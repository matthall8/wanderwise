import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
  Oaxaca,
  Homepage
} from "./pages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/mexico-city-to-oaxaca" component={Oaxaca} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;