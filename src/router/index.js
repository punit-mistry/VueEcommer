import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import HomeView from '../components/Home.vue'
import Products from '../components/Products.vue'
import SingleProduct from '../components/SingleProduct.vue'
import Cart from '../components/Cart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: { requiresAuth: true },
    },
    {
      path: '/Product',
      name: 'Products',
      component:Products,
      // meta: { requiresAuth: true },
    },
    {
      path: '/Products/:id',
      name: 'SingleProduct',
      component:SingleProduct  ,
      // meta: { requiresAuth: true },
    },
    {
      path: '/Cart',
      name: 'Cart',
      component:Cart  ,
      // meta: { requiresAuth: true },
    }
  ]
})

let isUserAuth = false;

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !isUserAuth){
    next('/')
  }else{
    next()
  }
})


export default router
