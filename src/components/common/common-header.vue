
<template>
    <header class="common-header">
      <h1><a href="/#/index"><span>AS</span>  be  with  you forever .. </a></h1>
      <div class="">
        <span>
          <a v-if="!userLogo" v-on:click="loginAlert" >登陆</a>
          <a v-else v-on:click="loginAlert" >头像</a>
        </span>
        <span>关注微信公众号</span>
        <span>|</span>
        <span><a href="/#/shoppingCar">购物车</a></span>
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
  },
  computed:{
    userLogo: function(){
      console.log(this.cookie);
      let cookie = localStorage.getItem('userName')
      console.log(cookie);
      if(cookie){
        console.log('its cookie');
        return true;
      }else {
        return  false;
      }
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
