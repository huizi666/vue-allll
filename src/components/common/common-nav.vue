/**
aouther:huizi666
version:1.0.0
name:vue system
naebar
*/
<template>
    <nav>
      <router-link to="/home/:id">Go to Foo</router-link>
      <router-link to="/home/:id">Go to Bar</router-link>
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
    #app{
        img{width:100px;}
    }
</style>
