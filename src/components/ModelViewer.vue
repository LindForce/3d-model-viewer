<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { trees } from '../data/models';
import '../styles/ModelViewer.css';

export default defineComponent({
    name: 'ModelViewer',
    setup() {
        const currentModelIndex = ref(1);

        // Map of model URLs - replace these with your actual model URLs

        const currentModelUrl = computed(() => {
            return (
                trees[currentModelIndex.value as keyof typeof trees] || trees[1]
            );
        });

        const selectModel = (index: number) => {
            currentModelIndex.value = index;
        };

        return {
            currentModelIndex,
            currentModelUrl,
            selectModel,
            trees,
        };
    },
});
</script>

<template>
    <div class="mx-auto p-4 w-full">
        <!-- Navigation bar -->
        <nav class="bg-gray-800 text-white p-4 mb-6 rounded-lg w-full">
            <div class="flex flex-wrap items-center justify-center">
                <button
                    v-for="index in Object.keys(trees).length"
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
        <div class="bg-gray-100 p-6 rounded-lg modelViewer">
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
    </div>
</template>
