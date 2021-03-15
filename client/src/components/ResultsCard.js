import React from "react";
import { Card, Button } from "react-bootstrap";

function ResultsCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Book Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" type="submit">
        Save to Favorites
      </Button>
      </Card.Body>
    </Card>
  );
}

export default ResultsCard;
