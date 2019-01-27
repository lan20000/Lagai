<template>
  <Layout>
        <Header class="Header">
          <Col span="12" aligin="left" style="text-align:left;"><span @click="$router.go(-1);" class="iconfont icon-fanhui"></span></Col>
          <Col span="12" aligin="right"></Col>
        </Header>
        <Content>
          <Upload action="">
              <Button icon="ios-reverse-camera" class="Upload"></Button>
          </Upload>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder="请输入昵称..." v-model="userdata.name" /></Col>
              <Col span="6" pull="18">昵称</Col>
          </Row>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder="请输入账号..."  v-model="userdata.num" /></Col>
              <Col span="6" pull="18">账号</Col>
          </Row>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder="请输入密码..." @blur="passaffair()"  v-model="userdata.pass" /></Col>
              <Col span="6" pull="18">密码</Col>
          </Row>
          <Row class="row" v-show="affirmPass">              
              <Col span="18" push="6"><input type="text" placeholder="确认密码...."  /></Col>
              <Col span="6" pull="18">确认密码</Col>
          </Row>
        </Content>
        <Footer>
          <button class="login">注册</button>
        </Footer>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      affirmPass: false, //确认密码输入显示
      userdata: {
        name: null,
        num: null,
        pass: null
      } //用户数据
    };
  },
  watch: {
    "userdata.pass"() {
      console.log(this.userdata);
      if (this.userdata.pass != null && this.userdata.pass != "") {
        this.affirmPass = true;
        return;
      }
      console.log(this.affirmPass);
      this.affirmPass = false;
    }
  },
  methods: {
    routers() {},
    //输入密码验证
    passaffair() {}
  },
  mounted() {
    // this.routers();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.ivu-layout,
.ivu-layout-footer,
.ivu-layout-header {  
  border: none !important;
  background-color: transparent;
}
.ivu-layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ivu-layout-header {
  padding: 0 20px !important;
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
.Upload {
  width: 2rem;
  height: 2rem;
  border: #54596c solid 1px;
  border-radius: 50% !important;
}
.ivu-icon-ios-reverse-camera {
  font-size: 0.68rem;
}
input {
  width: 100%;
  color: #54596c;
  display: block;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  margin: 0.1rem 0rem 0.1rem 0rem;
}
/**/
::-webkit-input-placeholder {
  padding-right: 0.88rem;
} /* 使用webkit内核的浏览器 */
:-moz-placeholder {
  padding-right: 0.88rem;
} /* Firefox版本4-18 */
::-moz-placeholder {
  padding-right: 0.88rem;
} /* Firefox版本19+ */
:-ms-input-placeholder {
  padding-right: 0.88rem;
} /* IE浏览器 */
</style>
