import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/Navigation.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/professions/waiters',
      name: 'waiters',
      component: () => import('../views/professions/Waiters.vue')
    },
    {
      path: '/professions/bartenders',
      name: 'bartenders',
      component: () => import('../views/professions/Bartenders.vue')
    },
    {
      path: '/professions/cooks',
      name: 'cooks',
      component: () => import('../views/professions/Cooks.vue')
    },
    {
      path: '/professions/hostesses',
      name: 'hostesses',
      component: () => import('../views/professions/Hostesses.vue')
    },
    {
      path: '/professions/dishwashers',
      name: 'dishwashers',
      component: () => import('../views/professions/Dishwashers.vue')
    }
  ]
})

export default router
