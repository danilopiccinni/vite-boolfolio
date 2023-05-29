<script>
import AppProjectCard from './ProjectCard.vue';

import axios from 'axios';

export default {
    name: 'Main',

    data() {
        return{

            projects : [],

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
            axios.get('http://127.0.0.1:8000/api/projects').then( response => {
                console.log(response.data.results)
                this.projects = response.data.results
            })
        }
    }
}
</script>

<template>

    <div>
        <div class="row">
            <div v-for="project in projects" class="col-3 mb-3">
                <AppProjectCard  :project="project"></AppProjectCard>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>