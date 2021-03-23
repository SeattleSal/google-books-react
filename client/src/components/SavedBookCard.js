import React from "react";
import { Card } from "react-bootstrap";

function SavedBookCard({ book }) {

  const MAX_LENGTH = 400;

  return (
    <li className="media mt-1 t-1">
      <Card.Img src={book.imgURL} className="m-2" style={{width: "100px"}}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Title>Author(s): {book.authors}</Card.Title>
        <Card.Text>
          {book.description.length > MAX_LENGTH ?
            (
              <div>
                {`${book.description.substring(0, MAX_LENGTH)}...`}
              </div>
            ) : book.description
          }
          </Card.Text>
      </Card.Body>
    </li>
  );
}

export default SavedBookCard;