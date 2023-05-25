import React from "react";
import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { isBrowser } from "react-device-detect";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" style={{ fontSize: '1.2rem', 
    paddingTop: isBrowser ? '0' : 'auto', paddingBottom: isBrowser ? '4px' : 'auto'}}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="text-center" style={{fontSize: '1.2rem', paddingLeft: '5px'}}>
            דף הבית
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/neworg" passHref>
              <Nav.Link>הגשת עסק חדש</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>אודות</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
