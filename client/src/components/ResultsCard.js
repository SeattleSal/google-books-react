import React from "react";
import { Card, Button } from "react-bootstrap";
// import API

function ResultsCard({ book }) {
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
          Save to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ResultsCard;
