import { Container } from 'react-bootstrap';
import products from '../../data/Products'; 
import CardsDisplay from '../../components/organisms/CardsDisplay';
import { useNavigate } from 'react-router-dom';
import { agregarAlCarrito } from '../../data/Cart';

function Home() {
  const navigate = useNavigate();

  const content = products.slice(0, 4).map(product => ({
    card: [
      { type: "image", src: product.imagen, alt: product.nombre },
      { type: "text", variant: "h5", text: product.nombre },
      { type: "text", variant: "p", text: product.descripcion },
      { type: "text", variant: "p", text: `$${product.precio}` },
      { type: "button", text: "Ver detalles", onClick: () => navigate(`/product/${product.id}`), className: "btn btn-outline-primary mt-2" },
      { type: "button", text: "Agregar al carrito", onClick: () => agregarAlCarrito(product.id, product.nombre, product.precio), className: "btn btn-success mt-2" }
    ]
  }));

  return (
    <Container className="my-5">
      <h1 className='texth'>Takicardix</h1>
      <p className='texth'>Bienvenidos a nuestro sitio web.</p>

      <section className="mt-5">
        <h2 className='texth'>Productos destacados</h2>
        <CardsDisplay content={content} isCardList={false} />
      </section>
    </Container>
  );
}

export default Home;
