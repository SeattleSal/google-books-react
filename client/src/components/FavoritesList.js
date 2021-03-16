import React from "react";
import { ListGroup } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import API from "../utils/API";
import BookCard from "./BookCard"


function FavoritesList() {

  const button1 = "More Details";
  const button2 = "Delete from Favorites";
  const results = [
      {
          volumeInfo: {
              imageLinks: {
                  smallThumbnail: "..."
              },
              title: "Great Gatsby",
              description: "good book",
              author: [ "joe bob"]
          }
        }
]

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {results.map((book, index) => (
          <div key={index}>
          <BookCard book={book}
          button1={button1}
          button2={button2} />
          </div>
        ))}
        
      </ListGroup.Item>
    </ListGroup>
  );
}

export default FavoritesList;
