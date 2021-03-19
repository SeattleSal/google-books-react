import React from "react";
import { Card, Button } from "react-bootstrap";
// import API

function SavedBookCard({ book }) {
  // onclick to save book as favorite
  // call the api
  // save this as a favoirte - pass it the book info????

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Title>Author(s): {book.authors}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SavedBookCard;