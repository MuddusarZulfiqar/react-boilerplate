import {request} from "@/utils/index.js";
import apiRoutes from "@/constants/api.js";


export const loginRequest = async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await request.post(apiRoutes.auth.login, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (data) => {
    return await request.post(apiRoutes.auth.register, data);
};

export const logout = async () => {
    return await request.post(apiRoutes.auth.logout);
}

// Path: src/services/auth/index.js