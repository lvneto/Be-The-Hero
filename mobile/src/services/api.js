import axios from 'axios';
const url = 'http://10.0.0.109:3333';

const api = axios.create({
    baseURL: url,
    timeout:100
});
export default api;