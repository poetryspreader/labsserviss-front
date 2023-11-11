<template>
  <div class="nav-bar">
    <router-link
      v-for="(item) in navItems"
      :key="item.title"
      class="nav-bar__item"
      :to="item.to"
    >
      <font-awesome-icon
        class="nav-bar__item-icon"
        aria-hidden="true"
        :icon="item.icon"
      />
      <div
        class="nav-bar__item-title"
      >
        {{ $t(item.title) }}
      </div>
    </router-link>
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink, RouterView
  },
  data() {
    return {
      navItems: [
        {
          icon: 'fa-solid fa-bowl-rice',
          title: 'professions.waiters.title',
          to: '/professions/waiters'
        },
        {
          icon: 'fa-solid fa-martini-glass-citrus',
          title: 'navigation.bar-tenders',
          to: '/professions/bartenders'
        },
        {
          icon: 'fa-solid fa-fire-burner',
          title: 'navigation.cooks',
          to: '/professions/cooks'
        },
        {
          icon: 'fa-solid fa-book-bookmark',
          title: 'navigation.hostesses',
          to: '/professions/hostesses'
        },
        {
          icon: 'fa-solid fa-kitchen-set',
          title: 'navigation.dishwashers',
          to: '/professions/dishwashers'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  scale: 0.7;
  &__item {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 25px 10px;
    border: 2px solid var(--main-color-white);
    border-radius: 15px;
    text-decoration: none;
    transition: .1s;
    opacity: 0.8;
    z-index: 3;
    &:hover {
      cursor: pointer;
      scale: 1.1;
      opacity: 1;
    }
    &-icon {
      margin: 25px 0 0 0;
      scale: 3;
      path {
        fill: white;
      }
    }
    &-title {
      margin: 50px 0 0 0;
      width: min-content;
      min-width: 120px;
      color: var(--main-color-white);
    }
  }
}

@media (max-width: 1000px) {
  .nav-bar {
    margin: 0;
    flex-direction: column;
    align-items: center;
    &__item {
      width: 300px;
      margin: 5px 20px;
      flex-direction: row;
      align-items: center;
      &-icon {
        margin: 0;
      }
      &-title {
        margin: 0 0 0 40px;
      }
    }
  }
}
</style>