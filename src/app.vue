<template>
    <div id="app">
      <Header/>
      <router-view></router-view>
    </div>
</template>
<script>
import Vue from 'vue'
import Index from '@/view/index.vue'
import Login from '@/view/login.vue'
import Header from '@/components/common/common-header.vue'
import vm from '@/vuex'

export default {
  name:'app',
  components:{Index,Login,Header},
  data(){
      return {
          msg:"hello vue2222@@@@@@@@@@@@!!",
          loginShow:false
      }
  },
  methods:{

  },
  mounted() {
   // `this` 指向 vm 实例
   // console.log( this.loginShow)
   // console.log(vm);
   // vm.$on('loginShow', function (id) {
   //   console.log(id);
   //   console.log(this.loginShow);
   //   this.loginShow=false
   //   // ...
   //  })
 //console.log(this.$route)
 },
}
</script>
<style lang="less">
#app{
  .line{display: flex;justify-content:center;align-items: center;padding: 20px;}
}
</style>
