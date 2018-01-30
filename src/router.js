
import Home from '@/components/home.vue'
import Pick from '@/components/waterpulls.vue'
import Login from '@/components/login.vue'



var routes = [
    { path: '/home', component: Home,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        //{ path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        //{ path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        //{ path: 'posts', component: UserPosts }
      ]
    },
    { path: '/bestPick', component: Pick},
    { path: '/', component: Login}
  ]
export default routes;
