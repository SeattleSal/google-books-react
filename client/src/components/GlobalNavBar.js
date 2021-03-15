import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function GlobalNavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">My Google Books</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavBar;
