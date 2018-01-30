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
        <router-link class="nav-li" to="/home">home</router-link>
        <router-link class="nav-li" to="/bestPick">每日优选</router-link>
      </div>
      <router-view></router-view>
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
}
</script>
<style lang="less">
.common-nav{
  width: 100%;
  height: 800px;
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
