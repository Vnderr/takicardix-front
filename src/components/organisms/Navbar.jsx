import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Takicardix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link href="/about">Nosotros</Nav.Link>
          </Nav>
          <Nav>
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
            <Nav.Link href="/register">Registrar</Nav.Link>
            <Nav.Link href="/cart">
              🛒 Carrito <span id="conteo-carrito" className="badge bg-secondary">0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
