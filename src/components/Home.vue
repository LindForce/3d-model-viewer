<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
});
</script>

<template>
    <!-- Survey instructions -->
    <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
        <h3 class="font-medium text-blue-800">Instructions</h3>
        <p class="text-blue-700">
            Please examine this model carefully, then return to the Microsoft
            Forms survey to fill in the evaluation.
        </p>
    </div>
</template>
