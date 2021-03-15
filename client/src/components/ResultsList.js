import React from "react";
import { ListGroup } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import API from "../utils/API";


function ResultsList({results}) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {results.map((book, index) => (
          <div key={index}>
          <ResultsCard book={book} />
          </div>
        ))}
        
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ResultsList;
