import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router.js'
import App from './app.vue'
import './styles/main.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el:"#app",
  template:"<App/>",
  components:{App},
  router
})
