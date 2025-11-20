import { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function Cart() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(datos);
  }, []);

  const eliminarItem = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Container className="my-5 card">
      <h1>Tu carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover className=' table-dark'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr >
            </thead>
            <tbody>
              {carrito.map((item, index) => (
                <tr key={index} className=' table-warning'>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <Button variant="danger" onClick={() => eliminarItem(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ${total}</h4>
        </>
      )}
    </Container>
  );
}

export default Cart;
