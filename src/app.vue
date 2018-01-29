<template>
    <div id="app">
        <Header/>
        <Nav/>
    </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/common/common-header.vue'
import Nav from './components/common/common-nav.vue'

export default {
    name:'app',
    components:{Header,Nav},
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
