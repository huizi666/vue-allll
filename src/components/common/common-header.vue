
<template>
    <header class="common-header">
      <h1><span>AS</span>  be  with  you forever .. </h1>
      <div class="">
        <span v-on:click="loginAlert"><a >登陆</a></span>
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

      }
  },
  methods:{
    loginAlert(){
      console.log(222)
    }
  },
  mount:{
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
