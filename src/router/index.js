import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pastime from '@/views/Pastime'
import Car from '@/views/Car'
import Military from '@/views/Military'
import User from "@/views/User"
import Login from "@/views/Login"
import Register from "@/views/Register"

//导入NProgress进度条
import "../../node_modules/nprogress/nprogress.css";
import NProgress from "nprogress";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pastime',
    component: Pastime,
    meta: {
      title: '娱乐',
      requiresAuth: false
    }
  },
  {
    path: '/car',
    component: Car,
    meta: {
      title: '汽车',
      requiresAuth: false
    }
  },
  {
    path: '/military',
    component: Military,
    meta: {
      title: '军事',
      requiresAuth: false
    }
  },
  {
    path: '/user',
    component: User,
    meta:{
      title:'用户',
      requiresAuth:false
    },
    children: [
      {
        path: 'login',
        component: Login,
        meta: {
          requiresAuth: false,
          title: '登录'
        }
      },
      {
        path: 'register',
        component: Register,
        meta: {
          requiresAuth: false,
          title: '注册'
        }
      },
      { path: '', component: Login }
    ]
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

// 全局前守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  let { path } = to;
  let { title, requiresAuth } = to.meta;
  document.title = title;
  NProgress.start()
  //  true 不用校验  false 需要校验
  let token = localStorage.getItem('token')
  if (path === "/user/login" || path === "/user/register") {
    console.log('登录不需要校验');
    next()
  } else if (token) {
    if (path !== "/user/login") {
      console.log("不需要校验");
      requiresAuth = true
      next()
    }
  }else {
    console.log("需要校验");
    NProgress.done()
    // 没权限打到登录页面
    next({ path: '/user/login' })
  }


})


//  全局后守卫
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
