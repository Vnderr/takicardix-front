import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Producto from "../../services/Producto";
import CardsDisplay from "../../components/organisms/CardsDisplay";
import { agregarAlCarrito } from "../../data/Cart";

function Products() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await Producto.getAllProductos();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos: " + (err.response?.data || err.message));
      }
    };

    fetchProductos();
  }, []);

  const content = Array.isArray(productos)
    ? productos.slice(0, 4).map((product) => ({
      card: [
        { type: "image", src: product.imageUrl, alt: product.nombre },
        { type: "text", variant: "h5", text: product.nombre },
        { type: "text", variant: "p", text: product.descripcion },
        { type: "text", variant: "p", text: `$${product.precio}` },
        {
          type: "button",
          text: "Ver detalles",
          onClick: () => navigate(`/product/${product.producto_id}`),
          className:
            "mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition",
        },
        {
          type: "button",
          text: "Agregar al carrito",
          onClick: () =>
            agregarAlCarrito(product.producto_id, product.nombre, product.precio),
          className:
            "mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition",
        },
      ],
    }))
    : [];


  return (
    <div className="p-6">
      <h2 className="mb-4">Productos</h2>
      {error && <p className="text-red-500">{error}</p>}
      <CardsDisplay content={content} isCardList={false} />
    </div>
  );
}

export default Products;

