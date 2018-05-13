import Vue from 'vue'
import VueRouter from 'vue-router'
import CardPage from '../components/CardPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/card/:id',
      component: CardPage
    }
  ]
})