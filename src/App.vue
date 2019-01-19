<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>
<script>
// import foot from '@/components/foot/footMuen.vue'; // @ is an alias to /src
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
