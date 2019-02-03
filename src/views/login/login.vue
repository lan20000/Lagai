<template>
    <div id="login">
        <!-- 启动动画 -->
        <Layout v-show="Startam">
            <!-- 返回 -->
            <Header>
                <Col span="8" class="text-left">
                <span class="iconfont icon-guanbi" @click="$router.go(-1);"></span>
                </Col>
                <Col span="8"></Col>
                <Col span="8"></Col>
            </Header>
            <Content class="Start-animation">
                <!-- logo动画 -->
                <transition name="Startam-logo" enter-active-class="animated flip" leave-active-class="animated fadeOutUp">
                    <img src="./../../assets/logo.png" v-if="Start" />
                </transition>
                <!-- 登录/注册 -->
                <transition name="Startam-option" enter-active-class="animated bounceInUp" leave-active-class="animated fadeOutDown" v-on:leave="leave">
                    <div class="Start-option" v-if="Start">
                        <span @click="Start=false" :style="{color:( Start==false ? '#3b3334' : '')}">登录</span>
                        <span>|</span>
                        <span>
                            <router-link to="register" style="color:#c2c2c2;">注册</router-link>
                        </span>
                    </div>
                </transition>
                <!-- 帮助 -->
                <Poptip placement="top" class="wen" v-if="Start">
                    <div class="wen-content" slot="content">
                        <span>有什么可以帮助你的吗？</span><br />
                        <router-link to="serviceCenter" @click="Start=true,Startam=true">→</router-link>
                    </div>
                    <span class="iconfont icon-xunwen"></span>
                </Poptip>
            </Content>
        </Layout>
        <!-- 登录 -->
        <Layout class="layout-content" v-show="Startam == false">
            <Header class="login-top">
                <Col span="12" align="left">
                <span class="iconfont icon-fanhui" @click="Start=true,Startam=true"></span>
                </Col>
                <Col span="12" align="right">
                <router-link to="retrieve" class="iconfont icon-mima " @click="Start=true,Startam=true"></router-link>
                </Col>
            </Header>
            <Content class="login-center">
                <!-- logo -->
                <!-- <div class="img-logo animated pulse">
                    <img src="./../../assets/logo.png" />
                </div> -->
                <!-- 头像 -->
                <div class="user-img-config">
                    <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated rollOut">
                        <div class="user-img" v-show="userimg">
                            <img src="./../../assets/bg.png" />
                        </div>
                    </transition>
                </div>
                <!-- 偷看的老鹰 -->
                <div class="login-owl-Content">
                    <div id="login-owl-head" :class="owl==1 ? 'inputPassword' :'' ">
                        <div class="owl-patch"></div>
                        <div class="owl-esto-left"></div>
                        <div class="owl-esto-right"></div>
                        <div class="owl-left"></div>
                        <div class="owl-right"></div>
                    </div>
                </div>
                <!-- input -->
                <div class="login-input">
                    <!-- 输入用户名 -->
                    <div class="i-name" :class="amname ? 'animated zoomIn' : '' ">
                        <span class="iconfont icon-yonghu" v-if="amname==false"></span>
                        <div class="login-input-content">
                            <input type="text" placeholder="请输入用户名或者邮箱..." @blur="username(0)" @focus="username(1)" v-model="user.name" />
                            <Icon type="ios-close" v-if="user.name!=null&&user.name.length>1" @click.stop="user.name=''" />
                        </div>
                    </div>
                    <!-- 输入密码 -->
                    <div class="i-pass" :class="ampass ? 'animated zoomIn' : '' ">
                        <span class="iconfont icon-tubiao202" v-if="ampass==false"></span>
                        <div class="login-input-content">
                            <input type="password" placeholder="请输入密码..." @blur="userpass(0)" @focus="userpass(1)" v-model="user.pass" />
                            <Icon type="ios-close" v-if="user.pass!=null&&user.pass.length>1" @click.stop="user.pass=''" />
                        </div>
                    </div>
                </div>
                <button :class="ilogin ? 'may' : ''" class="login" @click.stop="loginfn" v-show="succeed==false&&(success==2||success==3)">登录</button>                
                <!-- 成功/失败 动画 -->
                <div class="Startam-content">
                    <transition name="Startam-succeed" leave-active-class="animated bounceOutDown" enter-active-class="animated zoomIn">
                        <div class="L3" v-if="succeed">
                            <span class="iconfont icon-hook-w" v-show="success"></span>
                            <span class="iconfont icon-guanbi1" v-show="success==2"></span>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                                <circle fill="none" stroke="#3b3334" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"></circle>
                                <circle fill="#3b3334" stroke="#3b3334" stroke-width="3" cx="8" cy="54" r="6" transform="rotate(69.0451 50 48.7672)">
                                    <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite"></animateTransform>
                                </circle>
                                <circle fill="none" stroke="#3b3334" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"></circle>
                            </svg>
                        </div>
                    </transition>
                </div>
            </Content>
            <Footer class="login-footer">
                您还没有注册？
                <router-link to="register" style="color:#595f77;">注册用户</router-link>
            </Footer>
        </Layout>
        <!-- 跳转动画 -->

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
      }, //用户对象
      ampass: false, //输入密码动画判断
      amname: false, //输入名称动画判断
      Start: false, //开启动画
      Startam: true, //动画容器
      ilogin: false, //是否允许登录
      succeed: false, //是否登录正在登录
      success: 3, //登录成功成功回调参数
      owl: 0 //猫头鹰遮眼判断
    };
  },
  watch: {
    "user.name"() {
      if (this.user.name == "" || this.user.name == null) {
        this.amname = false;
        return;
      } //账号为空
      this.mylogin();
    },
    "user.pass"() {
      if (this.user.pass == "" || this.user.pass == null) {
        this.ampass = false;
        return;
      } //密码为空
      this.mylogin();
    }
  },
  methods: {
    //登录验证
    mylogin() {
      if (
        this.user.name != "" &&
        this.user.name != null &&
        this.user.pass != "" &&
        this.user.pass != null
      ) {
        this.ilogin = true;
        return;
      }
      this.ilogin = false;
    },
    //登录处理
    loginfn() {
      var _this = this;
      if (this.ilogin) {
        this.succeed = true;
        this.$Message.success("登录成功");
        setTimeout(function() {
          _this.succeed = false;
          _this.success = 1;
          setTimeout(function(){
            _this.$router.replace('/')
          },1000);          
        }, 1000);
      }
    },
    //关闭
    leave(el, done) {
      var _this = this;
      this.$Loading.finish();
      _this.Start = false;
      setTimeout(function() {
        _this.Startam = false;
      }, 600);
    },
    //登录按钮处理
    loginbt() {},
    //用户姓名处理
    username(key) {
      this.owl = 0;
      if (this.user.name == "" || this.user.name == null) {
        this.amname = false;
        return;
      } //用户账户为空
      //key为1为获取焦点
      if (key != 1) {
        this.amname = true;
      }
      //头像展示和隐藏
      this.userimg ? (this.userimg = false) : (this.userimg = true);
    },
    //用户密码处理
    userpass(key) {
      //猫头鹰遮住
      if (key == 1) this.owl = 1;
      if (this.user.pass == "" || this.user.pass == null) {
        this.ampass = false;
        return;
      } //用户账户为空
      //key为1为获取焦点
      if (key != 1) {
        this.ampass = true;
      }
      this.owl = 1;
    }
  },
  components: {},
  mounted() {
    this.Start = true;
  }
};
</script>

<style lang="scss" scoped="scoped">
@import "./../../assets/public/animate.css";

// .fold {
//   -webkit-animation-name: fold;
//   animation-name: fold; }

// @keyframes fold {
//   0% {
//     -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
//     animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
//     -webkit-transform: scale3d(1, 1, 1);
//     transform: scale3d(1, 1, 1); }
//   30% {
//     -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     -webkit-transform: scale3d(1, 0.4, 1);
//     transform: scale3d(1, 0.4, 1); }
//   60% {
//     opacity: 1;
//     -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     -webkit-transform: scale3d(0.4, 0.4, 1);
//     transform: scale3d(0.4, 0.4, 1); }
//   100% {
//     opacity: 0;
//     -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
//     animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
//     -webkit-transform: scale3d(0.2, 0.2, 0.2);
//     transform: scale3d(0.2, 0.2, 0.2); } }

/*猫头鹰*/
.login-owl-Content {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.inputPassword {
  .owl-esto-left,
  .owl-esto-right {
    -webkit-transform: scale(1) !important;
    -moz-transform: scale(1) !important;
    -o-transform: scale(1) !important;
    -ms-transform: scale(1) !important;
    transform: scale(1) !important;
    background-position: 0 0 !important;
    opacity: 1 !important;
    filter: none !important;
    -webkit-transition: background-position 0.3s ease-out,
      -webkit-transform 0.3s ease-out !important;
    -moz-transition: background-position 0.3s ease-out,
      -moz-transform 0.3s ease-out !important;
    -o-transition: background-position 0.3s ease-out, -o-transform 0.3s ease-out !important;
    -ms-transition: background-position 0.3s ease-out,
      -ms-transform 0.3s ease-out !important;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out !important;
  }
  .owl-left,
  .owl-right {
    -webkit-transform: translateX(40px) scale(0) translateY(-10px);
    -moz-transform: translateX(40px) scale(0) translateY(-10px);
    -o-transform: translateX(40px) scale(0) translateY(-10px);
    -ms-transform: translateX(40px) scale(0) translateY(-10px);
    transform: translateX(40px) scale(0) translateY(-10px);
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
  }
}
#login-owl-head {
  margin-left: 0.25rem;
  $owlleft-width: 0.86rem;
  $owlleft-height: 0.5rem;
  $estowidth: 1.02rem;
  $estoheight: 0.86rem;
  width: 2.32rem;
  height: 1.84rem;
  top: 0.1rem;
  background-image: url(./../../assets/images/login/tou.png);
  background-size: 2.32rem 1.84rem;
  position: relative;

  .owl-patch {
    position: absolute;
    display: none;
    width: 2.32rem;
    height: 1.84rem;
    background-image: url(./../../assets/images/login/patch.png);
    background-size: 2.32rem 1.84rem;
  }

  //睁开动画
  .owl-left {
    position: absolute;
    left: -0.1rem;
    top: 1.5rem;
    width: $owlleft-width;
    height: $owlleft-height;
    background-image: url(./../../assets/images/login/left.png);
    background-size: $owlleft-width $owlleft-height;
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }
  .owl-right {
    position: absolute;
    right: -0.1rem;
    top: 1.5rem;
    width: $owlleft-width;
    height: $owlleft-height;
    background-image: url(./../../assets/images/login/right.png);
    background-size: $owlleft-width $owlleft-height;
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }

  //遮眼动画
  .owl-esto-left {
    -webkit-transform: translateX(57px) scale(0.8);
    -moz-transform: translateX(57px) scale(0.8);
    -o-transform: translateX(57px) scale(0.8);
    -ms-transform: translateX(57px) scale(0.8);
    transform: translateX(57px) scale(0.8);
    -webkit-transform-origin: 0 40px;
    -moz-transform-origin: 0 40px;
    -o-transform-origin: 0 40px;
    -ms-transform-origin: 0 40px;
    transform-origin: 0 40px;
    -webkit-transition: background-position 0.3s ease-out,
      -webkit-transform 0.3s ease-out, opacity 0s linear 0.3s;
    -moz-transition: background-position 0.3s ease-out,
      -moz-transform 0.3s ease-out, opacity 0s linear 0.3s;
    -o-transition: background-position 0.3s ease-out, -o-transform 0.3s ease-out,
      opacity 0s linear 0.3s;
    -ms-transition: background-position 0.3s ease-out,
      -ms-transform 0.3s ease-out, opacity 0s linear 0.3s;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out,
      opacity 0s linear 0.3s;
    background-position: 0 25px;
    background-repeat: no-repeat;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
  }
  .owl-esto-right {
    -webkit-transform: translateX(-34px) scale(0.8);
    -moz-transform: translateX(-34px) scale(0.8);
    -o-transform: translateX(-34px) scale(0.8);
    -ms-transform: translateX(-34px) scale(0.8);
    transform: translateX(-34px) scale(0.8);
    -webkit-transform-origin: 0 40px;
    -moz-transform-origin: 0 40px;
    -o-transform-origin: 0 40px;
    -ms-transform-origin: 0 40px;
    transform-origin: 0 40px;
    -webkit-transition: background-position 0.3s ease-out,
      -webkit-transform 0.3s ease-out, opacity 0s linear 0.3s;
    -moz-transition: background-position 0.3s ease-out,
      -moz-transform 0.3s ease-out, opacity 0s linear 0.3s;
    -o-transition: background-position 0.3s ease-out, -o-transform 0.3s ease-out,
      opacity 0s linear 0.3s;
    -ms-transition: background-position 0.3s ease-out,
      -ms-transform 0.3s ease-out, opacity 0s linear 0.3s;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out,
      opacity 0s linear 0.3s;
    background-position: 0 25px;
    background-repeat: no-repeat;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
  }
  .owl-esto-left {
    left: -0.15rem;
    top: 0.99rem;
    position: absolute;
    width: $estowidth;
    height: $estoheight;
    background-image: url(./../../assets/images/login/esto-left.png);
    background-size: $estowidth $estoheight;
  }
  .owl-esto-right {
    position: absolute;
    right: 0rem;
    top: 0.99rem;
    width: $estowidth;
    height: $estoheight;
    background-image: url(./../../assets/images/login/esto-right.png);
    background-size: $estowidth $estoheight;
  }
}
/* logo */
.img-logo {
  width: 2.67rem;
  height: 2.55rem;
  img {
    height: 100%;
    width: 100%;
  }
}
.login-input {
  caret-color: #62ccf4;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.maotou {
  position: relative;
  width: 0.4rem !important;
  height: 0.46rem !important;
}

.Startam-content{
    height: 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
}
.Start-animation {
  position: absolute;
  height: 90%;
  width: 100%;
  top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin: 20% auto;
    width: 2.57rem;
    height: 2.45rem;
  }
}
.L3 {
  width: 0.68rem;
  height: 0.68rem;
  margin: 0.2rem 0rem;
  position: relative;
}
.icon-hook-w,
.icon-guanbi1 {
  position: absolute;
  top: 0.12rem;
  left: 0.21rem;
  z-index: 999;
}
.wen {
  position: fixed;
  bottom: 0rem;
  margin: 1rem 0rem;
}
.ivu-layout-header {
  border: none !important;
}

.may {
  color: #ffffff !important;
  background: #3b3334;
}

.wen-content {
  text-align: center;
}

.Start-option {
  width: 100%;
  display: flex;
  color: #c2c2c2;
  span {
    flex: 1;
  }
  span:last-child {
    text-align: left;
  }
  span:first-child {
    text-align: right;
  }
}

.logo-img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    text-align: left;
    color: #2b2426;
    padding-left: 0.25rem;
  }
}

.login {
  width: 1.68rem;
  height: 0.48rem;
  display: flex;
  margin: 0.35rem auto;
  border: none;
  border-radius: 0.75rem;
  border: #3a3334 solid 1px;
  align-items: center;
  justify-content: center;
  color: #3a3334;
}

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
  img {
    height: inherit;
    width: inherit;
  }
  width: 1rem;
  position: absolute;
  border-radius: 50%;
  height: 1rem;
}
.forget {
  padding-right: 0.1rem;
  padding-top: 0.2rem;
}
.layout-content {
  height: 100%;
  box-sizing: border-box;
  position: relative;
  // background-color: #313477 !important;
}

.iconfont {
  color: #3a3334;
}
#login {
  height: 100%;
  width: 100%;
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
    .i-name,
    .i-pass {
      height: 0.88rem;
      margin-bottom: 0.12rem;
      display: flex;
      width: 88%;
      align-items: center;
      justify-content: center;
      font-size: 0.28rem;
      input {
        color: #3a3334;
        padding-left: 0.24rem;
        height: 0.68rem;
        text-align: center;
        flex: 1;
        height: 100%;
      }
      span {
        color: #3a3334;
        font-size: 0.38rem;
        text-align: right;
        flex: 0;
      }
    }
  }
  .login-footer {
    background-color: transparent !important;
  }
}

.login-input-content {
  // position: relative;

  .ivu-icon-ios-close {
    font-size: 0.58rem;
  }
}
</style>
