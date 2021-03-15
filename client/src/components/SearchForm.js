import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Book Search</Form.Label>
        <Form.Control placeholder="The Great Gatsby" />
      </Form.Group>
      <Button variant="primary" type="submit">
    Search
  </Button>
    </Form>
  );
}

export default SearchForm;
