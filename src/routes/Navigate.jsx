import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigate = () => {
  return (
    <header>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">RESTAURANTE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="quienes_somos">Quienes Somos</Nav.Link>
              <Nav.Link href="menu">Menu</Nav.Link>
              <Nav.Link href="reservar">Reservar</Nav.Link>
              <Nav.Link href="contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navigate