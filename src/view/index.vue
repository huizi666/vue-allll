<template>
    <div>
        <Header/>
        <Banner/>
        <div class="line">——————AiShare——————</div>
        <Nav/>
    </div>
</template>
<script>
import Vue from 'vue'
import Header from '@/components/common/common-header.vue'
import Nav from '@/components/common/common-nav.vue'
import Banner from '@/components/banner.vue'
import Login from '@/view/login.vue'
import vm from '@/vuex'

export default {
  name:'Index',
  components:{Header,Nav,Banner,Login},
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
