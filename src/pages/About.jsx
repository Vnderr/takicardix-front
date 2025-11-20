import { Container, Row } from 'react-bootstrap';
import AboutCard from '../components/organisms/AboutCard';

function About() {
  return (
    <Container className="my-5">
      <h1  className='texth'>Quiénes Somos</h1>
      <Row>
        <AboutCard
          title="Sobre Nosotros"
          text="Somos un grupo de estudiantes apasionados por la tecnología y el aprendizaje. Creamos esta tienda en línea como parte de nuestro proyecto educativo para aprender programación."
        />
        <AboutCard
          title="Nuestra Misión"
          text="Nuestro objetivo es ofrecer una experiencia sencilla y divertida para quienes quieren descubrir nuevos productos y conocer cómo funciona una tienda online."
        />
        <AboutCard
          title="Nuestro Equipo"
          text="Unimos nuestros conocimientos para crear esta web, aprendiendo a usar HTML, CSS y JavaScript. Valoramos la colaboración y la creatividad."
          list={["Benjamin - Programador", "Brad - Programador", "Anderson - Programador"]}
        />
      </Row>
    </Container>
  );
}

export default About;


