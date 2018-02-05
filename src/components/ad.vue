<template>
<article class="ad-list">
  <div class="aside-ad" v-for="item in asideJson">
    <img src="@/images/iambest.jpg" alt="">
    <h5>{{item.songName}}</h5>
    <p>{{item.songInfo}}</p>
  </div>
</article>
</template>
<script>
var asideJson=[
  {singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
  {singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
  {singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
  {singerImg:"@/images/iambest.jpg",songName:"《I am Going to the West》",songInfo:"作词、作曲、演唱：Connie Dover副歌部分改编自美国Alabama的民歌。是一首叙述拓荒先民怀着对西部的梦想到美国西部垦荒的歌曲。"},
]
import Vue from 'vue'
    export default {
        name:'Ad',
        data(){
            return {
                asideJson,
                msg:"hello vue2222@@@@@@@@@@@@!!"
            }
        },
        mounted(){
          console.log(asideJson);
        }
    }
</script>
<style lang="less">
.ad-list{
  width: 20%;height: 600px;overflow: scroll;
  .aside-ad{
    padding: 5px;display: flex;flex-wrap: wrap;justify-content: center;
    img{display: block;width: 150px;height: 150px;}
    p{line-height: 12px;font-size: 12px;text-indent: 24px;}
  }
}
</style>
