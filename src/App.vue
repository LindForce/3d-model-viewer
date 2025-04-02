<template>
    <div class="p-6 max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">3D Model Survey</h1>

        <SurveyProgress
            :currentIndex="currentModelIndex"
            :totalModels="models.length"
        />

        <div v-if="!surveySubmitted">
            <ModelViewer :model="currentModel" />

            <SurveyQuestions
                :questions="questions"
                :responses="responses[currentModelIndex]"
                @update:responses="updateResponses"
                :comment="comments[currentModelIndex]"
                @update:comment="updateComment"
            />

            <NavigationControls
                :currentIndex="currentModelIndex"
                :totalModels="models.length"
                :isCurrentModelRated="isCurrentModelRated"
                :isAllModelsRated="isAllModelsRated"
                @previous="previousModel"
                @next="nextModel"
                @submit="submitSurvey"
            />
        </div>

        <CompletionModal v-if="surveySubmitted" @reset="resetSurvey" />
    </div>
</template>

<script lang="ts">
import ModelViewer from './components/ModelViewer.vue';
import SurveyQuestions from './components/SurveyQuestions.vue';
import SurveyProgress from './components/SurveyProgress.vue';
import NavigationControls from './components/NavigationControls.vue';
import CompletionModal from './components/CompletionModal.vue';

import TestModel from './assets/red_tree.glb';

export default {
    components: {
        ModelViewer,
        SurveyQuestions,
        SurveyProgress,
        NavigationControls,
        CompletionModal,
    },
    data() {
        return {
            currentModelIndex: 0,
            surveySubmitted: false,

            // Sample models - replace with your actual models
            models: [
                {
                    id: 1,
                    name: 'Desk Chair',
                    url: TestModel,
                },
                {
                    id: 2,
                    name: 'Coffee Table',
                    url: TestModel,
                },
                {
                    id: 3,
                    name: 'Lamp',
                    url: TestModel,
                },
            ],

            // Likert scale questions
            questions: [
                { id: 1, text: 'The 3D model appears realistic.' },
                { id: 2, text: "The model's details are clearly visible." },
                { id: 3, text: "The model's proportions look accurate." },
                { id: 4, text: 'The materials and textures are convincing.' },
                { id: 5, text: 'The overall quality of this model is high.' },
            ],

            // Store responses for each model and question
            responses: [],

            // Store optional comments for each model
            comments: [],
        };
    },

    computed: {
        currentModel() {
            return this.models[this.currentModelIndex];
        },

        isCurrentModelRated() {
            // Check if all questions for current model have responses
            return (
                this.responses[this.currentModelIndex] &&
                this.responses[this.currentModelIndex].every(
                    (response) => response !== null
                )
            );
        },

        isAllModelsRated() {
            // Check if all models have been rated
            return (
                this.responses.length === this.models.length &&
                this.responses.every(
                    (modelResponses) =>
                        modelResponses &&
                        modelResponses.every((response) => response !== null)
                )
            );
        },
    },

    created() {
        // Initialize responses array
        this.models.forEach(() => {
            this.responses.push(Array(this.questions.length).fill(null));
            this.comments.push('');
        });
    },

    methods: {
        updateResponses(newResponses) {
            this.responses[this.currentModelIndex] = newResponses;
        },

        updateComment(newComment) {
            this.comments[this.currentModelIndex] = newComment;
        },

        nextModel() {
            if (this.currentModelIndex < this.models.length - 1) {
                this.currentModelIndex++;
                window.scrollTo(0, 0);
            }
        },

        previousModel() {
            if (this.currentModelIndex > 0) {
                this.currentModelIndex--;
                window.scrollTo(0, 0);
            }
        },

        submitSurvey() {
            // Format the data for submission
            const surveyData = this.models.map((model, index) => {
                return {
                    modelId: model.id,
                    modelName: model.name,
                    responses: this.questions.map((question, qIndex) => {
                        return {
                            questionId: question.id,
                            questionText: question.text,
                            rating: this.responses[index][qIndex],
                        };
                    }),
                    comment: this.comments[index],
                };
            });

            // In a real application, you would send surveyData to your backend
            console.log('Survey data ready for submission:', surveyData);

            this.surveySubmitted = true;
        },

        resetSurvey() {
            this.currentModelIndex = 0;
            this.surveySubmitted = false;
            this.responses = this.models.map(() =>
                Array(this.questions.length).fill(null)
            );
            this.comments = this.models.map(() => '');
        },
    },
};
</script>
