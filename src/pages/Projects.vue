<script>
import AppProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';

export default {
    name: 'Projects',

    data() {
        return{

            baseUrl: 'http://127.0.0.1:8000/api/projects/',

            projects : [],

            pagination: {},

            isLoading: false,

        }
    },

    components : {
        AppProjectCard,
    },

    created() {
        this.getProjects(this.baseUrl);
    },

    methods: {
        getProjects(url) {
            this.isLoading = true
            axios.get(url ).then( response => {
                console.log(response.data)
                this.pagination = response.data.results
                this.projects = response.data.results.data
                this.isLoading = false
            })

        },

    }
}
</script>

<template>

    <div v-if="isLoading == true" class="text loader">
        <div class="spinner"></div>
        <span>loading.....</span>
    </div>
    
    <div v-if="isLoading == false " class="container">
        <div class="row">
            <div v-for="project in projects" class="col-3 mb-3">
                <AppProjectCard  :project="project"></AppProjectCard>
            </div>
        </div>
        
        <div class="d-flex justify-content-center gap-1">
            <button v-for="link in pagination.links" class="btn" :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" :disabled="link.url == null ? true : false" @click="getProjects(link.url)" v-html="link.label"></button>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
    .text {
        color: red;
        font-size: 40px;
        font-weight: bold;
        padding-top: 20px;
        text-align: center;
    }

    .loader {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #3498db;
    }
    .spinner {

        border : 16px solid #f3f3f3;
        border-top: 16px solid #3498db;

        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform : rotate(360deg)
        }
    }
</style>