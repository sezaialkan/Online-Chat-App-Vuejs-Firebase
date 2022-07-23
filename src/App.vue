<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-12 main mx-auto">
        <Navbar />
        <RouterView />
      </div>
    </div>
  </div>       
</template>

<style scoped>

</style>
