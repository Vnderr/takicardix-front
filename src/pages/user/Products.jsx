import CardsDisplay from "../../components/organisms/CardsDisplay";
import products from "../../data/Products";
import { useNavigate } from "react-router-dom";
import { agregarAlCarrito } from "../../data/Cart";

function Products() {
  const navigate = useNavigate();

  const content = products.map(product => ({
    card: [
      { type: "image", src: product.imagen, alt: product.nombre },
      { type: "text", variant: "h5", text: product.nombre },
      { type: "text", variant: "p", text: product.descripcion },
      { type: "text", variant: "p", text: `$${product.precio}` },
      { type: "button", text: "Ver detalles", onClick: () => navigate(`/product/${product.id}`) },
      { type: "button", text: "Agregar al carrito", onClick: () => agregarAlCarrito(product.id, product.nombre, product.precio) }
    ]
  }));

  return (
    <div className="p-6">
      <h2 className="mb-4">Productos</h2>
      <CardsDisplay content={content} isCardList={false} />
    </div>
  );
}

export default Products;
