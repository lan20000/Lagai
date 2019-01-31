<template>
    <div>
        <div class="findTitle">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(0)">
                        <use xlink:href="#icon-weizhi"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">附近</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(1)">
                        <use xlink:href="#icon-shu"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">书汇</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(2)">
                        <use xlink:href="#icon-meishi"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">厨房</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(3)">
                        <use xlink:href="#icon-lvhang-"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">旅行</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(4)">
                        <use xlink:href="#icon-sheyingji"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">艺术</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(5)">
                        <use xlink:href="#icon-lvhang-"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">运动</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(6)">
                        <use xlink:href="#icon-niandugongzuogaishu"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">互联网</span>
                </div>
                <div class="swiper-slide">
                    <svg class="icon" aria-hidden="true" @click="switcher(7)">
                        <use xlink:href="#icon-renminshenghuo"></use>
                    </svg>
                    <span :class="meunCode==8 ? 'active' : ''">生活</span>
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
    </div>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./../../assets/fonts/iconfont.js";
export default {
  components: {
  },
  props: {},
  data() {
    return {
      sw1: null,
      sw: null,
      meunCode: 0, //菜单下标
      typecode: 0, //类型下标
      sos: false, //搜索
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    height: 0.52rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.52rem;
    border-radius: 50%;
    background-color: #ff4b67;
  }
  .icon-sousuo {
    color: #ffffff;
  }
}
.sos-input {
  // border:#b2b2b2 solid 1px;
}
</style>