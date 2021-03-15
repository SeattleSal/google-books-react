/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.sass';

import GlobalNavBar from './components/GlobalNavBar'
import GlobalJumbo from './components/GlobalJumbo'
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch'


function App() {
    return (
      <Router>
      <div>
        <GlobalNavBar />
        <GlobalJumbo />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>

      </div>
      </Router>
    );
}

export default App;
