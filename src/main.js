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
  //cookie不存在则跳转到登录，若存在则正常跳转到目的路由上
  if(!cookie){
    // console.log(to);
    // console.log(from);
    // console.log(next);
    // console.log(router);
  }else {
    if(from.path == "/login"){
      console.log("已经登录啦~");
    }
  }
  next()
})
