<template>
    <div class="body">        
        <router-view class="body-content"></router-view>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped="scoped">
@import "./../../assets/fonts/iconfont.css";

.body-content{

  .ivu-layout,
  .ivu-layout-footer,
  .ivu-layout-header {
    background-color: transparent;
  }
  .ivu-layout-footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /**/
  ::-webkit-input-placeholder {
    text-align: right;
  } /* 使用webkit内核的浏览器 */
  :-moz-placeholder {
    text-align: right;
  } /* Firefox版本4-18 */
  ::-moz-placeholder {
    text-align: right;
  } /* Firefox版本19+ */
  :-ms-input-placeholder {
    text-align: right;
  } /* IE浏览器 */
  
}
.Header {
  background-color: transparent;
}
.body {
  height: 100%;
  color: #54596c;
}
</style>
