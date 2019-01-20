<template>
 <div id="login">
    <Layout class="layout-content">
        <Header class="login-top">
                <Col span="12" align="left"> 
                    <span class="iconfont icon-fanhui fanhui"></span>
                </Col>
                <Col span="12" align="right">
                    <!-- <span>注册</span> -->
                </Col>
        </Header>
        <Content class="login-center">
            <div class="i-name">
                <span class="iconfont icon-yonghu"></span>
                <input type="text" placeholder="用户名" />
            </div>
            <div class="i-pass">
                <span class="iconfont icon-tubiao202"></span>
                <input type="password"  placeholder="密码" />
            </div>
            <button class="login">登录</button>
        </Content>
        <Footer class="login-footer">
            您还没有注册？ <router-link to="register" style="color:#595f77;">注册用户</router-link>
        </Footer>
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
    background-color: #252b3b !important;
}
.login{
    width: 68%;
    height: 0.88rem;
    display: flex;
    border: none;
    background-color: #312e3f;
    align-items: center;
    justify-content: center;    
    color: #54596c;
}
.ivu-layout-header{
    padding: 0 20px !important;
}
.iconfont{
    color: #54596c;
}
#login {
  height: 100%;
  background-color: #ffffff;
  .login-top {      
    background-color: transparent;
    position: absolute; top: 0 ; left: 0 ; width: 100%;
  }
  .login-center {
    padding-top:64px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    
    // background: transparent url('./../../assets/bg.png') no-repeat;
    // background-size: cover;
    .i-name,.i-pass{
        height: 0.88rem;
        display: flex;
        width: 68%;
        align-items: center;
        justify-content: center;
        input{
            color: #54596c;
            padding-left: 0.11rem;
            width: 100%;
            height: 0.68rem;
        }
        span{
            color: #54596c;
        }        
    }
  }
  .login-footer{
      background-color: transparent !important;
  }
}
</style>
