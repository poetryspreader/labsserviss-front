<template>
  <default-layout>
    <nav-bar class="navigation-view" />
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    DefaultLayout, NavBar
  }
}
</script>
<style lang="scss">
.navigation-view {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  scale: 1;
}
</style>