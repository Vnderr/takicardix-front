import { useState } from 'react';
import Forms from '../../components/templates/Forms';

function Contact() {
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

    // 🔑 Aquí definimos el contenido dinámico para Forms
    const content = [
        {
            type: "inputs",
            inputs: [
                { label: "Nombre", name: "nombre", type: "text", required: true, value: formData.nombre, onChange: handleChange },
                { label: "Correo", name: "correo", type: "email", required: true, placeholder: "ejemplo@duoc.cl", value: formData.correo, onChange: handleChange },
                { label: "Teléfono", name: "telefono", type: "tel", required: true, placeholder: "9XXXXXXXX", value: formData.telefono, onChange: handleChange },
                { label: "Mensaje", name: "mensaje", type: "textarea", required: true, value: formData.mensaje, onChange: handleChange }
            ]
        },
        {
            type: "button",
            text: "Enviar",
            className: "btn btn-primary mt-3",
            onClick: handleSubmit
        },
        {
            type: "button",
            text: "Limpiar",
            className: "btn btn-danger mt-3",
            onClick: () => setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" })
        }
    ];

    return (
        <main className="container my-5 card p-4">
            <h2>¿Tienes dudas? Escríbenos</h2>
            <Forms content={content} />
        </main>
    );
}

export default Contact;
