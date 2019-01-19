<template>
  <div id="app">
    <foot></foot>
  </div>
</template>
<script>
import foot from '@/components/foot/footMuen.vue'; // @ is an alias to /src
export default {
   data(){
      return {
        
      }
   },
   components:{
     foot
   }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
