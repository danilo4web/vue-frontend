import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: "http://0.0.0.0:8080/api/v1/"
});

export default api;