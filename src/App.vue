<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<template>
    <div class="min-h-screen py-8">
        <header class="mx-auto mb-8 text-center">
            <h1 class="text-3xl font-bold text-gray-800">3D Model Viewer</h1>

            <!-- Navigation -->
            <nav class="mt-6 flex justify-center space-x-4">
                <router-link
                    to="/"
                    class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                    Home
                </router-link>
                <router-link
                    to="/inspect"
                    class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                    Part 1
                </router-link>
                <router-link
                    to="/comparison"
                    class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                    Part 2
                </router-link>
            </nav>
        </header>

        <router-view />

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
