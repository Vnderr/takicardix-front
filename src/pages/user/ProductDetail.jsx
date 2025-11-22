import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardsDisplay from "../../components/organisms/CardsDisplay";
import { agregarAlCarrito } from "../../data/Cart";
import Producto from "../../services/Producto"; 

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Llamada al backend para obtener el producto por ID
    Producto.getProductoById(id)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error al cargar producto:", err));
  }, [id]);

  if (!product) {
    return (
      <Container className="my-5">
        <h1 className="texth">Producto no encontrado</h1>
      </Container>
    );
  }

  // Construimos el contenido dinámico para este producto
  const content = [
    {
      card: [
        { type: "image", src: product.imageUrl, alt: product.nombre, className: "img_pd" },
        { type: "text", variant: "h2", text: product.nombre },
        { type: "text", variant: "p", text: product.descripcion },
        // ingredientes y especificaciones ya están dentro de la descripción si los uniste
        { type: "text", variant: "h4", text: `$${product.precio}` },
        {
          type: "button",
          text: "Agregar al carrito",
          onClick: () =>
            agregarAlCarrito(product.producto_id, product.nombre, product.precio),
          className: "mt-2 btn-grow btn btn-success",
        },
      ],
    },
  ];

  return (
    <Container className="my-5 d-flex justify-content-center">
      <CardsDisplay content={content} isCardList={true} />
    </Container>
  );
}

export default ProductDetail;
