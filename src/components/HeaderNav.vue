<template>
  <div class="header-nav">
    <language-switcher />
    <div
      v-for="item in socialItems"
      :key="item.icon"
      style="margin: 0 5px 0 0"
    >
      <a
        :href="item.url"
        target="_blank"
      >
        <font-awesome-icon
          class="header-nav__icon"
          :icon="item.icon"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  components: {
    FontAwesomeIcon, LanguageSwitcher
  },
  data() {
    return {
      socialItems: [
        {
          icon: 'fa-brands fa-facebook-f',
          url: 'https://www.facebook.com/labsserviss'
        },
        {
          icon: 'fa-brands fa-instagram',
          url: 'https://instagram.com/labsserviss?igshid=MzRlODBiNWFlZA=='
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.header-nav{
  display: flex;
  flex-direction: row;
  &__icon {
    display: block;
    width: 25px;
    height: 25px;
    padding: 5px;
    border: 2px solid white;
    border-radius: 15%;
    transition: .4s all;
    color: white;
    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
  }
}
</style>