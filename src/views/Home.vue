<template>
 <Layout>
        <router-view class="body-content"></router-view>
        <Footer>          
          <Row>
              <Col span="8">
                <router-link to="/" >
                  <a href="" class="title" @click="code=1" :class=" code==1 ? 'default' : ''">
                    <i class="iconfont icon-zhuye"></i> <br />广场
                  </a>
                </router-link>
              </Col>
              <Col span="8">
                  <router-link to="news">
                    <a href="" class="title" @click="code=2" :class=" code==2 ? 'default' : ''">
                      <i class="iconfont icon-iconset0457"></i><br />消息
                    </a>
                  </router-link>
              </Col>
              <Col span="8">
                  <router-link to="mine">
                    <a href="" class="title" @click="code=3" :class=" code==3 ? 'default' : ''">
                      <i class="iconfont icon-ziyuan"></i><br />我的
                    </a>
                  </router-link>
              </Col>
          </Row>
        </Footer>
  </Layout>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      code: 1 //默认选中的
    };
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
@import "./../assets/public/animate.css";
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
.title {
  color: #333333;
}
.default {
  color: #2d8cf0 !important;
}
</style>