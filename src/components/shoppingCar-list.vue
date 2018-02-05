
<template>
  <div class="buy-list-main" >
    <div v-if="json">
      <div class="buy-list" v-for="(item,index) in json">
        <div><img class="buy-list-img" src="@/images/banner.jpg"></div>
        <div>{{item.songName}}</div>
        <div>￥<span>{{item.price}}</span></div>
        <div class="buy-list-count">
          <span v-on:click="countSubtract(index)">-</span>
          <span>{{item.count}}</span>
          <span v-on:click="countAdd(index)">+</span>
        </div>
        <div>￥<span>{{item.price*item.count}}</span></div>
        <div class="" v-on:click="del(index)">删除</div>
      </div>
    </div>
    <div  v-else>
      购物车空空如也~
    </div>
    <div>总计：<span>{{totlePrice}}</span></div>
    <button>结算</button>
  </div>

</template>
<script>
// var json = [
//   {id:1,name:'ipad mini2',price:2888,count:1},
//   {id:2,name:'ipad air2',price:3670,count:1},
//   {id:3,name:'iphone X',price:8888,count:2},
//   {id:4,name:'ipad mini2',price:2888,count:1}
// ]
var json=[]
json.push(JSON.parse(localStorage.getItem('shops')))
console.log(json);
import Vue from 'vue'
import Ad from '@/components/ad.vue'
    export default {
        name:'ShoppingCarList',

        data(){
            return {
                json,
            }
        },
        methods: {
          countAdd: function (index) {
            this.json[index].count ++
          },
          countSubtract: function (index) {
            if(this.json[index].count<=1){
              console.log('已结减少到最小库存了~');
              return;
            }
            this.json[index].count --
          },
          del: function (index){
            return this.json.splice(index,1)
          }
        },
        computed: {
          // 计算属性的 getter
          totlePrice: function () {
            let total = 0
            for(var i=0;i<this.json.length;i++){
              let item = this.json[i]
              total += item.price*item.count
            }
            return total
          }
        }
    }
</script>
<style lang="less">

    .buy-list{
        width: 100%;height: 80px;display: flex;justify-content: space-around;align-items: center;padding: 3px;
        .buy-list-count{
          width: 80px;height: 20px;display: flex;justify-content: space-between;align-items: center;
          border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;
          span{
            display: block;height: 100%;line-height: 20px;text-align: center;font-size: 20px;border-left:  1px solid #ccc;

          }
          span:nth-child(1){
            width: 30px;
          }
          span:nth-child(2){
            width: 20px;
          }
          span:nth-child(3){
            width: 30px;border-right: 1px solid #ccc;
          }
        }
        div {
          .buy-list-img{display: block;width: 120px;height: 80px;}
        }
    }
</style>
