import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
import slider from './pages/slider.vue';
import SingleProject from './pages/SingleProject.vue';

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

        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProject
        },
        {
            path:'/slider',
            name:'slider',
            component: slider
        }

    ]
});

export {router} ;