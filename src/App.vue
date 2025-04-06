<template>
    <div class="min-h-screen py-8 max-w-screen-xl">
        <header class="container mx-auto mb-8 text-center">
            <h1 class="text-3xl font-bold text-gray-800">3D Model Viewer</h1>

            <!-- Survey instructions -->
            <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <h3 class="font-medium text-blue-800">Instructions</h3>
                <p class="text-blue-700">
                    Please examine this model carefully, then return to the
                    Microsoft Forms survey to fill in the evaluation.
                </p>
            </div>
        </header>

        <ModelViewer />

        <footer
            class="container mx-auto mt-12 text-center text-gray-500 text-sm"
        >
            <p>
                © 2025
                <a href="https://joakimlindfors.com" target="_blank">JoakimL</a>
                | Created for research purposes
            </p>
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
