<!-- components/ModelViewer.vue -->
<template>
    <div class="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Model: {{ model.name }}</h2>
        <div class="aspect-video w-full mb-6 bg-white rounded border">
            <model-viewer
                :src="model.url"
                alt="3D model"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                style="width: 100%; height: 100%; min-height: 400px"
            >
            </model-viewer>
        </div>
        <div class="mb-2 text-sm text-gray-600">
            <p>You can interact with the model:</p>
            <ul class="list-disc ml-5">
                <li>Click and drag to rotate</li>
                <li>Scroll to zoom</li>
                <li>Right-click and drag to pan</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            required: true,
        },
    },
};
</script>
