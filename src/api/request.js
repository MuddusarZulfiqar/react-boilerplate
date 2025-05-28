// ----------------------------------------
// Axios Instance with Interceptors
// Path: src/api/axiosInstance.ts
// ----------------------------------------
import axios from 'axios';
import nProgress from 'nprogress';
import { settings } from '@/constants';
// Create an Axios instance
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: settings.apiWaitTime, // e.g. 8000 ms
    headers: {
        'Content-Type': 'application/json',
    },
});
// ----------------------------------------
// Request Interceptor
// ----------------------------------------
axiosInstance.interceptors.request.use((config) => {
    nProgress.start();
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    nProgress.done();
    return Promise.reject(error);
});
// ----------------------------------------
// Response Interceptor
// ----------------------------------------
axiosInstance.interceptors.response.use((response) => {
    nProgress.done();
    return response;
}, (error) => {
    nProgress.done();
    // Handle unauthorized error
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }
    return Promise.reject(error);
});
