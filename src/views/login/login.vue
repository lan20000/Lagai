<template>
 <div id="login">
    <!-- <div class="">

    </div> -->
    <Layout class="layout-content">
        <Header class="login-top">
                <Col span="12" align="left"> 
                    <span class="iconfont icon-fanhui fanhui" @click="$router.go(-1);"></span>
                </Col>
                <Col span="12" align="right">
                   <router-link to="retrieve" class="iconfont icon-mima "></router-link>
                </Col>
        </Header>
        <Content class="login-center">             
            <div class="user-img-config">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated rollIn"
                    leave-active-class="animated rollOut"
                >
                    <div class="user-img" v-show="userimg"></div>
                </transition>                
            </div>
            <div class="i-name" :class="amname ? 'animated rubberBand' : '' ">
                <span class="iconfont icon-yonghu" v-if="amname==false"></span>
                </transition>
                <input type="text" placeholder="请输入用户名或者邮箱..." @blur="username(0)" @focus="username(1)" v-model="user.name" />
            </div>
            <div class="i-pass" :class="ampass ? 'animated rubberBand' : '' ">
                <span class="iconfont icon-tubiao202" v-if="ampass==false"></span>
                <input type="password" placeholder="请输入密码..." @blur="userpass(0)" @focus="userpass(1)" v-model="user.pass"/>
            </div>
            <button class="login" @click.stop="">登录</button>
            <!-- <p>青春永不停息...</p> -->
            <Col span="24" align="right" class="forget">
                <!-- <router-link to="retrieve" style="color:#595f77;">忘记了密码？</router-link> -->
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
      }, //用户对象
      ampass: false, //输入密码动画判断
      amname: false //输入名称动画判断
    };
  },
  watch: {
    "user.name"() {
      if (this.user.name == "" || this.user.name == null) {
        this.amname = false;
        console.log(this.user.name);
        return;
      } //用户账户为空
    },
    "user.pass"() {
      if (this.user.pass == "" || this.user.pass == null) {
        this.ampass = false;
        return;
      } //用户账户为空
    }
  },
  methods: {
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
      console.log(this.ampass);
      console.log(this.user.pass);
      if (this.user.pass == "" || this.user.pass == null) {
        this.ampass = false;
        return;
      } //用户账户为空
      if (key != 1) this.ampass = true;
      console.log(this.ampass);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "./../../assets/public/animate.css";

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
  width: 1.5rem;
  height: 0.44rem;
  display: flex;
  margin-top: 0.32rem;
  border: none;
  // background-color: #312e3f;
  border-radius: 0.75rem;
  border: #8a8386 solid 1px;
  align-items: center;
  justify-content: center;
  color: #54596c;
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
  // background-color: #313477 !important;
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
      margin-bottom: 0.12rem;
      display: flex;
      width: 68%;
      align-items: center;
      justify-content: center;
      input {
        color: #54596c;
        padding-left: 0.24rem;
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
