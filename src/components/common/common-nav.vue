/**
aouther:huizi666
version:1.0.0
name:vue system
navbar
*
*/
<template>
    <nav class="common-nav">
      <div class="nav-list">
        <router-link class="nav-li" to="/index/home">home</router-link>
        <router-link class="nav-li" to="/index/bestPick">每日优选</router-link>
      </div>
      <router-view name="contain"></router-view>
    </nav>
</template>
<script>
import Vue from 'vue'

export default {
    name:'Nav',
    data(){
        return {
            msg:"hello vue2222@@@@@@@@@@@@!!"
        }
    },
    methods:{
      loginAlert(){
        console.log(this.$route)
        this.$router.push('/login')
      }
    },
    mounted(){
      console.log(this.$route)
    }
}
</script>
<style lang="less">
.common-nav{
  width: 100%;
  height: 100px;
  background: rgb(193, 192, 172);
  .nav-list{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-li{
      padding: 8px;
    }
  }
}
</style>
