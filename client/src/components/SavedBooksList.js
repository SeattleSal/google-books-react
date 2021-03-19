import React from "react";
import { ListGroup } from "react-bootstrap";
import API from "../utils/API";
import SavedBookCard from "./SavedBookCard";
import DeleteBookButton from "./DeleteBookButton";

function SavedBooksList({ savedBooks }) {
  
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {savedBooks.map((book, index) => (
          <div key={index}>
            <DeleteBookButton book={book} />
            <SavedBookCard book={book} />
          </div>
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SavedBooksList;
