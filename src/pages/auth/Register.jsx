import { Container, Card } from 'react-bootstrap';
import Text from '../../components/atoms/Text.jsx';
import { useState } from "react";
import Forms from '../../components/templates/Forms';
import Usuario from "../../services/Usuario"; 

function RegistroForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    confirmarCorreo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errores = [];

    const {
      nombre,
      correo,
      confirmarCorreo,
      contraseña,
      confirmarContraseña,
      telefono,
    } = formData;

    // Validaciones
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

    if (errores.length > 0) {
      alert(errores.join("\n"));
    } else {
      try {
        // Llamada al backend
        await Usuario.createUsuario({
          nombre,
          correo,
          contrasena: contraseña, // ojo: backend espera "contrasena" sin tilde
          telefono,
        });

        alert("Registro exitoso :D");
        setFormData({
          nombre: "",
          correo: "",
          confirmarCorreo: "",
          contraseña: "",
          confirmarContraseña: "",
          telefono: "",
        });
      } catch (err) {
        alert("Error al registrar usuario. Intenta nuevamente.");
      }
    }
  };

  const content = [
    {
      type: "inputs",
      inputs: [
        { label: "Nombre", name: "nombre", type: "text", placeholder: "Ingresa tu nombre", value: formData.nombre, onChange: handleChange },
        { label: "Correo", name: "correo", type: "email", placeholder: "Ingresa tu correo", value: formData.correo, onChange: handleChange },
        { label: "Confirmar Correo", name: "confirmarCorreo", type: "email", placeholder: "Repite tu correo", value: formData.confirmarCorreo, onChange: handleChange },
        { label: "Contraseña", name: "contraseña", type: "password", placeholder: "Ingresa tu contraseña", value: formData.contraseña, onChange: handleChange },
        { label: "Confirmar Contraseña", name: "confirmarContraseña", type: "password", placeholder: "Repite tu contraseña", value: formData.confirmarContraseña, onChange: handleChange },
        { label: "Teléfono", name: "telefono", type: "text", placeholder: "Ej: 912345678", value: formData.telefono, onChange: handleChange }
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
