import React, {useState, useEffect} from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import API from "../utils/API"

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("button clicked " + search);
    // call google books api with 'search'
    const results = await API.getBooks(search);
    console.log(results.data.items);
    setResults(results.data.items);
  }

  return (
    <div className="container">
      <SearchForm search={search}
      setSearch={setSearch}
      handleFormSubmit={handleFormSubmit} />
      <div className="row">
        <ResultsList results={results} />
      </div>
    </div>
  );
}

export default Search;
