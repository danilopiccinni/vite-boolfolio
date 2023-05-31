<script>
import axios from 'axios'
import { store } from '../store';

    export default {
        name: 'SingleProject',

        data() {
            return {

                store,
                slug: '',

                baseUrl: 'http://127.0.0.1:8000/api/projects/',

                project: {},
            }
        },

        mounted() {

            this.slug = this.$route.params.slug

            this.getProject()
            

        },

        computed: {
            projectThumb() {
                return this.store.baseUrl + 'storage/' + this.project.thumb
            }
        },

        methods: {
            getProject() {

                axios.get('http://127.0.0.1:8000/api/projects/' + this.slug).then( response => {


                    this.project = response.data.results

                    console.log(this.project)
                })

            }
        }


    }

</script>

<template>
    <div>

    <section class="section-admin-show">
        <section>
            <div class="image py-5">
                <div class="container-fliud py-5">
                    <div class="col-10 offset-1">
                        
                        <div class="container-image" :style="{ backgroundImage: 'url(' + projectThumb + ')' }">

                            <h1>{{ project.title }}</h1>
                            <div class="opacity"></div>

                        </div>
                    </div>
                </div>
            </div>
            <img class="svg" src="../../public/img/wave.svg" alt="">
            
        </section>


        <section class="my-5">
            
            <div class="container">

                <p>
                    <strong>Tecnologia:</strong>

                    <span v-for="technology in project.technologies" class="badge" :style="{ backgroundColor : technology.color}">
                        <a class="nav-link">
                            {{ technology.name }}
                        </a>
                    </span>

                </p>

                <p>
                    <strong>Tipologia:</strong>

                    <span class="badge rounded-pill text-bg-info">
                        <a class="nav-link" href="">
                            {{ project.type?.name }}
                        </a>
                    </span>

                </p>

                <p>
                    
                </p>
            </div>

        </section>

        <section>
            <div class="container text-center">
               <em>Git-Hub link: </em><a href="">{{ project.repo }}</a>  
            </div>
        </section>

        <section class="details-project my-5">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 column-1">
                        asd
                    </div>
                    <div class="col-8 column-2">
                        <div class="p-5">
                            <div class="row my-5">
                                <h3>Progetto</h3>
                                <div class="col-4">
                                    <h6>CLIENTE</h6>
                                    <span>Aereonautica spaziale Elon</span> 
                                </div>
                                <div class="col-4">
                                    <h6>LOCATION</h6>
                                    <span>Presso la Luna</span>  
                                </div>
                                <div class="col-4">
                                    <h6>ANNO</h6>
                                    <span>2056</span>
                                </div>
                            </div>
                            <div class="row my-5">
                                <h3>TASK</h3>
                                <div class="col-4 pt-3">
                                    <h4>1</h4>
                                    <h6>UN TITOLINO DEL TASK</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas asperiores distinctio alias molestiae laboriosam accusamus exercitationem necessitatibus dolores error porro eligendi deleniti, hic aspernatur quam? Eius nisi nesciunt quod.</span> 
                                </div>
                                <div class="col-4 pt-3">
                                    <h4>2</h4>
                                    <h6>UN TITOLINO DEL TASK</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas asperiores distinctio alias molestiae laboriosam accusamus exercitationem necessitatibus dolores error porro eligendi deleniti, hic aspernatur quam? Eius nisi nesciunt quod.</span>  
                                </div>
                                <div class="col-4 pt-3">
                                    <h4>3</h4>
                                    <h6>UN TITOLINO DEL TASK</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas asperiores distinctio alias molestiae laboriosam accusamus exercitationem necessitatibus dolores error porro eligendi deleniti, hic aspernatur quam? Eius nisi nesciunt quod.</span>
                                </div>
                                <div class="col-4 pt-3">
                                    <h4>4</h4>
                                    <h6>UN TITOLINO DEL TASK</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas asperiores distinctio alias molestiae laboriosam accusamus exercitationem necessitatibus dolores error porro eligendi deleniti, hic aspernatur quam? Eius nisi nesciunt quod.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="section-color-font">

            <div class="container py-5">
                <div class="row my-5 ">
                    <div class="col-2">
                        <h4>Color Scheme</h4>
                    </div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col-2 cont-color">
                                <div class="color-square"></div>
                                <span>#ffffff</span>
                            </div>
                            <div class="col-2 cont-color">
                                <div class="color-square"></div>
                                <span>#ffffff</span>
                            </div>
                            <div class="col-2 cont-color">
                                <div class="color-square"></div>
                                <span>#ffffff</span>
                            </div>
                            <div class="col-2 cont-color">
                                <div class="color-square"></div>
                                <span>#ffffff</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-2">
                        <h4>Font Family</h4>
                    </div>
                    <div class="col-10">
                        <div class="row ">
                            <div class="col-2">
                                <span>Font 1</span>
                            </div>
                            <div class="col-2">
                                <span>Font 2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <section class="section-previews">
            <div class="row my-5">
                <div class="col-8 d-flex justify-content-center">
                    <div class="cont-image">
                        img
                    </div>
                </div>
                <div class="col-4">
                    <div class="cont-details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro maiores quaerat in ea praesentium repudiandae illo repellendus nesciunt maxime voluptas ipsam, repellat cupiditate incidunt odit atque accusantium at. Consequuntur.</p>
                    </div>
                </div>
            </div>
        </section>

    </section>

    </div>
</template>

<style scoped lang="scss">
.section-admin-show {

 

.svg {
    width: 100%;
    rotate: 180deg;
    height: 110px;
}

.image {
    background-color: #11111f;
}
.container-image {



    display: flex;
    justify-content: center;
    align-items: center;


    height: 500px;
    object-fit:cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;

    h1 {
        color: white;
        z-index: 2;
    }

    .inner-bottom-svg{
        position: absolute;
        bottom: 0px;
        left: 0;
        height: 83px;
        width: 100%;
    }

    .opacity{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom, #11111f7b , #11111f);

    }
}

.card {
    overflow: hidden;
}

.details-project{

    .column-1{
        background-color: #f56f61;
    }

    .column-2 {
    background-color: #f6f6f6;
    }
}

.section-color-font {

    .cont-color {
        display: flex;
        align-items: center;
        gap: 5px;

        .color-square {
            width: 50px;
            height: 50px;
            background-color: #3fb435;
        }
    }
}

.section-previews {
    .cont-image {
        width: 70%;
        height: 800px;
        background-color: #a4a4a4;
    }

    .cont-details {
        position: sticky;
        top: 120px;
        width: 65%;
    }
}
}


</style>