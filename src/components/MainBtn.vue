<template>
  <router-link
    v-if="to"
    class="main-btn"
    :style="{ width: width }"
    :to="to"
  >
    {{ $t(title) }}
  </router-link>
  <button
    v-else
    :style="{ width: width }"
    class="main-btn"
    name="send"
  >
    {{ $t(title) }}
  </button>
  <RouterView />
</template>
<style lang="scss">
.main-btn {
  cursor: pointer;
  display: inline-block;
  padding: 12px 60px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid var(--main-color-white);
  color: var(--main-color-white);
  background-color: transparent;
  border-radius: 25px;
  transition: .2s;
  text-decoration: none;
  &:hover {
    color: var(--main-color-black);
    background-color: var(--main-color-white);
  }
}
</style>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink, RouterView
  },
  props: {
    title: {
      type: String
    },
    to: {
      type: String
    },
    width: {
      type: String,
      default: 'auto'
    }
  },
}
</script>