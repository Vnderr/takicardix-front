import { useEffect, useState } from "react";
import Text from "../../components/atoms/Text.jsx";
import Forms from "../../components/templates/Forms";
import UsuarioS from "../../services/Usuario";

function Profile() {
    const [usuario, setUsuario] = useState(null);
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        contrasena: "",
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("usuario_logueado"));
        if (userData) {
            setUsuario(userData);
            setFormData({
                nombre: userData.nombre,
                correo: userData.correo,
                contrasena: "",
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updated = await Usuario.update({
                usuario_id: usuario.usuario_id,
                nombre: formData.nombre,
                correo: formData.correo,
                contrasena: formData.contrasena,
                rol: usuario.rol,
            });
            alert("Perfil actualizado correctamente");
            setUsuario(updated);
            localStorage.setItem("usuario_logueado", JSON.stringify(updated));
        } catch (err) {
            alert("Error al actualizar perfil");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("usuario_logueado");
        alert("Sesión cerrada");
        window.location.href = "/auth/login";
    };

    const content = [
        {
            type: "inputs",
            inputs: [
                {
                    label: "Nombre",
                    name: "nombre",
                    type: "text",
                    placeholder: "Tu nombre",
                    value: formData.nombre,
                    onChange: handleChange,
                },
                {
                    label: "Correo",
                    name: "correo",
                    type: "email",
                    placeholder: "Tu correo",
                    value: formData.correo,
                    onChange: handleChange,
                },
                {
                    label: "Contraseña",
                    name: "contrasena",
                    type: "password",
                    placeholder: "Nueva contraseña (opcional)",
                    value: formData.contrasena,
                    onChange: handleChange,
                },
            ],
        },
        {
            type: "button",
            text: "Actualizar Perfil",
            className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-3",
            onClick: handleUpdate,
        },
        {
            type: "button",
            text: "Cerrar Sesión",
            className: "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-3",
            onClick: handleLogout,
        },
    ];

    return (
        <div className="max-w-2xl mx-auto my-10 bg-white shadow-md rounded-lg p-6">
            <Text variant="h2" className="text-2xl font-bold mb-4">Mi Perfil</Text>
            {usuario ? (
                <>
                    <Text variant="p" className="mb-4">
                        Bienvenido <span className="font-semibold">{usuario.nombre}</span>
                    </Text>
                    <Forms content={content} />
                </>
            ) : (
                <Text variant="p">No hay sesión activa</Text>
            )}
        </div>
    );
}

export default Profile;
