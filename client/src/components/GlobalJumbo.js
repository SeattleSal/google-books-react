import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function GlobalJumbo() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>React Google Book Search</h1>
        <p>
          Search Google Books and Save your favorites!
        </p>
      </Container>
    </Jumbotron>
  );
}

export default GlobalJumbo;
