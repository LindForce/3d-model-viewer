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
            When you have made it to Part 1 in the survey, please navigate to
            Part 1 in the menu above.
        </p>
    </div>
</template>
