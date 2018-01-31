<template>
    <div >
      this is user information
    </div>
</template>
<script>
import Vue from 'vue'
import vm from '@/vuex'

export default {
  name:'UserInfo',
  data(){
      return {
          msg:"hello vue2222@@@@@@@@@@@@!!",
          loginShow:false
      }
  },
  methods:{

  },
  mounted() {

 },
}
</script>
<style lang="less">
#app{
  .line{display: flex;justify-content:center;align-items: center;padding: 20px;}
}
</style>
