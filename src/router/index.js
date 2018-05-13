import Vue from 'vue'
import VueRouter from 'vue-router'
import CardPage from '../components/pages/CardPage.vue'
import HomePage from '../components/pages/HomePage.vue'
import NotFoundPage from '../components/pages/NotFoundPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/card/:id',
      name: 'card',
      component: CardPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})