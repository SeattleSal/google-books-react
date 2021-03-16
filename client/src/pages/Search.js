import React, {useState, useEffect} from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import API from "../utils/API"

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // call google books api with 'search' as parameter
  async function handleFormSubmit(event) {
    event.preventDefault();
    const results = await API.getBooks(search); // or change to .then
    // console.log(results.data.items);
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
