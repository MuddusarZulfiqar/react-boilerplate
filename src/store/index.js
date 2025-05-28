// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add more slices here
    },
});
