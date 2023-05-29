<script>
import AppProjectCard from './ProjectCard.vue';

import axios from 'axios';

export default {
    name: 'Projects',

    data() {
        return{

            projects : [],

            page : 1,

            totalPages : 0,

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
            axios.get('http://127.0.0.1:8000/api/projects/?page=' + this.page).then( response => {
                console.log(response.data)
                this.totalPages = response.data.results.last_page
                this.projects = response.data.results.data
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

    <div class="container">
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

</style>