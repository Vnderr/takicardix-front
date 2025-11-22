import { useState } from "react";
import Forms from "../../components/templates/Forms";
import Usuario from "../../services/Usuario"; // 👈 importa el service correcto

function FormLogin() {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "", // 👈 sin tilde
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { correo, contrasena } = formData;

    try {
      // 👇 el service envía { correo, contrasena } al backend
      const usuario = await Usuario.login({ correo, contrasena });

      // Si el backend devuelve el usuario, mostramos su nombre
      alert(`Hola :D ${usuario.nombre}`);

      // Limpiamos el formulario
      setFormData({ correo: "", contrasena: "" });
    } catch (err) {
      alert("Impostor D: Credenciales incorrectas");
    }
  };

  const content = [
    {
      type: "inputs",
      inputs: [
        {
          label: "Correo",
          name: "correo",
          type: "email",
          placeholder: "ejemplo@correo.com",
          value: formData.correo,
          onChange: handleChange,
        },
        {
          label: "Contraseña",
          name: "contrasena", // 👈 sin tilde
          type: "password",
          placeholder: "********",
          value: formData.contrasena,
          onChange: handleChange,
        },
      ],
    },
    {
      type: "button",
      text: "Iniciar sesión",
      className: "btn btn-primary mt-3",
      onClick: handleSubmit,
    },
    {
      type: "button",
      text: "Limpiar",
      className: "btn btn-danger mt-3",
      onClick: () => setFormData({ correo: "", contrasena: "" }),
    },
  ];

  return (
    <main className="container my-5 card p-4">
      <h2>Iniciar sesión</h2>
      <Forms content={content} />
    </main>
  );
}

export default FormLogin;
