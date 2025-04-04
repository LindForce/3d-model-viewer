import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: '/3d-model-viewer/',
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Mark 'model-viewer' as a custom element so Vue doesn't try to process it
                    isCustomElement: (tag) => tag === 'model-viewer',
                },
            },
        }),
    ],
    assetsInclude: ['**/*.glb'], // Ensure .glb files are treated as assets
});
