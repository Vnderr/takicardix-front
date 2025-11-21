import axios from 'axios';

const BASE_URL = 'https://takicardix.onrender.com/api/metodosPago';

class MetodoPagoService {

    async getAllMetodosPago() {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los metodos de pago:', error);
            throw error;
        }
    }

    async createMetodoPago(metodoPagoData) {
        try {
            const response = await axios.post(BASE_URL, metodoPagoData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al crear el metodo de pago:', error.response?.data || error.message);
            throw error;
        }
    }

    async updateMetodoPago(id, metodoPagoData) {
        try {
            const response = await axios.patch(`${BASE_URL}/${id}`, metodoPagoData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el metodo de pago:', error);
            throw error;
        }
    }

    async deleteMetodoPago(id) {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return true;
        } catch (error) {
            console.error('Error al eliminar el metodo de pago:', error);
            throw error;
        }
    }
}

export default new MetodoPagoService();
