import React from "react";
import { ListGroup } from "react-bootstrap";
import ResultsCard from './ResultsCard'

function ResultsList() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <ResultsCard />
        </ListGroup.Item>
      <ListGroup.Item>
      <ResultsCard />
        
        </ListGroup.Item>
    </ListGroup>
  );
}

export default ResultsList;
