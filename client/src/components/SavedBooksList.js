import React from "react";
import { ListGroup } from "react-bootstrap";
import SavedBookCard from "./SavedBookCard";
import DeleteBookButton from "./DeleteBookButton";
import MoreInfoButton from "./MoreInfoButton";

function SavedBooksList({ savedBooks, getSavedBooks, setSavedBooks }) {
  return (
    <ListGroup variant="flush">
      {savedBooks.map((book) => (
        <ListGroup.Item key={book._id}>
            <MoreInfoButton link={book.link} />
            <DeleteBookButton
              id={book._id}
              savedBooks={savedBooks}
              getSavedBooks={getSavedBooks}
              setSavedBooks={setSavedBooks}
              className="ml-1"
            />
            <SavedBookCard book={book} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SavedBooksList;
