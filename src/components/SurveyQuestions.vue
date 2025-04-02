<!-- components/SurveyQuestions.vue -->
<template>
    <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">Please rate this 3D model:</h2>

        <div v-for="(question, index) in questions" :key="index" class="mb-6">
            <div class="font-medium mb-3">{{ question.text }}</div>
            <div class="grid grid-cols-5 gap-2 mb-1 text-sm text-center">
                <div>Strongly Disagree</div>
                <div>Disagree</div>
                <div>Neutral</div>
                <div>Agree</div>
                <div>Strongly Agree</div>
            </div>
            <div class="grid grid-cols-5 gap-2">
                <label
                    v-for="value in 5"
                    :key="value"
                    class="flex flex-col items-center"
                >
                    <input
                        type="radio"
                        :name="`question-${index}`"
                        :value="value"
                        v-model="localResponses[index]"
                        class="mb-1"
                    />
                    <span class="text-sm">{{ value }}</span>
                </label>
            </div>
        </div>

        <div class="mb-6">
            <label class="font-medium block mb-2"
                >Additional comments (optional):</label
            >
            <textarea
                v-model="localComment"
                rows="3"
                class="w-full p-2 border rounded"
                placeholder="Please share any additional thoughts about this model..."
            >
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions: {
            type: Array,
            required: true,
        },
        responses: {
            type: Array,
            required: true,
        },
        comment: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            localResponses: [...this.responses],
            localComment: this.comment,
        };
    },

    watch: {
        responses: {
            handler(newVal) {
                this.localResponses = [...newVal];
            },
            deep: true,
        },

        comment(newVal) {
            this.localComment = newVal;
        },

        localResponses: {
            handler(newVal) {
                this.$emit('update:responses', newVal);
            },
            deep: true,
        },

        localComment(newVal) {
            this.$emit('update:comment', newVal);
        },
    },
};
</script>
