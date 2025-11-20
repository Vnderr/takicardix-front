import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/Products';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button';
import { agregarAlCarrito } from '../data/Cart';


function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const src = "../" + product.imagen

  if (!product) {
    return (
      <Container className="my-5">
        <h1 className='texth'>Producto no encontrado</h1>
      </Container>

    );
  }


  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card>
        <Image src={src} alt={product.nombre} className="img_pd" />
        <Card.Body>
          <Text variant="h2">{product.nombre}</Text>
          <Text variant="p">{product.descripcion}</Text>
          <Text variant="p">{product.ingredientes}</Text>
          <Text variant="p">{product.especificaciones}</Text>
          <Text variant="h4">${product.precio}</Text>
          <Button
            variant="success"
            onClick={() =>
              agregarAlCarrito(product.id, product.nombre, product.precio)
            }
            className="mt-2 btn-grow"
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default ProductDetail;