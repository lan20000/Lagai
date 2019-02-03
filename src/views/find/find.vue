<template>
    <div>
        <sos :issou="sosuo"></sos>
        <Layout>
            <!-- 功能块 -->
            <Affix>
                <Header>
                    <Row>
                        <Col span="12">
                        <span class="type-menu" @click="typecode=0,$router.replace('/attention')" :class="typecode==0 ? 'type-menu-active' : ''">关注</span>
                        <span class="type-menu" @click="typecode=1,$router.replace('/all')" :class="typecode==1 ? 'type-menu-active' : ''">全部</span>
                        <span class="type-menu" @click="typecode=2,$router.replace('/circle')" :class="typecode==2 ? 'type-menu-active' : ''">圈子</span>
                        </Col>
                        <Col span="12" align="right">
                        <div class="type-menu-sos">
                            <!-- <input type="text" class="sos-input" @blur="sosuo=false" @focus="sosuo=true" placeholder="找点啥..." v-show="sos" />-->
                            <span>
                                <i class="iconfont icon-bianji-tianxie" @click="$router.replace('/publish')"></i>
                            </span>
                            <span>
                                <i class="iconfont icon-sousuo" @click="sosuo=true"></i>
                            </span>
                        </div>
                        </Col>
                    </Row>
                </Header>
            </Affix>

            <Content>
                <!-- <transition name="Startam-succeed" leave-active-class="animated rollOut" > -->
                <router-view></router-view>
                <!-- </transition> -->
            </Content>
        </Layout>
    </div>
</template>

<script>
import "./../../assets/fonts/iconfont.js";
import sos from "./../../components/findsos.vue";
export default {
  components: {
    sos
  },
  props: {},
  data() {
    return {
      sos: false, //搜索
      typecode: 1, //全部
      sosuo: false //是否搜索
    };
  },
  watch: {},
  computed: {},
  methods: {
    //切换
    switcher(status) {
      //   this.meunCode = status;
      //   this.sw1.slideTo(status, 1000, false);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.icon {
  width: 0.42rem;
  height: 0.42rem;
  fill: currentColor;
  overflow: hidden;
}
.findTitle .swiper-wrapper .swiper-slide-active {
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    margin: 0.12rem 0rem;
    background-color: #ff3f40;
    border-radius: 10%;
    width: 50%;
    color: #ffffff;
    font-size: 0.28rem;
  }
}
.ivu-layout-content {
  padding: 0rem !important;
}
// .active {
//   margin: 0.12rem 0rem;
//   background-color: #ff3f40;
//   border-radius: 10%;
//   width: 50%;
//   color: #ffffff;
//   font-size: 0.28rem;
// }
.type-menu-active::after {
  font-size: 0.32rem;
  content: "";
  position: absolute;
  z-index: 0;
  bottom: -0.15rem;
  width: 40%;
  left: 30%;
  border-radius: 3px;
  border-top: 6px solid #ff4b67;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.ivu-layout-header {
  background-color: #ffffff;
  border: none;
}
.swiper-slide {
  border-radius: 0.08rem;
  background-size: cover;
  span {
    font-size: 0.24rem;
    display: block;
  }
}
.type-menu {
  color: #cccccc;
  font-size: 0.32rem;
  padding: 0rem 0.12rem;
}
.type-menu-active {
  position: relative;
  color: #000;
  font-weight: 550;
}
.type-menu-right {
  display: flex;
  height: 0.88rem;
  align-items: center;
}
.type-sos-active {
  background-color: #ff4b67;
  height: 0.52rem;
  border-radius: 50%;
}
.type-menu-sos {
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-end;
  span {
    height: 0.52rem;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    margin-right: 0.28rem;
    justify-content: center;
    width: 0.52rem;
    border-radius: 50%;
    background-color: #ff4b67;
  }
  .icon-sousuo,
  .icon-bianji-tianxie {
    color: #ffffff;
  }
}
.sos-input {
  // border:#b2b2b2 solid 1px;
}
</style>