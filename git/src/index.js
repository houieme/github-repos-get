
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/open-iconic-bootstrap.min.css";
import "./assets/css/animate.css";

import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";

import "./assets/css/aos.css";

import "./assets/css/ionicons.min.css";

import "./assets/css/bootstrap-datepicker.css";
import "././assets/css/jquery.timepicker.css";


import "./assets/css/flaticon.css";
import "./assets/css/icomoon.css";
import "./assets/css/style.css";


import UserName from "views/username.jsx";
import Simple from "views/Simple.jsx";
import Language from "views/language.jsx";



ReactDOM.render(
    
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Simple {...props} />} />
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
