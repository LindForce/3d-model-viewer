<!-- components/NavigationControls.vue -->
<template>
    <div class="flex justify-between">
        <button
            @click="$emit('previous')"
            class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            :disabled="currentIndex === 0"
        >
            Previous
        </button>

        <button
            v-if="currentIndex < totalModels - 1"
            @click="$emit('next')"
            class="px-4 py-2 bg-blue-600 text-white rounded"
            :disabled="!isCurrentModelRated"
        >
            Next
        </button>

        <button
            v-else
            @click="$emit('submit')"
            class="px-4 py-2 bg-green-600 text-white rounded"
            :disabled="!isAllModelsRated"
        >
            Submit Survey
        </button>
    </div>
</template>

<script>
export default {
    props: {
        currentIndex: {
            type: Number,
            required: true,
        },
        totalModels: {
            type: Number,
            required: true,
        },
        isCurrentModelRated: {
            type: Boolean,
            required: true,
        },
        isAllModelsRated: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
