// "use server"
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;