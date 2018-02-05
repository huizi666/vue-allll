<template>
  <div class="pick-list">
    <article v-for="item in asideJson">
      <img src="@/images/iambest.jpg" alt="">
      <h5>{{item.songName}}</h5>
      <p>{{item.songInfo}}</p>
      <button type="button" name="button" @click="joinCar(item)">加入购物车</button>
    </article>
  </div>
</template>
<script>
var asideJson=[
  {uid:"123",id:1,price:188,count:1,singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
  {uid:"456",id:1,price:230,count:1,singerImg:"@/images/iambest.jpg",songName:"《The Phoenix》",songInfo:"封面是一个澳大利亚摄影师Roger Stonehouse偶然在越南时捕捉到的，这不是摆拍，当时走在路上的就是这样一个不羁的Rock少年牵着一个有点羞怯的小和尚走在路上，非常奇妙一刻被摄影师捕捉下来了。看似充满矛盾和不搭调却又格外的和谐美好。取名an odd couple"},
  {uid:"789",id:1,price:100,count:1,singerImg:"@/images/iambest.jpg",songName:"《Love Of My Life 》",songInfo:"皇后乐队（Queen）是一支英国的摇滚乐队，乐队成立于1970年，由主唱Freddie Mercury、吉他手Brian May、鼓手Roger Taylor，以及1971年加入的贝斯手John Deacon四人所组成，对世界乐坛留下深远影响。皇后乐队在英国国内的地位尤高，坐拥英国音乐史上前十最高销量专辑第一位（Top1、7）；"},
  {uid:"000",id:1,price:309,count:1,singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
]
import Vue from 'vue'
    export default {
        name:'Pick',
        data(){
            return {
                asideJson,
                msg:"hello vue2222@@@@@@@@@@@@!!"
            }
        },
        methods:{
          joinCar(item){
            localStorage.setItem('shops',JSON.stringify(item))
            console.log(item)
          }
        },
    }
</script>
<style lang="less">
.pick-list{
  width: 100%;
  article{
    width: 100%;display: flex;flex-wrap: nowrap;justify-content:space-between;align-items: center;
    img{
      display: block;width: 80px;height: 80px;padding: 3px;
    }
    h5{
      width: 200px;display: block;
    }
    p{
      width: 700px;
    }
    button{
      width: 120px;height: 40px;
    }
  }
}
</style>
