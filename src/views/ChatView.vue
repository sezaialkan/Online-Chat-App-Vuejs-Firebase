<template>
  <div>
    <Chatblock />
    <Chatbar />
  </div>
</template>

<script>
import Chatbar from '../components/Chatbar.vue';
import Chatblock from '../components/Chatblock.vue';
export default {
    components: { Chatbar, Chatblock }
}
</script>

<style>

</style>