<template>
  <div class="container">
    <div class="header">
      <bow-tie class="bow-tie"/>
      <header-nav />
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .default {
    display: flex;
    flex-direction: column;
  }
</style>
<script>
import BowTie from "@/components/icons/BowTie.vue";
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    BowTie, HeaderNav
  },
  data() {
    return {
      socialItems: [
      ]
    }
  }
}
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}
.bow-tie {
  fill: var(--main-color-white);
  width: 70px; /* Измените размер на нужный */
  height: 70px; /* Измените размер на нужный */
}

@media (max-width: 1470px) {
  .header {
    padding: 0 20px;
  }
}
</style>