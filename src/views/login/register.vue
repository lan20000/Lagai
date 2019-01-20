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
              <Col span="18" push="6"><input type="text" placeholder="" /></Col>
              <Col span="6" pull="18">昵称</Col>
          </Row>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder=""  /></Col>
              <Col span="6" pull="18">账号</Col>
          </Row>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder=""  /></Col>
              <Col span="6" pull="18">密码</Col>
          </Row>
          <Row class="row">              
              <Col span="18" push="6"><input type="text" placeholder=""  /></Col>
              <Col span="6" pull="18">确认密码</Col>
          </Row>
        </Content>
        <Footer>
          <button class="register">注册</button>
        </Footer>
  </Layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    routers(){      
    }
  },
  mounted(){
    // this.routers();
  },
  components: {}
};
</script>

<style lang="scss" scope="scope">
.Header {
  background-color: transparent;
}

.Upload {
  width: 2rem;
  height: 2rem;
  border-radius: 50% !important;
}
.ivu-icon-ios-reverse-camera {
  font-size: 0.68rem;
}
input {
  width: 100%;
  color: #54596c;
  display: block;  
  border-bottom: #54596c solid 1px;
}
.row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  margin: 0.1rem 0rem 0.1rem 0rem;
}
.register{
  width: 68%;
  height: 0.88rem;
  display: flex;
  border: none;
  background-color: #312e3f;
  align-items: center;
  justify-content: center;
  color: #54596c;
}
</style>
