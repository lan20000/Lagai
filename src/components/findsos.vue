<template>
    <div>
        <!-- 搜索 -->
        <transition name="Startam-succeed" v-on:enter="enter" leave-active-class="animated bounceOutDown" enter-active-class="animated zoomIn">
            <div v-show="issou" class="sou-content">
                <Layout>
                    <Header>
                        <Row>
                            <Col span="24" align="left" class="content">
                            <span class="iconfont icon-fanhui1"></span>
                            <p class="search-box">
                                <span class="iconfont icon-sousuo"><input type="text" name="" id=""></span>
                            </p>
                            <span class="sostext">搜索</span>
                            </Col>
                        </Row>
                    </Header>
                </Layout>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  props: {
    issou: ""
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
.icon-fanhui1 {
  color: #fff;
  padding: 0rem 0.18rem;
}
p {
  display: inline-block;
}
.content {
  display: flex;
  align-items: center;
  .sostext {
    color: #fff !important;
    padding: 0rem 0.18rem;
  }
}
.sou-content {
  position: fixed;
  height: 100%;
  z-index: 999;
  width: 100%;
  background-color: #fff;
}
.ivu-layout-header {
  background-color: #ff3f40;
}
.search-box {
  flex: 1;
  background-color: #fff;
  height: 0.44rem;
  border-radius: 0.22rem;
  display: flex;
  align-items: center;
  span {
    padding-left: 0.1rem;
  }
  input {
      padding-left: 0.1rem;
    padding-right: 0.12rem;
    height: 0.44rem;
  }
}

.lately-sos,
.hot-sos {
  span {
    font-size: 0.25rem;
    font-weight: 550;
    padding: 0.28rem 0rem;
  }
  display: flex;
  justify-content: flex-start;
  padding: 0 0.2rem !important;
}
</style>