<template>
  <Layout >
        <Header class="Header">
          <Col span="8" aligin="left" style="text-align:left;" ><span @click="$router.go(-1);" class="iconfont icon-fanhui" ></span></Col>
          <Col span="8" aligin="center"><span>找回密码</span></Col>
          <Col span="8" aligin="middle"></Col>
        </Header>
        <Content>
          <!-- <p align-text="left">请设置拉盖账户密码</p> -->
          <ul>           

            <!-- <li><span>原始密码</span><input type="text" placeholder="填写原始密码" /></li>
            
            <li><span>新密码</span><input type="text" placeholder="填写新密码" /></li>
            
            <li><span>确认密码</span><input type="text" placeholder="再次填写确认" /></li> -->
          </ul>
        </Content>
        <!-- <Footer>Footer</Footer> -->
  </Layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scope="scope">
.Header {
  background-color: transparent;
}
.ivu-icon-ios-reverse-camera {
  font-size: 0.68rem;
}
ul {
  overflow: hidden;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 0.88rem;
    color: #000;
    span{     
      flex: 1;
    }
    input {
      border-bottom: #d0cccd solid 1px;
    }
  }
}
</style>
