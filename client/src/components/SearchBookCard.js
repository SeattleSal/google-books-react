import React from "react";
import { Card } from "react-bootstrap";

function SearchBookCard({ book }) {

  const MAX_LENGTH = 400;
  let bookDescription = book.volumeInfo.description;
  if (bookDescription && (bookDescription.length > 400)) {
    bookDescription = `${bookDescription.substring(0, MAX_LENGTH)}...`;
  }

  const bookResult = {
    imgURL : book.volumeInfo.imageLinks.smallThumbnail || "No image provided.",
    title: book.volumeInfo.title || "No title provided.",
    authors: book.volumeInfo.authors || "No authors provided.",
    description: bookDescription || "No description provided.",
    link: book.volumeInfo.infoLink || "No link provided."
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