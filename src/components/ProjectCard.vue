<script>

import { store } from '../store';

export default {
    name: 'AppProjectCard',

    data() {
        return {
            store,
        }
    },

    props : {
        project : Object,
    }
}
</script>

<template>
    <div>
        <div class="card" >
            <img :src="store.baseUrl + 'storage/' + project.thumb " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{project.description}}</p>
                <div>
                    <span>Tipologia: {{ project.type.name }}</span>
                </div>
                <div>
                    <span>Tecnologie</span>
                    <span v-for="technology in project.technologies" :style="{backgroundColor : technology.color}" class="badge"> {{ technology.name }}</span>
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

.card {
    img {
        height: 150px;
        object-fit: cover;
    }
}


</style>