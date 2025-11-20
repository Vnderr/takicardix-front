import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';
import { agregarAlCarrito } from '../../data/Cart';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="m-2 card">
      <Image src={product.imagen} alt={product.nombre} className="card-img-top w-85 mx-auto mt-2" />
      <Card.Body>
        <CardBody
          title={product.nombre}
          description={product.descripcion}
          price={product.precio}
          ingredientes={product.ingredientes}
        />
        <Button variant="primary" onClick={() => navigate(`/products/${product.id}`)}>
          Ver detalles
        </Button>
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
  );
}

export default ProductCard;
