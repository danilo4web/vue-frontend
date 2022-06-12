
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: "http://0.0.0.0:8080/api/v1/"
});

api.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");

export default api;