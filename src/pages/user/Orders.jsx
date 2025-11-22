import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VentaService from "../../services/Venta";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario_logueado"));
        if (!usuario) {
            setError("No hay sesión activa");
            return;
        }

        const fetchOrders = async () => {
            try {
                const data = await VentaService.getVentasByUsuario(usuario.usuario_id);
                setOrders(data);
            } catch (err) {
                setError("Error al cargar las compras");
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="max-w-4xl mx-auto my-10 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Mis Compras</h2>
            {error && <p className="text-red-600">{error}</p>}
            {orders.length === 0 ? (
                <p className="text-gray-600">No tienes compras registradas.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {orders.map((order) => (
                        <li key={order.venta_id} className="py-4 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Compra #{order.venta_id}</p>
                                <p className="text-sm text-gray-500">
                                    Fecha: {new Date(order.fecha).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-500">Total: ${order.total}</p>
                            </div>
                            <Link
                                to={`/orders/${order.venta_id}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                            >
                                Ver detalle
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Orders;
