import axios from 'axios';

const BASE_URL = 'https://takicardix.onrender.com/api/comunas';

class ComunaService {

    async getAllComunas() {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las Comunas:', error);
            throw error;
        }
    }

    async createComuna(comunaData) {
        try {
            const response = await axios.post(BASE_URL, comunaData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al crear la Comuna:', error.response?.data || error.message);
            throw error;
        }
    }

    async updateComuna(id, comunaData) {
        try {
            const response = await axios.patch(`${BASE_URL}/${id}`, comunaData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar la Comuna:', error);
            throw error;
        }
    }

    async deleteComuna(id) {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return true;
        } catch (error) {
            console.error('Error al eliminar la Comuna:', error);
            throw error;
        }
    }
}

export default new ComunaService();
