
<template>
    <div class="login">
      <h3>AS be  with  you forever .. </h3>
      <div class="">
        <form>
          <label>君之名字<input type="text" placeholder="请输入用户名.." name="" value=""></label>
          <label>君之密语<input type="password" placeholder="请输入密码.." name="" value=""></label>
          <label><input type="text" placeholder="请输入验证码.." name="" value=""></label>
          <label for="rememberPassword">记住密码？<input type="checkbox" id="rememberPassword" value="false" ></label>
          <label for="loginSubmit" ><button v-on:click="loginSubmit">登录</button></label>
        </form>
      </div>
    </div>
</template>

<script>

import Vue from 'vue'
import vm from '@/vuex'
export default {
  name:'Login',
  data(){
      return {
          msg:"logo login username www",

      }
  },
  methods:{
    loginSubmit(){
      console.log(333)
      vm.$emit('loginShow', 'false')
      //Vue.set(loginShow,false)
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
