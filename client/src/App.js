/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.sass';

import Search from './pages/Search';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';
import GlobalNavBar from './components/GlobalNavBar'
import GlobalJumbo from './components/GlobalJumbo'

function App() {
    return (
      <Router>
        <GlobalNavBar />
        <GlobalJumbo />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
}

export default App;
