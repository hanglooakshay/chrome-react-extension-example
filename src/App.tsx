import React from "react";
import { Route, Switch } from "react-router-dom";
import { DataFetched } from "./routes/DataFetched";
import { Home } from "./routes/Home";

import "./App.css";

export const App = () => {
  return (
    <Switch>
      <Route path="/about">
        <DataFetched />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
