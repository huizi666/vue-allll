<template>
    <div class="buy">
      <Ad/>
      <ShoppingCarList/>
    </div>
</template>
<script>
import Vue from 'vue'
import vm from '@/vuex'
import Ad from '@/components/ad.vue'
import ShoppingCarList from '@/components/shoppingCar-list'

export default {
  name:'ShoppingCar',
  components:{Ad,ShoppingCarList},
  data(){
      return {
      }
  },
  methods:{

  },
  mounted() {

 },
}
</script>
<style lang="less">
.buy{
  display: flex;justify-content: space-around;
  .buy-list-main{
    width: 80%;
  }
}
</style>
