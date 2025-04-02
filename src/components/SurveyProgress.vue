<!-- components/SurveyProgress.vue -->
<template>
    <div class="mb-8">
        <div class="flex justify-between mb-2">
            <span>Progress: {{ currentIndex + 1 }} of {{ totalModels }}</span>
            <span
                >{{
                    Math.round(((currentIndex + 1) / totalModels) * 100)
                }}%</span
            >
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div
                class="bg-blue-600 h-2.5 rounded-full"
                :style="{
                    width: `${((currentIndex + 1) / totalModels) * 100}%`,
                }"
            ></div>
        </div>
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
    },
};
</script>
