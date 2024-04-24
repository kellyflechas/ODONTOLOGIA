import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import od from "../assets/img/od.png"

function Basic() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={od} alt="" className="logo-od"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="Ortodoncia">Ortodoncia</NavDropdown.Item>
              <NavDropdown.Item href="Limpieza dental">Limpieza dental</NavDropdown.Item>
              <NavDropdown.Item href="Odontopediatria">Odontopediatria</NavDropdown.Item>
              <NavDropdown.Item href="Protesis dental">Protesis dental</NavDropdown.Item>
            </NavDropdown>
            <div className='iniciar'>
            <Nav.Link href="#link">Iniciar sesion</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Basic;