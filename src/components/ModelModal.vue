<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { ModelDisplay } from '../data/models';

export default defineComponent({
    name: 'ModelModal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        model: {
            type: Object as PropType<ModelDisplay | null>,
            required: true,
        },
    },
    emits: ['close'],
    setup(_props, { emit }) {
        const closeModal = () => {
            emit('close');
        };

        // Close when clicking outside the content area
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                (event.target as HTMLElement).classList.contains(
                    'modal-overlay'
                )
            ) {
                closeModal();
            }
        };

        // Close on escape key
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        return {
            closeModal,
            handleOutsideClick,
            handleKeydown,
        };
    },
});
</script>

<template>
    <div
        v-if="isOpen && model"
        class="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click="handleOutsideClick"
        @keydown="handleKeydown"
        tabindex="0"
    >
        <div
            class="modal-content bg-white rounded-lg shadow-xl w-full max-w-4xl"
        >
            <!-- Header -->
            <div class="flex justify-between items-center p-4 border-b">
                <h2 class="text-xl font-semibold">
                    {{ model.description }} {{ model.romanId }}
                </h2>
                <button
                    @click="closeModal"
                    class="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <!-- Modal body -->
            <div class="p-4">
                <div class="aspect-video w-full bg-gray-100 border rounded">
                    <model-viewer
                        :src="model.url"
                        alt="3D model"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        style="width: 100%; height: 100%; min-height: 500px"
                        camera-orbit="0deg 75deg 6m"
                        exposure="0.5"
                    />
                </div>
            </div>

            <!-- Footer -->
            <div class="p-4 border-t flex justify-end">
                <button
                    @click="closeModal"
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
