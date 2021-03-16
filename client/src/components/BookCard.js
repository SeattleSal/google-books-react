import React from "react";
import { Card, Button } from "react-bootstrap";
// import API

function BookCard({ book, button1, button2 }) {
  // onclick to save book as favorite
  // call the api
  // save this as a favoirte - pass it the book info????

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Title>Author(s): {book.volumeInfo.authors}</Card.Title>
        <Card.Text>{book.volumeInfo.description}</Card.Text>
        <Button variant="primary" type="submit">
          {button1}
        </Button>
        <Button variant="primary" type="submit">
          {button2}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;