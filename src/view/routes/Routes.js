import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Topic from "../pages/Topic";
import Photos from "../pages/Photos";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photos/:id" component={Photos} />
      <Route path="/s/:category/:query" component={Search} />
      <Route path="/t/:query" component={Topic} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
