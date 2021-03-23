import React from "react";
import { Card } from "react-bootstrap";

function SearchBookCard({ book }) {

  const MAX_LENGTH = 400;
  let bookDescription = book.volumeInfo.description;
  if (bookDescription.length > 400) {
    bookDescription = `${bookDescription.substring(0, MAX_LENGTH)}...`;
  }

  const bookResult = {
    imgURL : book.volumeInfo.imageLinks.smallThumbnail,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    description: bookDescription,
    link: book.volumeInfo.infoLink
  }

  return (
    <li className="media mt-1 t-1" >
      <Card.Img className="m-2" src={bookResult.imgURL} style={{width: "100px"}}/>
      <Card.Body>
        <Card.Title>{bookResult.title}</Card.Title>
        <Card.Title>Author(s): {bookResult.authors}</Card.Title>
        <Card.Text>{bookResult.description}</Card.Text>
      </Card.Body>
    </li>
  );
}

export default SearchBookCard;