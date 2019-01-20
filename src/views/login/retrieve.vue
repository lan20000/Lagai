<template>
  <Layout >
        <Header class="Header">
          <Col span="12" aligin="left" class="iconfont icon-fanhui" style="text-align:left;" @click="router.go(-1)"></Col>
          <Col span="12" aligin="right"></Col>
        </Header>
        <Content>
          
        </Content>
        <!-- <Footer>Footer</Footer> -->
  </Layout>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scope="scope">
  .Header{
    background-color: transparent;
  }
  .ivu-icon-ios-reverse-camera{
    font-size: 0.68rem;
  }
</style>
