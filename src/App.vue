<script>


import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import InfoForm from './components/infoForm.vue';


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


    <div class="container-router-view">
      <router-view></router-view>
    </div>

    <InfoForm></InfoForm>
    
    <Footer></Footer>

</template>

<style scoped>

  .container-router-view {
    padding-top: 100px;
  }
</style>
