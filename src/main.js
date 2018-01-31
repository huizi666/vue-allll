import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router.js'
import App from './app.vue'
import './styles/main.css'

Vue.use(VueRouter,)

const router = new VueRouter({
  routes
})

var vm = new Vue({
  el:"#app",
  template:"<App/>",
  components:{App},
  router,
  data:{
  }
})

router.beforeEach((to, from, next) => {
  let cookie = localStorage.getItem('userName')
  if(!cookie){
    console.log(to);
    console.log(from);
    console.log(next);
    console.log(router);
    console.log(cookie);
  }else {
    if(from.path == "/login"){
      console.log(cookie);
      console.log("已经登录啦~");
    }
  }
  next()
})
