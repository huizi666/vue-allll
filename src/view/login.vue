
<template>
    <div class="login">
      <h3>AS be  with  you forever .. </h3>
      <div class="login-form">
          <div ><label>君之名字</label><input class="login-input" type="text" placeholder="请输入用户名.." name="userName" v-model="userName"></div>
          <div ><label>君之密语</label><input class="login-input"  type="password" placeholder="请输入密码.." name="passWord" v-model="passWord"></div>
          <div ><label>验证码</label><input class="login-input"  type="text" placeholder="请输入验证码.." name="authCode" v-model="authCode"><span class="auth-code">1219</span></div>
          <div >
            <label for="rememberPassword">记住密码？<input type="checkbox" id="rememberPassword" vlaue="false" v-model="rememberPassword" ></label>
            <button v-on:click="loginSubmit">登录</button>
          </div>
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
          userName:'',
          passWord:'',
          authCode:'',
          rememberPassword:false
      }
  },
  methods:{
    loginSubmit(){
      var that = this
      //console.log(that.userName)
      if(!that.userName || !that.passWord){
        alert('请输入用户名密码')
        return
      }
      localStorage.setItem('userName',JSON.stringify(this.userName))
      localStorage.setItem('passWord',JSON.stringify(this.passWord))
      history.go(-1);
      // this.$router.replace('/index')
      //Vue.set(loginShow,false)
    }
  }
}
</script>
<style lang="less">
.login{
  width: 455px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(198, 195, 214);
  h3{
    padding: 10px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    div{
      padding: 10px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      .login-input{
        width: 120px;
        height: 25px;
        border: 1px solid rgb(204, 156, 212);
      }
      .auth-code{
        border: 1px solid rgb(204, 156, 212);
        padding: 2px;
        font-weight: bold;
      }
    }
  }


}
</style>
