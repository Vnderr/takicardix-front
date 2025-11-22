import { useState } from "react";
import Forms from "../../components/templates/Forms";
import Usuario from "../../services/Usuario";

function FormLogin() {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { correo, contraseña } = formData;

    try {
      const usuario = await Usuario.login(correo, contraseña);
      alert(`Hola :D ${usuario.nombre}`);
      setFormData({ correo: "", contraseña: "" });
    } catch (err) {
      alert("Impostor D:");
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
          name: "contraseña",
          type: "password",
          placeholder: "********",
          value: formData.contraseña,
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
      onClick: () => setFormData({ correo: "", contraseña: "" }),
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
