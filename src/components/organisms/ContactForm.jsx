import { useState } from 'react';
import LoginForm from '../molecules/LoginForm';
import Button from '../atoms/Button';

function ContactForm() {

  const contactFields = [
    { label: "Nombre", name: "nombre", type: "text", required: true },
    { label: "Correo", name: "correo", type: "email", required: true, placeholder: "ejemplo@duoc.cl" },
    { label: "Teléfono", name: "telefono", type: "tel", required: true, placeholder: "9XXXXXXXX" },
    { label: "Mensaje", name: "mensaje", type: "textarea", required: true }
  ];

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, telefono, mensaje } = formData;
    const errores = [];

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

    const telPattern = /^9\d{8}$/;
    if (!telPattern.test(telefono))
      errores.push("El teléfono debe tener 9 dígitos y empezar con 9.");

    if (mensaje.trim() === "") errores.push("El mensaje es obligatorio.");

    if (errores.length > 0) {
      alert(errores.join("\n"));
      return;
    }

    let totalContactos = parseInt(localStorage.getItem("total_contactos")) || 0;
    totalContactos++;
    localStorage.setItem("total_contactos", totalContactos);

    localStorage.setItem(`contacto_${totalContactos}_nombre`, nombre);
    localStorage.setItem(`contacto_${totalContactos}_correo`, correo);
    localStorage.setItem(`contacto_${totalContactos}_telefono`, telefono);
    localStorage.setItem(`contacto_${totalContactos}_mensaje`, mensaje);

    alert("Mensaje enviado exitosamente.");
    setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginForm fields={contactFields} formData={formData} handleChange={handleChange} />
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button type="submit" >Enviar</Button>
        <Button
          className="btn-danger"
          type="button"
          onClick={() =>
            setFormData({
              nombre: "",
              correo: "",
              telefono: "",
              mensaje: "",
            })
          }
        >
          Limpiar
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;




