<script>

import { store } from '../store';

    export default {
        name: 'Header',

        data() {
            return {

                navLinks : [
                    'home',
                    'projects',
                    'contact'
                ],

                store,
            }
        },

        mounted() {

        },

        methods : {

        }
    }

</script>

<template>
    <div class="nav-container">
        <nav class="navbar navbar-expand-lg navbar fixed-top" data-bs-theme="dark">
            <div class="container-fluid">
                <router-link :to="{ name: 'home' } " class="navbar-brand" ><img src="../../public/img/dp-logo.png" alt=""></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item nav-link text-center">
                    <router-link :to="{ name: 'home' } " class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item nav-link text-center">
                        <router-link :to="{ name: 'projects' } " class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item nav-link text-center">
                        <router-link :to="{ name: 'contact' } " class="nav-link">Contact</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
<!-- <header class="nav-container">
    <nav class="container nav-bar">
        <div class="nav-sx">
            <div class="logo">
                <a href="">
                    <img src="../../public/img/dp-logo.png" alt="">
                </a>
            </div>
            <div class="near-logo">
                <strong>WEB DESIGNER & DEVELOPER</strong>
                <span>creazione siti web sartoriali</span>
            </div>
        </div>
        <div class="nav-dx">
            <ul class="nav-links mb-0">
                <li v-for="link,index in navLinks" class="nav-item" >
                    <router-link class="nav-link" :to="{ name: link } " >{{link}}</router-link>
                </li>
            </ul>


            <ul class="navbar-nav ml-auto">

                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <i class="fa-regular fa-circle-user"></i>
                    </a>
                </li>

            </ul>

        </div>
    </nav>
</header> -->
</template>

<style scoped lang="scss">

.router-link-active {
    color: white;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
                        

        height: 10px;
        width: 60%;
        background-color: blue;
    }

}

nav {

    background-color: #11111f;



    img{
        height: 80px;
    }

//     .nav-bar {
//         height: 100%;
//         display: flex;
//         justify-content: space-between;
//         flex-wrap: wrap;
//     }

//     .nav-sx{
//         display: flex;

//         height: 100%;
//         .logo{
//             height: 100%;
//             img{
//                 height: 100%;
//             }
//         }

//         .near-logo{
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
            
//             strong{
//                 font-size: 12px;
//             }
//             span {
//                 font-size: 10px;
//             }


//         }

//     }

//     .nav-dx{
//         height: 100%;
//         display: flex;
//         align-items: center;
//         gap: 50px;

//         .nav-links {
//             height: 100%;
//             display: flex;
//             align-items: center;
//             gap: 15px;

//             li{
//                 height: 100%;
//                 display: flex;
//                 align-items: center;
//                 list-style-type: none;
//                 // transition: 0.2s;

//                 position: relative;


//                 &:hover{
//                     background-color: blue;
//                     color: white;
//                     cursor: pointer;
//                 }

//                 a{  
//                     display: flex;
//                     align-items: center;
//                     height: 100%;
//                     padding: 0 10px;
//                 }
//             }
//         }

//         .dropdown{
//             display: flex;
//             align-items: center;
//             padding: 5 25px;

//             .dropdown-toggle{

//                 transition: .3s;
//                 &:hover {
//                     color: white;
//                 }

//                 i{
//                     font-size: 30px;
//                     padding: 5 25px;
//                 }
//             }

//         }
//     }
}


</style>