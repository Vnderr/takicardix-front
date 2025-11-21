import { Container, Card } from 'react-bootstrap';
import Text from '../../components/atoms/Text.jsx';
import { useState } from "react";
import Forms from '../../components/templates/Forms';

function RegistroForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    confirmarCorreo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
    confirmarTelefono: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = [];

    const {
      nombre,
      correo,
      confirmarCorreo,
      contraseña,
      confirmarContraseña,
      telefono,
      confirmarTelefono,
    } = formData;

    const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombrePattern.test(nombre))
      errores.push("El nombre solo puede contener letras y espacios.");
    if (nombre.trim() === "") errores.push("El nombre es obligatorio.");
    if (nombre.length > 100)
      errores.push("El nombre no puede exceder 100 caracteres.");

    const correoPattern = /^[\w.-]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (correo.trim() === "") errores.push("El correo es obligatorio.");
    else if (!correoPattern.test(correo))
      errores.push("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    if (correo !== confirmarCorreo)
      errores.push("Los correos no coinciden.");

    const contraseñaPattern = /^[A-Za-z0-9]+$/;
    if (contraseña.length < 6 || contraseña.length > 15)
      errores.push("La contraseña debe tener entre 6 y 15 caracteres.");
    else if (!contraseñaPattern.test(contraseña))
      errores.push("La contraseña solo puede contener letras y números.");
    if (contraseña !== confirmarContraseña)
      errores.push("Las contraseñas no coinciden.");

    const telPattern = /^9\d{8}$/;
    if (!telPattern.test(telefono))
      errores.push("El teléfono debe tener 9 dígitos y empezar con 9.");
    if (telefono !== confirmarTelefono)
      errores.push("Los teléfonos no coinciden.");

    if (errores.length > 0) {
      alert(errores.join("\n"));
    } else {
      let totalUsuarios = parseInt(localStorage.getItem("total_usuarios")) || 0;
      totalUsuarios++;
      localStorage.setItem("total_usuarios", totalUsuarios);

      localStorage.setItem(`usuario_${totalUsuarios}_nombre`, nombre);
      localStorage.setItem(`usuario_${totalUsuarios}_correo`, correo);
      localStorage.setItem(`usuario_${totalUsuarios}_contraseña`, contraseña);
      localStorage.setItem(`usuario_${totalUsuarios}_telefono`, telefono);

      alert("Registro exitoso :D");
      setFormData({
        nombre: "",
        correo: "",
        confirmarCorreo: "",
        contraseña: "",
        confirmarContraseña: "",
        telefono: "",
        confirmarTelefono: "",
      });
    }
  };

  // 🔑 Definimos el contenido dinámico para Forms
  const content = [
    {
      type: "inputs",
      inputs: [
        { label: "Nombre", name: "nombre", type: "text", placeholder: "Ingresa tu nombre", value: formData.nombre, onChange: handleChange },
        { label: "Correo", name: "correo", type: "email", placeholder: "Ingresa tu correo", value: formData.correo, onChange: handleChange },
        { label: "Confirmar Correo", name: "confirmarCorreo", type: "email", placeholder: "Repite tu correo", value: formData.confirmarCorreo, onChange: handleChange },
        { label: "Contraseña", name: "contraseña", type: "password", placeholder: "Ingresa tu contraseña", value: formData.contraseña, onChange: handleChange },
        { label: "Confirmar Contraseña", name: "confirmarContraseña", type: "password", placeholder: "Repite tu contraseña", value: formData.confirmarContraseña, onChange: handleChange },
        { label: "Teléfono", name: "telefono", type: "text", placeholder: "Ej: 912345678", value: formData.telefono, onChange: handleChange },
        { label: "Confirmar Teléfono", name: "confirmarTelefono", type: "text", placeholder: "Repite tu teléfono", value: formData.confirmarTelefono, onChange: handleChange }
      ]
    },
    {
      type: "button",
      text: "Registrarse",
      className: "btn btn-primary mt-3",
      onClick: handleSubmit
    },
    {
      type: "button",
      text: "Limpiar",
      className: "btn btn-danger mt-3",
      onClick: () => setFormData({
        nombre: "",
        correo: "",
        confirmarCorreo: "",
        contraseña: "",
        confirmarContraseña: "",
        telefono: "",
        confirmarTelefono: "",
      })
    }
  ];

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Text variant="h2">Formulario de Registro</Text>
          <Text variant="p">
            Por favor completa todos los campos para crear tu cuenta.
          </Text>

          <Forms content={content} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegistroForm;
