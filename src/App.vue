<script>

// import Projects from './components/Projects.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import InfoForm from './components/infoForm.vue';
// import Home from './components/Home.vue';

import { store } from '../src/store';

export default {
  name: 'App',

  data() {
    return {
      store,
    }
  },

  components : {
    // Projects,
    Header,
    Footer,
    InfoForm,
    // Home,
  }, 

  
}

</script>

<template>


    <Header></Header>

    <router-view></router-view>

    <!-- <Home v-if="store.pageIndex == 0"></Home> -->

    <!-- <Projects v-if="store.pageIndex == 1"></Projects> -->

    <InfoForm></InfoForm>
    
    <Footer></Footer>

</template>

<style scoped>

</style>
