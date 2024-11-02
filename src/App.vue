<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column; 
  height: 100vh;
}
</style>
