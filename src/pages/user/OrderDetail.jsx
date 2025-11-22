import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VentaService from "../../services/Venta";
import ProductoVentaService from "../../services/ProductoVenta";

function OrderDetail() {
    const { id } = useParams(); // id de la venta
    const [order, setOrder] = useState(null);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                const venta = await VentaService.getVentaById(id);
                setOrder(venta);

                const productosVenta = await ProductoVentaService.getProductosByVenta(id);
                setProductos(productosVenta);
            } catch (err) {
                setError("Error al cargar el detalle de la compra");
            }
        };

        fetchOrderDetail();
    }, [id]);

    if (error) return <p className="text-red-600">{error}</p>;
    if (!order) return <p className="text-gray-600">Cargando detalle...</p>;

    return (
        <div className="max-w-3xl mx-auto my-10 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
                Detalle de Compra #{order.venta_id}
            </h2>
            <p className="text-gray-700 mb-2">
                Fecha: {new Date(order.fecha).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">Total: ${order.total}</p>

            <h3 className="text-xl font-semibold mb-2">Productos</h3>
            <ul className="divide-y divide-gray-200">
                {productos.map((p) => (
                    <li
                        key={p.productoVenta_id}
                        className="py-3 flex justify-between items-center"
                    >
                        <span className="font-medium">{p.producto.nombre}</span>
                        <span className="text-gray-600">
                            {p.cantidad} x ${p.producto.precio}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderDetail;
