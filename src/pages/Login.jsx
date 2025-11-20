import { useState } from 'react';
import LoginForm from '../components/molecules/LoginForm';
import Button from '../components/atoms/Button';
//import UserService from "../services/UserService";

function FormLogin() {

  const loginFields = [
    { label: "Correo", name: "correo", type: "email", placeholder: "ejemplo@correo.com" },
    { label: "Contraseña", name: "contraseña", type: "password", placeholder: "********" }
  ];

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

  return (
    <main className="container my-5 card">
      <h2>Iniciar sesión</h2>

      <div className="card" >
        <form onSubmit={handleSubmit} className="forma-inicio ">
          <LoginForm fields={loginFields} formData={formData} handleChange={handleChange} />

          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button type="submit">Iniciar sesión</Button>
            <Button
              className="btn-danger"
              type="button"
              onClick={() =>
                setFormData({
                  correo: "",
                  contraseña: "",
                })
              }
            >
              Limpiar
            </Button>
          </div>

        </form>
      </div>
    </main>
  );
}

export default FormLogin;
