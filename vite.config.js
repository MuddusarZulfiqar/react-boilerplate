import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // alias set
    resolve: {
        alias: {
            "@": fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    // proxy set
    server: {
        port: 8080,
    },

    // scss variables set
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/scss/utility/_variables.scss";`,
            },
        },
    },

});
