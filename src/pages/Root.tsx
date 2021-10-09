import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from './top/Top'
import About from './about/About'

export default function Root(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/"     > <Top /> </Route>
        </Switch>
      </div>
    </Router>
  );
}