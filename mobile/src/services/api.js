import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.2.17.119:3333',
});

export default api;