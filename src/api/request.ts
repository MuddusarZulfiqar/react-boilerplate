// src/api/axiosInstance.ts
import {settings} from '@/constants';
import axios from 'axios';
import nProgress from 'nprogress';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: settings.apiWaitTime, // 8 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add interceptors here if needed (auth tokens, error handling)
});

axiosInstance.interceptors.request.use(
    (config) => {
        nProgress.start();
        config.headers['Authorization'] = localStorage.getItem("token")
            ? `Bearer ${localStorage.getItem("token")}`
            : "";
        return config;
    },
    (error) => {
        nProgress.done();
        // check if error is section timeout
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        nProgress.done();
        return response;
    },
    (error) => {
        nProgress.done();
        if (error?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
        }
        return Promise.reject(error);
    }
);
        
// ? Path: src/utils/request.js