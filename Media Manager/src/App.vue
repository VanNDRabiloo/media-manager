<template>
  <div class="media-manager-app">
    <TheNavbar />
    <TheContent />
  </div>
</template>
<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  components: { TheNavbar, TheContent},
};
</script>
<style>
    @import url('./components/style/main.css');
</style>
