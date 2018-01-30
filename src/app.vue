<template>
    <div id="app">
      <div v-if="loginShow"><Login/></div>
      <div v-else>
        <Header/>
        <Banner/>
        <div class="line">
          ——————AiShare——————
        </div>
        <Nav/>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/common/common-header.vue'
import Nav from './components/common/common-nav.vue'
import Banner from './components/banner.vue'
import Login from '@/components/login.vue'
import vm from './vuex'

export default {
  name:'app',
  components:{Header,Nav,Banner,Login},
  data(){
      return {
          msg:"hello vue2222@@@@@@@@@@@@!!",
          loginShow:true
      }
  },
  methods:{

  },
  mounted() {
   // `this` 指向 vm 实例
   console.log( this.loginShow)
   console.log(vm);
   vm.$on('loginShow', function (id) {
     console.log(id);
     console.log(this.loginShow);
     this.loginShow=false
     // ...
    })
 console.log( this.loginShow)
 },
}
</script>
<style lang="less">
#app{
  .line{display: flex;justify-content:center;align-items: center;padding: 20px;}
}
</style>
