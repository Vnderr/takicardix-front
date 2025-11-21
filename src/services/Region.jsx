import axios from 'axios';

const BASE_URL = 'https://takicardix.onrender.com/api/regiones';

class RegionService {

    async getAllRegiones() {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las regiones:', error);
            throw error;
        }
    }

    async getRegionById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener la region:', error);
            throw error;
        }
    }

    async createRegion(regionData) {
        try {
            const response = await axios.post(BASE_URL, regionData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al crear la region:', error.response?.data || error.message);
            throw error;
        }
    }

    async updateRegion(id, regionData) {
        try {
            const response = await axios.patch(`${BASE_URL}/${id}`, regionData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al actualizar la region:', error);
            throw error;
        }
    }

    async deleteRegion(id) {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return true;
        } catch (error) {
            console.error('Error al eliminar la region:', error);
            throw error;
        }
    }
}

export default new RegionService();
