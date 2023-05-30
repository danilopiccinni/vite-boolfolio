<script>
import AppProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';

export default {
    name: 'Projects',

    data() {
        return{

            projects : [],

            page : 1,

            totalPages : 0,

            isLoading: false,

        }
    },

    components : {
        AppProjectCard,
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            this.isLoading = true
            axios.get('http://127.0.0.1:8000/api/projects/?page=' + this.page).then( response => {
                console.log(response.data)
                this.totalPages = response.data.results.last_page
                this.projects = response.data.results.data
                this.isLoading = false
            })

        },

        nextPage() {
            if(this.page == this.totalPages) {
                this.page = 1
                this.getProjects()
            } else {
                this.page++
                this.getProjects()
            }
        },

        prevPage() {
            if(this.page == 1) {
                this.page = this.totalPages
                this.getProjects()
            } else {
                this.page--
                this.getProjects()
            }
        },

        goToPage(page) {
            this.page = page
            this.getProjects()  
        }
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
        
        <div class="d-flex justify-content-center gap-5">
            <button @click="prevPage()" class="btn btn-secondary"> indietro </button>
            <button v-for="page in totalPages" @click="goToPage(page)" class="btn btn-secondary"> {{ page }}</button>
            <button @click="nextPage()" class="btn btn-secondary"> avanti </button>
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