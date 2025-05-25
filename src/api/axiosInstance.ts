// src/api/axiosInstance.ts
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add interceptors here if needed (auth tokens, error handling)
});
