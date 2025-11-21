import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../../data/Products';
import CardsDisplay from '../../components/organisms/CardsDisplay';
import { agregarAlCarrito } from '../../data/Cart';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="my-5">
        <h1 className='texth'>Producto no encontrado</h1>
      </Container>
    );
  }

  // Construimos el contenido dinámico para este producto
  const content = [
    {
      card: [
        { type: "image", src: "../" + product.imagen, alt: product.nombre, className: "img_pd" },
        { type: "text", variant: "h2", text: product.nombre },
        { type: "text", variant: "p", text: product.descripcion },
        { type: "text", variant: "p", text: product.ingredientes },
        { type: "text", variant: "p", text: product.especificaciones },
        { type: "text", variant: "h4", text: `$${product.precio}` },
        { type: "button", text: "Agregar al carrito", onClick: () => agregarAlCarrito(product.id, product.nombre, product.precio), className: "mt-2 btn-grow btn btn-success" }
      ]
    }
  ];

  return (
    <Container className="my-5 d-flex justify-content-center">
      <CardsDisplay content={content} isCardList={true} />
    </Container>
  );
}

export default ProductDetail;
