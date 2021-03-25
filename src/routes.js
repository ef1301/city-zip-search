import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import City from "./pages/City";
import Zipcode from "./pages/Zipcode";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" exact component={City} />
        <Route path="/zipcode" exact component={Zipcode} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
