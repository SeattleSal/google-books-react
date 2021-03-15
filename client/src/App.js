/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import 'bootstrap/scss/_utilities.scss';
// import 'bootstrap/scss/_mixins.scss';
// import 'bootstrap/scss/_variables.scss';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/_navbar.scss';
import GlobalNavBar from './components/GlobalNavBar'
import GlobalJumbo from './components/GlobalJumbo'
import SearchForm from './components/SearchForm'
import ResultsList from './components/ResultsList'


function App() {
    return (
      <div>
        <GlobalNavBar />
        <GlobalJumbo />

      <div className="container">
        <SearchForm />

        <div className="row">
          <ResultsList />
        </div>

      </div>
      </div>
    );
}

export default App;
