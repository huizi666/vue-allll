
import Home from '@/components/home.vue'



var routes = [
    { path: '/home/:id', component: Home,
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
    }
  ]
export default routes;
