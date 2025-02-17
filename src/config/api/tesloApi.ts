import axios from "axios";
import { StorageAdapter } from "../adapters/storage-adapter";

//UP:CHANGE ADDRESS
export const API_URL = 'http://192.168.1.9:3000/api';


const tesloApi = axios.create({ 
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

    // TODO Interceptors
    tesloApi.interceptors.request.use(
        async (config) => {

            const token = await StorageAdapter.getItem('token');
            if ( token ) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        }
    );


    export {
        tesloApi,
    }