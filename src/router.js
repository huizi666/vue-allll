
import App from '@/app.vue'
import Home from '@/components/home.vue'
import Pick from '@/components/waterpulls.vue'
import Login from '@/view/login.vue'
import Index from '@/view/index.vue'



var routes = [
  { path: '/',  redirect: '/index'},
    { path: '/index',name:'index', component: Index,
      children:[
        { path: '/index/home', name:'home',components:{contain:Home} ,},
        { path: '/index/bestPick', components: {contain:Pick}},
      ]
    },

    { path: '/login', component: Login}
  ]
export default routes;
