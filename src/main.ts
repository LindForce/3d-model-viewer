import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './index.css';
import router from './router';

// Import model-viewer (ensures it's loaded as a web component)
import '@google/model-viewer';

createApp(App).use(router).mount('#app');
