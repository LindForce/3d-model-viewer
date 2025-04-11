import { createRouter, createWebHistory } from 'vue-router';
import ModelViewer from '../components/ModelViewer.vue';
import ModelComp from '../components/ModelComp.vue';
import Home from '../components/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/inspect', name: 'Inspect', component: ModelViewer },
    { path: '/comparison', name: 'Comparison', component: ModelComp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
