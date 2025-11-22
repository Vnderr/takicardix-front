import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductoService from "../../services/Producto";
import CardsDisplay from "../../components/organisms/CardsDisplay";
import { agregarAlCarrito } from "../../data/Cart";

function Products() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await ProductoService.getAllProductos();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos: " + (err.response?.data || err.message));
      }
    };

    fetchProductos();
  }, []);

  const content = productos.map(product => ({
    card: [
      { type: "image", src: product.imageUrl, alt: product.nombre },
      { type: "text", variant: "h5", text: product.nombre },
      { type: "text", variant: "p", text: product.descripcion },
      { type: "text", variant: "p", text: `$${product.precio}` },
      { type: "button", text: "Ver detalles", onClick: () => navigate(`/product/${product.producto_id}`) },
      { type: "button", text: "Agregar al carrito", onClick: () => agregarAlCarrito(product.producto_id, product.nombre, product.precio) }
    ]
  }));

  return (
    <div className="p-6">
      <h2 className="mb-4">Productos</h2>
      {error && <p className="text-red-500">{error}</p>}
      <CardsDisplay content={content} isCardList={false} />
    </div>
  );
}

export default Products;

