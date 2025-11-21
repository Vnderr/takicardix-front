import { Container } from 'react-bootstrap';
import CardsDisplay from '../../components/organisms/CardsDisplay';

function About() {
  const content = [
    {
      card: [
        { type: "text", variant: "h5", text: "Sobre Nosotros" },
        { type: "text", variant: "p", text: "Somos un grupo de estudiantes apasionados por la tecnología y el aprendizaje. Creamos esta tienda en línea como parte de nuestro proyecto educativo para aprender programación." }
      ]
    },
    {
      card: [
        { type: "text", variant: "h5", text: "Nuestra Misión" },
        { type: "text", variant: "p", text: "Nuestro objetivo es ofrecer una experiencia sencilla y divertida para quienes quieren descubrir nuevos productos y conocer cómo funciona una tienda online." }
      ]
    },
    {
      card: [
        { type: "text", variant: "h5", text: "Nuestro Equipo" },
        { type: "text", variant: "p", text: "Unimos nuestros conocimientos para crear esta web, aprendiendo a usar HTML, CSS y JavaScript. Valoramos la colaboración y la creatividad." },
        { type: "list", items: ["Benjamin - Programador", "Brad - Programador", "Anderson - Programador"] }
      ]
    }
  ];

  return (
    <Container className="my-5">
      <h1 className='texth'>Quiénes Somos</h1>
      <CardsDisplay content={content} isCardList={false} />
    </Container>
  );
}

export default About;



