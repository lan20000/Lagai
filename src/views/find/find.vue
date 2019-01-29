<template>
    <Layout>
        <!-- 功能块 -->
        <Header>
            <Row>
                <Col span="12">
                <span class="type-menu" @click="typecode=0" :class="typecode==0 ? 'type-menu-active' : ''">关注</span>
                <span class="type-menu" @click="typecode=1" :class="typecode==1 ? 'type-menu-active' : ''">全部</span>
                <span class="type-menu" @click="typecode=2" :class="typecode==2 ? 'type-menu-active' : ''">附近</span>
                </Col>
                <Col span="12" class="type-menu-right">
                <span class="type-menu-sos">
                    <input type="text" class="sos-input" placeholder="找点啥..." v-show="sos" />
                    <i class="iconfont icon-sousuo" @click="sos ? sos=false : sos=true"></i>
                </span>
                </Col>
            </Row>
        </Header>
        <Content>
            <!-- 选项 -->
            <div class="findTitle">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(0)">
                            <use xlink:href="#icon-weizhi"></use>
                        </svg>
                        <span :class="meunCode==0 ? 'active' : ''">附近</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(1)">
                            <use xlink:href="#icon-shu"></use>
                        </svg>
                        <span :class="meunCode==1 ? 'active' : ''">书汇</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(2)">
                            <use xlink:href="#icon-meishi"></use>
                        </svg>
                        <span :class="meunCode==2 ? 'active' : ''">厨房</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(3)">
                            <use xlink:href="#icon-lvhang-"></use>
                        </svg>
                        <span :class="meunCode==3 ? 'active' : ''">旅行</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(4)">
                            <use xlink:href="#icon-sheyingji"></use>
                        </svg>
                        <span :class="meunCode==4 ? 'active' : ''">艺术</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(5)">
                            <use xlink:href="#icon-lvhang-"></use>
                        </svg>
                        <span :class="meunCode==5 ? 'active' : ''">运动</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(6)">
                            <use xlink:href="#icon-niandugongzuogaishu"></use>
                        </svg>
                        <span :class="meunCode==6 ? 'active' : ''">互联网</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true" @click="switcher(7)">
                            <use xlink:href="#icon-renminshenghuo"></use>
                        </svg>
                        <span :class="meunCode==7 ? 'active' : ''">生活</span>
                    </div>
                </div>
            </div>
            <!-- 内容 -->
            <div class="findContent">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">1</div>
                </div>
            </div>
        </Content>
    </Layout>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./../../assets/fonts/iconfont.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      sw1: null,
      sw: null,
      meunCode: 0, //菜单下标
      typecode: 0, //类型下标
      sos: false //搜索
    };
  },
  watch: {},
  computed: {},
  methods: {
    //切换
    switcher(status) {
      this.meunCode = status;
      this.sw1.slideTo(status, 1000, false);
    }
  },
  created() {},
  mounted() {
    var _this = this;
    this.sw1 = new Swiper(".findTitle", {
      slidesPerView: 5,
      slidesPerGroup: 1,
      on: {
        slideChangeTransitionEnd: function() {
          _this.meunCode = this.activeIndex;
        }
      }
    });
    this.sw = new Swiper(".findContent", {
      slidesPerView: 5,
      slidesPerGroup: 1
    });
  }
};
</script>
<style lang="scss" scoped>
.icon {
  width: 0.42rem;
  height: 0.42rem;
  fill: currentColor;
  overflow: hidden;
}
.findTitle,
.findContent {
  width: 100%;
  height: 100%;
  margin: 0.2rem;
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
// .active {
//   margin: 0.12rem 0rem;
//   background-color: #ff3f40;
//   border-radius: 10%;
//   width: 50%;
//   color: #ffffff;
//   font-size: 0.28rem;
// }
// .findTitle .swiper-wrapper .swiper-slide-active::before {
//   content: "";
//   position: absolute;
//   z-index: 0;
//   bottom: -2px;
//   width: 20%;
//   left: 40%;
//   height: 4px;
//   border-top: 4px solid #b2b2b2;
//   -webkit-transform: scaleY(0.5);
//   transform: scaleY(0.5);
//   -webkit-transform-origin: 0 0;
//   transform-origin: 0 0;
// }
.ivu-layout-header {
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
  font-weight: 500;
}
.type-menu-sos {
  width: 100%;
  .icon-sousuo {
    color: #ffffff;
    border-radius: 50%;
    background-color: #ff4b67;
  }
}
.sos-input {
  // border:#b2b2b2 solid 1px;
}
</style>