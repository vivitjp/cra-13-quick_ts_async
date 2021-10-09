import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from './pages/top/Top'
import About from './pages/about/About'

export default function Root() {
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