<!-- components/CompletionModal.vue -->
<template>
    <div
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
        <div class="bg-white p-8 rounded-lg max-w-md">
            <h2 class="text-2xl font-bold mb-4">Thank You!</h2>
            <p class="mb-4">
                Your survey responses have been submitted successfully.
            </p>
            <div class="text-center">
                <button
                    @click="$emit('reset')"
                    class="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
