import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)


import App from '@/App'
import Home from '@/components/Home'
import CoursesList from '@/components/CoursesList'
import Cart from '@/components/Cart'


export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'CoursesList',
          component: CoursesList
        },
        {
          path: 'Cart',
          component: Cart
        },
      ]
    }
  ]
})