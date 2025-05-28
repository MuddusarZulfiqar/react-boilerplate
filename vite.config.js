import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // scss variables set
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/scss/utility/variables" as *;`
            }
        }
    }
});
