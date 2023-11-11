<template>
  <default-layout>
    <div class="profession">
      <nav-bar />
      <div class="profession__content">
        <div class="profession__content-wrapper">
          <div class="profession__content-title">
            {{ $t(`professions.${profession}.title`) }}
          </div>
          <div class="profession__content-text">
            {{ $t(`professions.${profession}.text`) }}
          </div>
          <ul
            v-if="profession !== 'hostesses' && profession !== 'dishwashers'"
            class="profession__content-list">
            <li
              v-for="item in 3"
              :key="item"
            >
              {{ $t(`professions.${profession}.list.${item}`) }}
            </li>
          </ul>
          <div class="profession__content-description">
            {{ $t(`professions.description`) }}
          </div>
        </div>
        <img :src="imageUrl(profession)" alt="copyright-support">
      </div>
      <main-btn :title="'contact-btn'" :to="'/contacts'" />
    </div>
  </default-layout>
  <RouterView />
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import NavBar from "@/components/NavBar.vue";
import MainBtn from "@/components/MainBtn.vue";
import { RouterView } from 'vue-router'
export default {
  components: {
    DefaultLayout, MainBtn, NavBar, RouterView
  },
  props: {
    profession: String
  },
  methods: {
    imageUrl(imageName) {
      return new URL(`../assets/images/${imageName}.png`, import.meta.url).href;
    }
  }
}
</script>
<style lang="scss">
.profession {
  margin: 0 auto;
  text-align: center;
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: start;
    font-size: 20px;
    margin: 20px 0 50px 0;
    width: 100%;
    img {
      height: 400px;
      max-width: 100%;
      margin: 0 0 0 50px;
    }
    &-title {
      font-size: 30px;
      margin: 70px 0 0 0;
    }
    &-text {
      margin: 30px 0 0 0;
      max-width: 700px;
    }
    &-list {
      margin: 30px 0 0 20px;
    }
    &-description {
      margin: 30px 0 0 0;
      font-size: 15px;
    }
  }
}
@media only screen and (min-width: 850px) and (max-width: 1000px) {
  .profession {
    &__content {
      &-wrapper {
        margin: 0 0 0 50px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .profession {
    padding: 0 0 30px 0;
    &__content {
      flex-direction: column;
      margin: 0;
      &-title {
        margin: 0;
      }
      img {
        object-fit: cover;
        width: 60%;
        height: 60%;
        margin: 45px auto;
      }
    }
  }
}

@media (max-width: 1300px) {
  .profession {
    padding: 0 30px;
  }
}
</style>