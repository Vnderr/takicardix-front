import { useState } from 'react';
import Forms from '../../components/templates/Forms';

function FormLogin() {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, contraseña } = formData;
    let totalUsuarios = parseInt(localStorage.getItem("total_usuarios")) || 0;
    let usuarioEncontrado = false;
    let nombreUsuario = "";

    for (let i = 1; i <= totalUsuarios; i++) {
      const correoGuardado = localStorage.getItem(`usuario_${i}_correo`);
      const contraseñaGuardada = localStorage.getItem(`usuario_${i}_contraseña`);
      const nombreGuardado = localStorage.getItem(`usuario_${i}_nombre`);

      if (correoGuardado === correo && contraseñaGuardada === contraseña) {
        usuarioEncontrado = true;
        nombreUsuario = nombreGuardado;
        break;
      }
    }

    if (usuarioEncontrado) {
      alert(`Hola :D ${nombreUsuario}`);
    } else {
      alert("Impostor D:");
    }

    setFormData({ correo: '', contraseña: '' });
  };

  // 🔑 Definimos el contenido dinámico para Forms
  const content = [
    {
      type: "inputs",
      inputs: [
        { label: "Correo", name: "correo", type: "email", placeholder: "ejemplo@correo.com", value: formData.correo, onChange: handleChange },
        { label: "Contraseña", name: "contraseña", type: "password", placeholder: "********", value: formData.contraseña, onChange: handleChange }
      ]
    },
    {
      type: "button",
      text: "Iniciar sesión",
      className: "btn btn-primary mt-3",
      onClick: handleSubmit
    },
    {
      type: "button",
      text: "Limpiar",
      className: "btn btn-danger mt-3",
      onClick: () => setFormData({ correo: "", contraseña: "" })
    }
  ];

  return (
    <main className="container my-5 card p-4">
      <h2>Iniciar sesión</h2>
      <Forms content={content} />
    </main>
  );
}

export default FormLogin;
