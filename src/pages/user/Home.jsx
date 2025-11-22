import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardsDisplay from "../../components/organisms/CardsDisplay";
import { agregarAlCarrito } from "../../data/Cart";
import ProductoService from "../../services/Producto";

function Home() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await ProductoService.getAllProductos();
        setProductos(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };
    fetchProductos();
  }, []);


  const content = productos.slice(0, 4).map((product) => ({
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
  }));

  return (
    <div className="max-w-6xl mx-auto my-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Takicardix</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Bienvenidos a nuestro sitio web.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Productos destacados
        </h2>
        <CardsDisplay content={content} isCardList={false} />
      </section>
    </div>
  );
}

export default Home;
