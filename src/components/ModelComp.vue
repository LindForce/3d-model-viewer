<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { modelDescriptions, trees, chests, scrolls } from '../data/models';

export default defineComponent({
    name: 'ModelComp',
    setup() {
        const categories = [
            'Red Twisted Tree',
            'Gem-Studded Treasure Chest',
            'Ornate Parchment Scroll',
        ];

        const activeTab = ref('Red Twisted Tree');

        const getModelIdsForTab = (tab: string) => {
            switch (tab) {
                case 'Red Twisted Tree':
                    return trees; // all tree models
                case 'Gem-Studded Treasure Chest':
                    return chests;
                case 'Ornate Parchment Scroll':
                    return scrolls;
                default:
                    return [];
            }
        };

        const currentModels = computed(() => {
            const models = getModelIdsForTab(activeTab.value);
            return Object.entries(models).map(([id, url]) => ({
                id,
                url,
                description: modelDescriptions[getCategoryKey(activeTab.value)],
            }));
        });

        const getCategoryKey = (tab: string) => {
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

        return {
            activeTab,
            categories,
            currentModels,
        };
    },
});
</script>

<template>
    <div class="container mx-auto p-4">
        <!-- Tabs -->
        <nav class="flex justify-center mb-6 space-x-4">
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
                class="bg-white p-4 rounded-lg border shadow"
            >
                <h3 class="text-center font-medium mb-2">
                    {{ model.description }} {{ model.id }}
                </h3>
                <div
                    class="aspect-video w-full bg-gray-100 border rounded mb-3"
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
                </div>
            </div>
        </div>
    </div>
</template>
