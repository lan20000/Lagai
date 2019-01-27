<template>
 <div id="login">
    <!-- 启动动画 -->
     <Layout v-show="Startam" >  
      <!-- 返回 -->
      <Header>
        <Col span="8" class="text-left">
         <span class="iconfont icon-fanhui" @click="$router.go(-1);"></span>
        </Col>
        <Col span="8"></Col>
        <Col span="8"></Col>        
      </Header>
      <Content class="Start-animation">
        <!-- logo动画 -->
        <transition
            name="Startam-logo"
            enter-active-class="animated flip"
            leave-active-class="animated fadeOutUp" 
        >
          <img src="./../../assets/logo.png" v-if="Start" />
        </transition>
        <!-- 登录/注册 -->
        <transition
            name="Startam-option"
            enter-active-class="animated bounceInUp"
            leave-active-class="animated fadeOutDown"
            v-on:leave="leave"
        >      
        <div class="Start-option" v-if="Start">
          <span @click="Start=false" :style="{color:( Start==false ? '#3b3334' : '')}">登录</span>
          <span>|</span>
          <span><router-link to="register" style="color:#c2c2c2;">注册</router-link></span>
        </div>
        </transition>
        <!-- 帮助 -->
        <Poptip placement="top" class="wen" v-if="Start" >     
          <div class="wen-content" slot="content">
            <span>有什么可以帮助你的吗？</span><br />         
            <router-link to="serviceCenter" @click="Start=true,Startam=true">→</router-link>
          </div>           
          <span class="iconfont icon-xunwen"></span>
        </Poptip>
      </Content>
    </Layout>      
    <!-- END 启动动画 -->
    <Layout class="layout-content" v-show="Startam == false">
        <Header class="login-top">
                <Col span="12" align="left"> 
                    <span class="iconfont icon-fanhui" @click="Start=true,Startam=true" ></span>
                </Col>
                <Col span="12" align="right">
                   <router-link to="retrieve" class="iconfont icon-mima " @click="Start=true,Startam=true"></router-link>
                </Col>
        </Header>
        <Content class="login-center">         
            <div class="img-logo">
              <img src="./../../assets/logo.png" />
            </div> 
            <!-- 头像 -->       
            <div class="user-img-config">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated rollIn"
                    leave-active-class="animated rollOut"
                >
                    <div class="user-img" v-show="userimg">
                      <img src="./../../assets/bg.png" />
                    </div>
                </transition>                
            </div>
            <!-- END头像 -->
            <div class="i-name" :class="amname ? 'animated zoomIn' : '' ">
                <transition
                    name="Startam-option"
                    enter-active-class="animated bounceInUp"
                    leave-active-class="animated fadeOutDown"
                    @leave="leave"
                > 
                  <span class="iconfont icon-yonghu" v-if="amname==false"></span>
                </transition>
                <input type="text" placeholder="请输入用户名或者邮箱..." @blur="username(0)" @focus="username(1)" v-model="user.name" />
            </div>
            <div class="i-pass" :class="ampass ? 'animated zoomIn' : '' ">
                <span class="iconfont icon-tubiao202" v-if="ampass==false"></span>
                <input type="password" placeholder="请输入密码..." @blur="userpass(0)" @focus="userpass(1)" v-model="user.pass"/>
            </div>
            <button :class="ilogin ? 'may' : ''"  class="login" @click.stop="loginfn" v-show="succeed==false" >登录</button>
            <transition
                name="Startam-succeed"
                leave-active-class="animated bounceOutDown" 
            > 
                <div class="L3" v-if="succeed"> 
                  <span class="iconfont icon-hook-w" v-show="success"></span>
                  <span class="iconfont icon-guanbi1" v-show="success==false"></span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                      <circle fill="none" stroke="#3b3334" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"></circle>
                      <circle fill="#3b3334" stroke="#3b3334" stroke-width="3" cx="8" cy="54" r="6" transform="rotate(69.0451 50 48.7672)">
                        <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite"></animateTransform>
                      </circle>
                      <circle fill="none" stroke="#3b3334" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"></circle>
                  </svg>
                </div>
            </transition>
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
      }, //用户对象
      ampass: false, //输入密码动画判断
      amname: false, //输入名称动画判断
      Start: false, //开启动画
      Startam: true, //动画容器
      ilogin: false, //是否允许登录
      succeed: false, //是否登录正在登录
      success: 3 //登录成功成功回调参数
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
      if (this.user.name == "" || this.user.name == null) {
        this.amname = false;
        return;
      } //用户账户为空
      if (key != 1) this.amname = true;
      this.userimg ? (this.userimg = false) : (this.userimg = true);
    },
    //用户密码处理
    userpass(key) {
      if (this.user.pass == "" || this.user.pass == null) {
        this.ampass = false;
        return;
      } //用户账户为空
      if (key != 1) this.ampass = true;
    }
  },
  components: {},
  mounted() {
    this.Start = true;
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/public/animate.css";

.img-logo {
  width: 2.67rem;
  height: 2.55rem;
  img {
    height: 100%;
    width: 100%;
  }
}

.maotou{
  position: relative;
  width: 0.4rem !important;
  height: 0.46rem !important;
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
  margin-top: 0.32rem;
  border: none;
  // background-color: #312e3f;
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
      margin-bottom: 0.12rem;
      display: flex;
      width: 68%;
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
        // border-bottom: #afabac solid 1px;
      }
      span {
        color: #3a3334;
      }
    }
  }
  .login-footer {
    background-color: transparent !important;
  }
}
</style>
