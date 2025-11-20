import { Container, Card } from 'react-bootstrap';
import RegisterLogin from '../components/organisms/RegisterLogin.jsx';
import Text from '../components/atoms/Text.jsx';

function RegistroPage() {

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Text variant="h2">Formulario de Registro</Text>
          <Text variant="p">Por favor completa todos los campos para crear tu cuenta.</Text>
          <RegisterLogin />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegistroPage;
