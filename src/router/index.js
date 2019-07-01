import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import login from '@/views/login/index'
import secondPage from '@/views/secondPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: FirstPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
