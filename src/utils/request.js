/*
  ! @Author: Muddusar Zulfiqar
  ! @Last Modified by: Muddusar Zulfiqar
  * Description: This file contains the request file for the application.
*/
import axios from "axios";
import NProgress from "nprogress";
import {config} from "../constants";

const request = axios.create({
    baseURL: config.API_URL,
    timeout: config.API_TIMEOUT,
    // withCredentials: true,
});

request.interceptors.request.use(
    (config) => {
        config.headers['X-Access-Token'] = localStorage.getItem("token")
            ? `${localStorage.getItem("token")}`
            : "";
        // config.headers.Cookie = document.cookie;
        NProgress.start();
        return config;
    },
    (error) => {
        NProgress.done();
        // check if error is section timeout
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response.data;
    },
    (error) => {
        NProgress.done();
        // if (error?.response?.status === 401) {
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("user");
        //   window.location.reload();
        // }
        return Promise.reject(error);
    }
);
        
export default request;

// ? Path: src/utils/request.js
