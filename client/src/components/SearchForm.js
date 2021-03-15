import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm({search, setSearch, handleFormSubmit}) {
  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Book Search</Form.Label>
        <Form.Control placeholder="The Great Gatsby" 
        value={search} 
        name="inputSearch" 
        onChange={handleInputChange} />
      </Form.Group>
      <Button onClick={handleFormSubmit} variant="primary" type="button">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
