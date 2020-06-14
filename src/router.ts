import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
      import(
        /* webpackChunkName: "userlist" */ '@/app/ui/views/User/index.vue'
      ),
    },
  ],
})
