import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://i.postimg.cc/CL8ZCC8B/logo-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Link to={''} style={{textDecoration:"none"}} ><b className="mt-1 fs-4 ">KOCHI</b></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
