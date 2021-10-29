import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pastime from '@/views/Pastime'
import Car from '@/views/Car'
import Military from '@/views/Military'
import User from "@/views/User"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/pastime',
    component:Pastime
  },
  {
    path:'/car',
    component:Car
  },
  {
    path:'/military',
    component:Military
  },
  {
    path:'/user',
    component:User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
