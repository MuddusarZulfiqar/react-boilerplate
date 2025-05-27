// ----------------------------------------
// Axios Instance with Interceptors
// Path: src/api/axiosInstance.ts
// ----------------------------------------

import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
  } from 'axios';
  import nProgress from 'nprogress';
  import { settings } from '@/constants';
  
  // Create an Axios instance
  export const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: settings.apiWaitTime, // e.g. 8000 ms
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // ----------------------------------------
  // Request Interceptor
  // ----------------------------------------
  
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      nProgress.start();
  
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      nProgress.done();
      return Promise.reject(error);
    }
  );
  
  // ----------------------------------------
  // Response Interceptor
  // ----------------------------------------
  
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      nProgress.done();
      return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
      nProgress.done();

      // Handle unauthorized error
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
      }
  
      return Promise.reject(error);
    }
  );
  