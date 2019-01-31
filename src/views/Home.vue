<template>
    <Layout>
        <transition enter-active-class="animated fadeIn">
        <router-view class="body-content"></router-view>
        </transition>
        <!-- 底部 -->
        <Footer>
            <Row type="flex" justify="center" align="middle" style="height:100%;">
                <!-- <Col span="6">
                <router-link to="/">
                    <a href="" class="title" @click="code=1" :class=" code==1 ? 'default' : ''">
                        <i class="iconfont icon-zhuye" :class="code==1 ? 'animated pulse' : ''"></i> <br />首页
                    </a>
                </router-link>
                </Col> -->
                <Col span="8">
                <router-link to="/">
                    <a href="" class="title" @click="code=1">
                        <i class="iconfont icon-guankanyanjing " :class=" code==1 ? 'animated pulse default' : '' "></i><br />发现
                    </a>
                </router-link>
                </Col>
                <Col span="8">
                <router-link to="news">
                    <a href="" class="title" @click="code=2" >
                        <i class="iconfont icon-iconset0457" :class="code==2 ? 'animated pulse default' : ''"></i>
                    </a>
                </router-link>
                </Col>
                <Col span="8">
                <router-link to="mine">
                    <a href="" class="title" @click="code=3" >
                        <i class="iconfont icon-ziyuan" :class="code==3 ? 'animated pulse default' : ''"></i><br />我的
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
@import "./../assets/public/animate.css";
.foot {
  width: 100%;
  display: block;
  height: 100px;
}
.ivu-layout-footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 1rem;
  padding: 0rem;
  z-index: 999;
  background: #ffff;
  .ivu-row {
  }
}

.ivu-layout-footer:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #b2b2b2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
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
  i {
    display: inline-block;
  }
  display: block;
}
.default {
  .iconfont {
    font-weight: 800;
  }
  color: #ff3f40 !important;
}
</style>