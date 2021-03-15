import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";

function Search() {
  return (
    <div className="container">
      <SearchForm />
      <div className="row">
        <ResultsList />
      </div>
    </div>
  );
}

export default Search;
