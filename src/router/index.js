import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Survey from '@/views/survey.vue'
import Secret from '@/views/secret.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret
  }
]

const router = new VueRouter({
  routes
})

export default router
