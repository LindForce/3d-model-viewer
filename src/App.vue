<template>
    <div class="min-h-screen py-8">
        <header class="container mx-auto mb-8 text-center">
            <h1 class="text-3xl font-bold text-gray-800">3D Model Viewer</h1>
            <p class="text-gray-600">
                View the 3D models for your survey evaluation
            </p>
        </header>

        <ModelViewer />

        <footer
            class="container mx-auto mt-12 text-center text-gray-500 text-sm"
        >
            <p>© 2025 3D Model Survey | Created for research purposes</p>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModelViewer from './components/ModelViewer.vue';

export default defineComponent({
    name: 'App',
    components: {
        ModelViewer,
    },
});
</script>
