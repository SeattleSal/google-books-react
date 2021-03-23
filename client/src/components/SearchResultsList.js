import React from "react";
import { ListGroup } from "react-bootstrap";
import SaveBookButton from "./SaveBookButton";
import MoreInfoButton from "./MoreInfoButton";
import SearchBookCard from "./SearchBookCard";

function SearchResultsList({ results }) {
  return results.length ? (
    <ListGroup>
      {results.map((book, index) => (
        <ListGroup.Item key={index}>
          <MoreInfoButton link={book.volumeInfo.previewLink} />
          <SaveBookButton book={book} className="m-1" />
          <SearchBookCard book={book} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    <div className="container">
      <h2> No Results </h2>
    </div>
  );
}

export default SearchResultsList;
