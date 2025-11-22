import { useEffect, useState } from "react";
import ProductoService from "../../services/Producto";

function Products() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await ProductoService.getAllProductos();
        console.log("Productos recibidos:", data); // 👀 debe ser un array con 10 objetos
        setProductos(Array.isArray(data) ? data : [data]); // fuerza array si viene un objeto
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };
    fetchProductos();
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {productos.map((p, index) => (
        <div
          key={index} // 👈 usa index en vez de producto_id
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >
          <img
            src={p.imageUrl}
            alt={p.nombre}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-lg font-bold mt-2">{p.nombre}</h3>
          <p className="text-gray-600">{p.descripcion}</p>
          <p className="text-blue-600 font-semibold mt-2">${p.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
