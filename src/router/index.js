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
    }
  ]
})
