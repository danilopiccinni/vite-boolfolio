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
<header class="nav-container">
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

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">

                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <i class="fa-regular fa-circle-user"></i>
                    </a>
                </li>

            </ul>

        </div>
    </nav>
</header>
</template>

<style scoped lang="scss">

.router-link-active {
    color: white;
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

.nav-container {
    z-index: 10;
    position: sticky;
    top: 0;
    height: 80px;
    background-color: #11111f;
    color: #a4a4a4;

    .nav-bar {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .nav-sx{
        display: flex;

        height: 100%;
        .logo{
            height: 100%;
            img{
                height: 100%;
            }
        }

        .near-logo{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            strong{
                font-size: 12px;
            }
            span {
                font-size: 10px;
            }


        }

    }

    .nav-dx{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 50px;

        .nav-links {
            height: 100%;
            display: flex;
            align-items: center;
            gap: 15px;

            li{
                height: 100%;
                display: flex;
                align-items: center;
                list-style-type: none;
                // transition: 0.2s;

                position: relative;


                &:hover{
                    background-color: blue;
                    color: white;
                    cursor: pointer;
                }

                a{  
                    display: flex;
                    align-items: center;
                    height: 100%;
                    padding: 0 10px;
                }
            }
        }

        .dropdown{
            display: flex;
            align-items: center;
            padding: 5 25px;

            .dropdown-toggle{

                transition: .3s;
                &:hover {
                    color: white;
                }

                i{
                    font-size: 30px;
                    padding: 5 25px;
                }
            }

        }
    }
}


</style>