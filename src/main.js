import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import home from './pages/home/mainSection.vue';
import academy from './pages/academy/mainSection.vue';
import digital from './pages/digital/mainSection.vue';
import lifestyle from './pages/lifestyle/mainSection.vue';
import projects from './pages/projects/mainSection.vue';
import about from './pages/about/aboutPage.vue'

const routes = [
    { path: '/', component: home },
    { path: '/academy', component: academy },
    { path: '/digital', component: digital },
    { path: '/lifestyle', component: lifestyle },
    { path: '/projects', component: projects },
    { path: '/about', component: about },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
