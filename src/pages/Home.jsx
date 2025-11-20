import { Container, Row } from 'react-bootstrap';
import products from '../data/Products'; 
import ProductCard from '../components/organisms/ProductCard';


function Home() {
  return (
    <Container className="my-5">
      <h1 className='texth'>Takicardix</h1>
      <p className='texth'>Bienvenidos a nuestro sitio web.</p>
      <section>
      </section>
      <section className="mt-5">
        <h2 className='texth'>Productos destacados</h2>
        <Row>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Home;
