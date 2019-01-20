<template>
 <div id="login">
    <Layout class="layout-content">
        <Header class="login-top">
                <Col span="12" align="left"> 
                    <span class="iconfont icon-fanhui fanhui"></span>
                </Col>
                <Col span="12" align="right">
                    <span>注册</span>
                </Col>
        </Header>
        <Content class="login-center">
            
        </Content>
        <!-- <Footer class="login-footer">
            Footer
        </Footer> -->
    </Layout>
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
.layout-content{
    height: 100%;  box-sizing: border-box ; position: relative; 
}
.ivu-layout-header{
    padding: 0 20px !important;
}
#login {
    

  height: 100%;
  background-color: #ffffff;
  .login-top {      
    background-color: transparent;
    position: absolute; top: 0 ; left: 0 ; width: 100%;
  }
  .login-center {
    height: 100%;
    background: transparent url('./../../assets/bg.png') no-repeat;
    background-size: cover;
  }
  .login-footer{
  }
}
</style>
