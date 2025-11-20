import axios from 'axios';

const BASE_URL = 'https://takicardix.onrender.com/api/usuarios';

class UserService {
    login(usuario) {
        return axios.post(`${BASE_URL}/login`, usuario);
    }

    createUser(usuario) {
        return axios.post(`${BASE_URL}`, usuario);
    }
}

export default new UserService();


