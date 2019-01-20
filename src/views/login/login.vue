<template>
 <div id="login">
    <Layout class="layout-content">
        <Header class="login-top">
                <Col span="12" align="left"> 
                    <span class="iconfont icon-fanhui fanhui" @click="$router.go(-1);"></span>
                </Col>
                <Col span="12" align="right">
                    <!-- <span>注册</span> -->
                </Col>
        </Header>
        <Content class="login-center">           
            <div class="user-img-config">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated bounce"
                    leave-active-class="animated bounceOutRight"
                >
                    <div class="user-img" v-show="userimg"></div>
                </transition>                
            </div>
            <div class="i-name">
                <span class="iconfont icon-yonghu"></span>
                <input type="text" placeholder="用户名" @blur="username" @focus="username" v-model="user.name" />
            </div>
            <div class="i-pass">
                <span class="iconfont icon-tubiao202"></span>
                <input type="password"  placeholder="密码" :model="user.pass"/>
            </div>
            <button class="login">登录</button>
            <Col span="24" align="right" class="forget">
                <router-link to="retrieve" style="color:#595f77;">忘记了密码？</router-link>
            </Col>
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
    return {
      userimg: false, //用户头像是否显示
      user: {
        name: null, //用户账户
        pass: null //用户密码
      } //用户对象
    };
  },
  methods: {
    //用户姓名处理
    username() {
      if (this.user.name == "" || this.user.name == null) {
        console.log(this.user);
        return;
      } //用户账户为空
      this.userimg ? (this.userimg = false) : (this.userimg = true);
    }
  },
  components: {}
};
</script>

<style lang="scss" scope="scope">
@import "./../../assets/public/animate.css";
.user-img-config {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: relative;
  height: 3rem;
  width: 100%;
  border-radius: 50%;
}
.user-img {
  // background-color: red;
  width: 1rem;
  position: absolute;
  border-radius: 50%;
  height: 1rem;
  background-image: url("./../../assets/bg.png");
}
.forget {
  padding-right: 0.1rem;
  padding-top: 0.2rem;
}
.layout-content {
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-color: #252b3b !important;
}
.login {
  width: 68%;
  height: 0.88rem;
  display: flex;
  border: none;
  background-color: #312e3f;
  align-items: center;
  justify-content: center;
  color: #54596c;
}
.iconfont {
  color: #54596c;
}
#login {
  height: 100%;
  background-color: #ffffff;
  .login-top {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .login-center {
    padding-top: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    // background: transparent url('./../../assets/bg.png') no-repeat;
    // background-size: cover;
    .i-name,
    .i-pass {
      height: 0.88rem;
      display: flex;
      width: 68%;
      align-items: center;
      justify-content: center;
      input {
        color: #54596c;
        padding-left: 0.11rem;
        width: 100%;
        height: 0.68rem;
      }
      span {
        color: #54596c;
      }
    }
  }
  .login-footer {
    background-color: transparent !important;
  }
}
</style>
