import React from "react";
import { ListGroup } from "react-bootstrap";
import API from "../utils/API";
import SaveBookButton from "./SaveBookButton";
import SearchBookCard from "./SearchBookCard";

function SearchResultsList({ results }) {

  return results.length ? (
    <ListGroup>
      <ListGroup.Item>
        {results.map((book, index) => (
          <div key={index}>
            <SaveBookButton book={book} />
            <SearchBookCard book={book} />
          </div>
        ))}
      </ListGroup.Item>
    </ListGroup>
  ) : (
    <h1> No Results </h1>
  );
}

export default SearchResultsList;
