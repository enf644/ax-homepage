import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Enterprise from '../views/Enterprise.vue'
import Faq from '../views/Faq.vue'
import Support from '../views/Support.vue'
import Community from '../views/Community.vue'
import Demo from '../views/Demo.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/enterprise',
        name: 'enterprise',
        component: Enterprise
      },
      {
        path: '/faq',
        name: 'faq',
        component: Faq
      }
      , {
        path: '/support',
        name: 'support',
        component: Support
      },
      {
        path: '/community',
        name: 'community',
        component: Community
      },
      {
        path: '/demo',
        name: 'demo',
        component: Demo
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
