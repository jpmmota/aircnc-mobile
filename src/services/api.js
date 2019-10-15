import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.29.59.193:3333',
});

export default api;