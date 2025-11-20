import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-black footer py-4 mt-5 " >
      <Container>
        <Row>
  <Col md={4}>
    <h5>Takicardix</h5>
    <p>Tu tienda de energeticas.</p>
  </Col>
  <Col md={4}></Col> {/* Espacio vacío */}
  <Col md={4} className="text-end">
    <h5>Contacto</h5>
    <p>Email: contacto@takicardix.cl</p>
    <p>Teléfono: +56 9 1234 5678</p>
  </Col>
</Row>

        <hr className="bg-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Takicardix. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
