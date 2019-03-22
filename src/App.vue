<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>
<script>
// import foot from '@/components/foot/footMuen.vue'; // @ is an alias to /srchk
export default {
   data(){
      return {
        
      }
   },
   components:{
   }
}
</script>

<style lang="scss">
  #app {
  
    height: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #282828;
  }
</style>
