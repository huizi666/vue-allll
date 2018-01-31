
<template>
    <header class="common-header">
      <h1><span>AS</span>  be  with  you forever .. </h1>
      <div class="">
        <span >
          <a v-if="!userLogo" v-on:click="loginAlert" >登陆</a>
          <a v-else v-on:click="loginAlert" >头像</a>
        </span>
        <span>|</span>
        <span>关注微信公众号</span>
      </div>
    </header>
</template>

<script>

import Vue from 'vue'


export default {
  name:'Header',
  data(){
      return {
          msg:"logo login username www",
          userLogo:false,

      }
  },
  methods:{
    loginAlert(){
      let cookie = localStorage.getItem('userName')
      if(cookie){
        this.$router.push('/userInfo')
      }else if (!cookie) {
        this.$router.push('/login')
      }
    }
  },
  mounted(){
    let cookie = localStorage.getItem('userName')
    if(cookie){
      this.userLogo = true;
    }
  }
}
</script>
<style lang="less">
.common-header{
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
