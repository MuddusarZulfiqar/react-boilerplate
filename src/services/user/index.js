import {request} from "@/utils/index.js";
import apiRoutes from "@/constants/api.js";

export const getMe = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await request.post(apiRoutes.user.me);
        return response.data;
    } catch (error) {
        throw error;
    }
};