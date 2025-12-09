import { createRouter, createWebHistory } from 'vue-router'

import Contacto from '@/components/contactView.vue'
import Home from '@/components/homeView.vue'
import Horarios from '@/components/horariosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/Contacto', component: Contacto },
    { path: '/Horarios', component: Horarios },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
