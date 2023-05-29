<script>

import Projects from './components/Projects.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import InfoForm from './components/infoForm.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',

  data() {
    return {

    }
  },

  components : {
    Projects,
    Header,
    Footer,
    InfoForm,
    Home,
  }, 

  
}

</script>

<template>


    <Header></Header>

    <Home></Home>

    <h1>Progetti</h1>

    <Projects></Projects>

    <InfoForm></InfoForm>
    
    <Footer></Footer>

</template>

<style scoped>

</style>
