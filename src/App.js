import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./common/component/Main";
import Header from "./common/component/Header";
import "./style/basic.scss";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/head" component={Header} />
        </Switch>
      </Router>
    </>
  );
}
