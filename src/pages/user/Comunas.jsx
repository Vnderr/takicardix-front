import React, { useState, useEffect } from "react";
import Section from "../../../components/templates/Section";
import CreateModal from "../../../components/organisms/CreateModal";
import Button from "../../../components/atoms/Button";
import ComunaService from "../../../services/ComunaService";
import { generarMensaje } from "../../../utils/GenerarMensaje";

const createInputs = [
    { name: "nombre", type: "text", placeholder: "Nombre de la comuna", required: true },
    { name: "regionId", type: "number", placeholder: "ID de la región", required: true }
];

function Comunas() {
    const [comunas, setComunas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [editingComuna, setEditingComuna] = useState(null);

    useEffect(() => {
        loadComunas();
    }, []);

    const loadComunas = async () => {
        try {
            setLoading(true);
            const data = await ComunaService.getAllComunas();
            const dataWithActions = data.map(comuna => ({
                ...comuna,
                onEdit: () => handleOpenEdit(comuna),
                onDelete: () => handleDelete(comuna.comuna_id),
            }));
            setComunas(dataWithActions);
        } catch (error) {
            generarMensaje("No se pudieron cargar las comunas", "warning");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenEdit = (comuna) => {
        setEditingComuna(comuna);
        setIsModalOpen(true);
    };

    const handleCreate = async (formData) => {
        setSubmitLoading(true);
        try {
            if (editingComuna) {
                await ComunaService.updateComuna(editingComuna.comuna_id, formData);
                generarMensaje("¡Comuna actualizada con éxito!", "success");
            } else {
                await ComunaService.createComuna(formData);
                generarMensaje("¡Comuna creada con éxito!", "success");
            }
            await loadComunas();
            setIsModalOpen(false);
            setEditingComuna(null);
        } catch (error) {
            generarMensaje("Error al guardar la comuna", "warning");
        } finally {
            setSubmitLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("¿Estás seguro de eliminar esta comuna?")) return;
        try {
            await ComunaService.deleteComuna(id);
            generarMensaje("¡Comuna eliminada con éxito!", "success");
            await loadComunas();
        } catch (error) {
            generarMensaje("Error al eliminar la comuna", "warning");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {loading && (
                <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
                </div>
            )}

            <div className="container py-6 flex justify-end">
                <Button
                    text="Crear Comuna"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md active:scale-95 transition-all"
                />
            </div>

            <Section content={[{ service: "comunas", data: comunas }]} className="container" />

            <CreateModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingComuna(null);
                }}
                onSubmit={handleCreate}
                inputsConfig={createInputs}
                title={editingComuna ? "Editar Comuna" : "Crear Nueva Comuna"}
                submitText={editingComuna ? "Actualizar" : "Crear"}
                loading={submitLoading}
                initialData={editingComuna || {}}
            />
        </div>
    );
}

export default Comunas;
