
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import UserName from "views/username.jsx";
import Simple from "views/Simple.jsx";
import Language from "views/language.jsx";


ReactDOM.render(
    
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/UserName"
        exact
        render={props => <UserName {...props} />}
      />
      <Route path="/Simple" exact render={props => <Simple {...props} />} />
      <Route path="/language" exact render={props => <Language {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
