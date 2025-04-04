<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { modelUrls } from '../data/models';

export default defineComponent({
    name: 'ModelViewer',
    setup() {
        const currentModelIndex = ref(1);

        // Map of model URLs - replace these with your actual model URLs

        const currentModelUrl = computed(() => {
            return (
                modelUrls[currentModelIndex.value as keyof typeof modelUrls] ||
                modelUrls[1]
            );
        });

        const selectModel = (index: number) => {
            currentModelIndex.value = index;
        };

        return {
            currentModelIndex,
            currentModelUrl,
            selectModel,
            modelUrls,
        };
    },
});
</script>

<template>
    <div class="container mx-auto p-4">
        <!-- Navigation bar -->
        <nav class="bg-gray-800 text-white p-4 mb-6 rounded-lg">
            <div class="flex flex-wrap items-center justify-center">
                <button
                    v-for="index in Object.keys(modelUrls).length"
                    :key="index"
                    @click="selectModel(index)"
                    class="px-3 py-2 mx-1 my-1 rounded-md transition-colors"
                    :class="
                        currentModelIndex === index
                            ? 'bg-blue-600'
                            : 'hover:bg-gray-700'
                    "
                >
                    Model {{ index }}
                </button>
            </div>
        </nav>

        <!-- Model viewer section -->
        <div class="bg-gray-100 p-6 rounded-lg">
            <h2 class="text-xl font-semibold mb-4 text-center">
                Model {{ currentModelIndex }}
            </h2>
            <div
                class="aspect-video w-full mb-6 bg-white rounded-lg border shadow-lg"
            >
                <model-viewer
                    :key="currentModelIndex"
                    :src="currentModelUrl"
                    alt="3D model"
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    style="width: 100%; height: 100%; min-height: 400px"
                    camera-orbit="0deg 75deg 6m"
                    exposure="0.5"
                >
                </model-viewer>
            </div>

            <div
                class="mb-2 text-sm text-gray-600 bg-white p-4 rounded-lg shadow"
            >
                <p class="font-medium mb-2">You can interact with the model:</p>
                <ul class="list-none ml-5">
                    <li>Click and drag to rotate</li>
                    <li>Scroll to zoom</li>
                    <li>Right-click and drag to pan</li>
                </ul>
            </div>
        </div>

        <!-- Survey instructions -->
        <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 class="font-medium text-blue-800">Instructions</h3>
            <p class="text-blue-700">
                Please examine this model carefully, then return to the
                Microsoft Forms survey to answer questions about it.
            </p>
        </div>
    </div>
</template>
