// src/api/axiosInstance.ts
import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add interceptors here if needed (auth tokens, error handling)
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = localStorage.getItem("token")
            ? `Bearer ${localStorage.getItem("token")}`
            : "";
        return config;
    },
    (error) => {
        // check if error is section timeout
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // NProgress.done();
        if (error?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
        }
        return Promise.reject(error);
    }
);
        
// ? Path: src/utils/request.js