<template>
    <div id="body">        
       
    </div>
</template>

<script lang="ts"> 

 import {Layout} from 'vue-ydui/dist/lib.rem/layout';

 export default {
   data () {
     return {
        muenName:['我的','广场']//菜单栏名称
     }
   },
   components: {
       
   }
}
</script>

<style lang="scss" scope="scope">
    #body{
        ul{
            border-top:red solid 1px;
            li{
                color:red;
                font-size:0.28rem;
            }
        }  
    } 
</style>
