<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { modelDescriptions, trees, chests, scrolls } from '../data/models';
import type { ModelData, ModelDisplay } from '../data/models';
import ModelModal from './ModelModal.vue';

export default defineComponent({
    name: 'ModelComp',
    components: {
        ModelModal,
    },
    setup() {
        const categories = [
            'Red Twisted Tree',
            'Gem-Studded Treasure Chest',
            'Ornate Parchment Scroll',
        ];

        const activeTab = ref<string>('Red Twisted Tree');
        const isModalOpen = ref<boolean>(false);
        const selectedModel = ref<ModelDisplay | null>(null);

        const getModelIdsForTab = (tab: string): ModelData => {
            switch (tab) {
                case 'Red Twisted Tree':
                    return trees;
                case 'Gem-Studded Treasure Chest':
                    return chests;
                case 'Ornate Parchment Scroll':
                    return scrolls;
                default:
                    return {};
            }
        };

        const getCategoryKey = (tab: string): string => {
            switch (tab) {
                case 'Red Twisted Tree':
                    return 'tree';
                case 'Gem-Studded Treasure Chest':
                    return 'chest';
                case 'Ornate Parchment Scroll':
                    return 'scroll';
                default:
                    return '';
            }
        };

        const transformToRomanNumbers = (number: number): string => {
            const romanNumerals: string[] = [
                'I',
                'II',
                'III',
                'IV',
                'V',
                'VI',
                'VII',
                'VIII',
                'IX',
                'X',
            ];
            if (number < 1 || number > romanNumerals.length) {
                console.error('Number out of range for Roman numerals');
                return '';
            }

            return romanNumerals[number - 1];
        };

        const currentModels = computed<ModelDisplay[]>(() => {
            const models = getModelIdsForTab(activeTab.value);
            return Object.entries(models).map(([id, url]) => ({
                id,
                url,
                description: modelDescriptions[getCategoryKey(activeTab.value)],
                romanId: transformToRomanNumbers(Number(id)),
            }));
        });

        const openModal = (model: ModelDisplay): void => {
            selectedModel.value = model;
            isModalOpen.value = true;
        };

        const closeModal = (): void => {
            isModalOpen.value = false;
        };

        return {
            activeTab,
            categories,
            currentModels,
            transformToRomanNumbers,
            isModalOpen,
            selectedModel,
            openModal,
            closeModal,
        };
    },
});
</script>

<template>
    <div class="mx-auto p-4 w-full">
        <!-- Tabs -->
        <nav class="flex justify-center mb-6 space-x-4 w-full">
            <button
                v-for="category in categories"
                :key="category"
                @click="activeTab = category"
                class="px-4 py-2 rounded-lg font-semibold transition-all"
                :class="{
                    'bg-blue-600 text-white': activeTab === category,
                    'bg-gray-200 hover:bg-gray-300': activeTab !== category,
                }"
            >
                {{ category }}
            </button>
        </nav>

        <!-- Models Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div
                v-for="model in currentModels"
                :key="model.id"
                class="bg-white p-4 rounded-lg border shadow comparisonModel relative"
            >
                <h3 class="text-center font-medium mb-2">
                    {{ model.description }}
                    {{ model.romanId }}
                </h3>
                <div
                    class="aspect-video w-full bg-gray-100 border rounded mb-3 relative"
                >
                    <model-viewer
                        :key="model.id"
                        :src="model.url"
                        alt="3D model"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        style="width: 100%; height: 100%; min-height: 300px"
                        camera-orbit="0deg 75deg 6m"
                        exposure="0.5"
                    />
                    <button
                        @click="openModal(model)"
                        class="absolute top-2 right-2 p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 shadow transition-all"
                        title="Expand view"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal Component -->
        <ModelModal
            :is-open="isModalOpen"
            :model="selectedModel"
            @close="closeModal"
        />
    </div>
</template>
