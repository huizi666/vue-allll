
<template>
    <header>this is header & login
      <img src="@/images/banner.jpg" alt="logo" />
      <span>{{msg}}</span>
    </header>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'Header',
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
