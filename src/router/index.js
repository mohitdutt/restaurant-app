import Vue from 'vue'
import Router from 'vue-router'
// import AddRestaurants from '../views/AddRestaurants.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/AddRestaurants',
      name: 'AddRestaurants',
      component: () =>
        import('../views/AddRestaurants.vue')
    },
    {
      path: '/AddRestauMoreDetails',
      name: 'AddRestauMoreDetails',
      component: () =>
        import('../views/AddRestauMoreDetails.vue')
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () =>
        import('../views/signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import('../views/login.vue')
    }
  ]
})
