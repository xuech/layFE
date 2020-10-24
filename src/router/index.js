import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const Index = () =>
  import(/* webpackChunkName: 'index' */ '@/views/channels/Index.vue')
const Template1 = () =>
  import(/* webpackChunkName: 'template1' */ '@/views/channels/Template1.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [{
      path: '',
      name: 'index',
      component: Index
    },
    {
      path: '/index/:catalog',
      name: 'catalog',
      component: Template1
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reg.vue'),
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forget.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
