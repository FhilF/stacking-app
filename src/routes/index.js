import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "pages/Home";
import Instructions from "pages/Instructions";
import StartStacking from "pages/StartStacking";

function SuperUserRoutes(props) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          Component
          render={(routeProps) => <Home {...routeProps} />}
        />
        <Route
        exact
        path="/instructions"
        Component
        render={(routeProps) => <Instructions {...routeProps} />}
      />
      <Route
        exact
        path="/start-stacking"
        Component
        render={(routeProps) => <StartStacking {...routeProps} />}
      />
      </Switch>
    </>
  );
}

export default SuperUserRoutes;
