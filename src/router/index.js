import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import VideoConference from '../pages/VideoConference.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',  
      name: 'home',
      component: Home,
    },
    {
      path: '/room',  
      name: 'video',
      component: VideoConference,
    }
  ]
})

export default router
