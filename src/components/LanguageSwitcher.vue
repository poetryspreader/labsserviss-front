<template>
  <div @click="changeLocale" class="language-switcher" :class="{ active: currentLocale === currentLocaleIndex }">
    {{ locales[currentLocaleIndex] }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      locales: ['lv', 'ru'],
      currentLocaleIndex: 0,
    };
  },
  computed: {
    currentLocale() {
      return this.locales[this.currentLocaleIndex];
    },
  },
  methods: {
    changeLocale() {
      this.currentLocaleIndex = (this.currentLocaleIndex + 1) % this.locales.length;
      this.$i18n.locale = this.currentLocale;
    },
  },
};
</script>

<style lang="scss">
.language-switcher {
  margin: 0 5px 0 0;
  padding: 5px 8px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15%;
  border: 2px solid white;
  transition: .4s all;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    scale: 1.1;
  }
}
</style>