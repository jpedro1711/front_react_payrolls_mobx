import axios from 'axios';
import { BaseStore } from '../../stores/BaseStore';

const ApiClient = axios.create({
    baseURL: "http://localhost:5120"
});

ApiClient.interceptors.request.use(
    async (config) => {
        const token = BaseStore.userStore.userToken;
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default ApiClient;