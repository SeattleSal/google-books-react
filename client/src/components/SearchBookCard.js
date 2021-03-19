import React from "react";
import { Card, Button } from "react-bootstrap";
// import API

function SearchBookCard({ book }) {
  // onclick to save book as favorite
  // call the api
  // save this as a favoirte - pass it the book info????
  const bookResult = {
    imgURL : book.volumeInfo.imageLinks.smallThumbnail,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    description: book.volumeInfo.description
  }

  return (
    <Card className="row">
      <Card.Img className="col-auto" src={bookResult.imgURL} style={{width: "fit-content"}}/>
      <Card.Body className="col">
        <Card.Title>{bookResult.title}</Card.Title>
        <Card.Title>Author(s): {bookResult.authors}</Card.Title>
        <Card.Text>{bookResult.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SearchBookCard;