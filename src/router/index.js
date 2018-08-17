import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Index from '@/components/page/Index'
import User from '@/components/page/UserAdmin.vue'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Container,
      children: [
        { path: '/', component: Container },
        { path: '/index', name: 'index', component: Index },
        { path: '/user', name: 'user', component: User }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
