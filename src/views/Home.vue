<template>
 <Layout>
        <Header></Header>
        <Content>
         
        </Content>
        <Footer>          
          <Row>
              <Col span="8"><router-link to="entrance"><span class="iconfont icon-zhuye"></span><br />广场</router-link></Col>
              <Col span="8"><router-link to="entrance"><span class="iconfont icon-iconset0457"></span><br />消息</router-link></Col>
              <Col span="8"><router-link to="entrance"><span class="iconfont icon-ziyuan"></span><br />我的</router-link></Col>
          </Row>
        </Footer>
  </Layout>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "./../assets/fonts/iconfont.css";
.ivu-layout-footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>