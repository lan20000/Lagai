<template>
    <div class="body">
        
        <router-view></router-view>
    
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  components: {

  }
};
</script>

<style lang="scss" scope="scope">
@import "./../../assets/fonts/iconfont.css";
  .body{
    height: 100%;
    color: #54596c;
    background-color: #252b3b !important;
  }
  .ivu-layout,
  .ivu-layout-footer,
  .ivu-layout-header{
      background-color: transparent;
  }
  .ivu-layout-footer{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-layout-header {
    padding: 0 20px !important;
  }
</style>
