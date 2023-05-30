import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
    ]
});

export {router} ;