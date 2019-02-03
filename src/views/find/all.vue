<template>
    <div>
        <Affix :offset-top="40">
            <div class="menu-content">
                <div class="findTitle">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <!-- <svg class="icon" aria-hidden="true" @click="switcher(0)">
                                <use xlink:href="#icon-weizhi"></use>
                            </svg> -->
                            <span :class="meunCode==0 ? 'active' : ''">附近</span>
                        </div>
                        <div class="swiper-slide">
                            <!-- <svg class="icon" aria-hidden="true" @click="switcher(1)">
                                <use xlink:href="#icon-shu"></use>
                            </svg> -->
                            <span :class="meunCode==1 ? 'active' : ''">图文</span>
                        </div>
                        <div class="swiper-slide">
                            <!-- <svg class="icon" aria-hidden="true" @click="switcher(2)">
                                <use xlink:href="#icon-meishi"></use>
                            </svg> -->
                            <span :class="meunCode==2 ? 'active' : ''">视频</span>
                        </div>
                        <div class="swiper-slide">
                            <!-- <svg class="icon" aria-hidden="true" @click="switcher(3)">
                                <use xlink:href="#icon-lvhang-"></use>
                            </svg> -->
                            <span :class="meunCode==3 ? 'active' : ''">旅行</span>
                        </div>
                        <!-- <div class="swiper-slide">
                            <svg class="icon" aria-hidden="true" @click="switcher(4)">
                                <use xlink:href="#icon-sheyingji"></use>
                            </svg>
                            <span :class="meunCode==8 ? 'active' : ''">艺术</span>
                        </div> -->
                        <!-- <div class="swiper-slide">
                            <svg class="icon" aria-hidden="true" @click="switcher(5)">
                                <use xlink:href="#icon-lvhang-"></use>
                            </svg>
                            <span :class="meunCode==8 ? 'active' : ''">运动</span>
                        </div> -->
                        <!-- <div class="swiper-slide">
                            <svg class="icon" aria-hidden="true" @click="switcher(6)">
                                <use xlink:href="#icon-niandugongzuogaishu"></use>
                            </svg>
                            <span :class="meunCode==8 ? 'active' : ''">互联网</span>
                        </div> -->
                        <!-- <div class="swiper-slide">
                            <svg class="icon" aria-hidden="true" @click="switcher(7)">
                                <use xlink:href="#icon-renminshenghuo"></use>
                            </svg>
                            <span :class="meunCode==8 ? 'active' : ''">生活</span>
                        </div> -->
                    </div>
                </div>
                <div class="menu-sort" @click="sortcode==0 ? sortcode=1 : sortcode=0">
                    <span v-show="sortcode==1" class="iconfont icon-chakantiezigengduo" style="font-size: 0.52rem;"></span>
                    <span v-show="sortcode==0">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduoyundong"></use>
                        </svg>
                    </span>
                </div>
            </div>
        </Affix>
        <!-- 内容 -->
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <!-- <div id="mescrolls"></div> -->
            <div class="findContent">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ul class="state-list-content">
                            <li v-for="(i,index) in dataList" :class="sortcode==0 ? 'sort-list-across' : 'sort-list-vertical'">
                                <div class="obedient-img">
                                    <img src="http://t2.hddhhn.com/uploads/tu/201406/045/1.jpg" @click="$router.replace('/personsindex')" />
                                    <div>
                                        <span>#标签</span>
                                        <span>#标签标签标签</span>
                                    </div>
                                </div>
                                <p class="describe">奇妙开始....</p>
                                <Row>
                                    <Col span="12" align="left" class="simple-left">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" />
                                    <span class="user-name">瘫痪</span>
                                    </Col>
                                    <Col span="12" align="right">
                                    <span class=""></span>
                                    <span></span>
                                    <span>
                                        <svg class="icon" aria-hidden="true" @click="switcher(7)">
                                            <use xlink:href="#icon-fenxiang"></use>
                                        </svg>
                                    </span>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </mescroll-vue>
    </div>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./../../assets/fonts/iconfont.js";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: { MescrollVue },
  props: {},
  data() {
    return {
      sw1: null,
      sw: null,
      meunCode: 0, //菜单下标
      typecode: 0, //类型下标
      sos: false, //搜索
      sosuo: false, //是否搜索
      sortcode: 0,
      mescroll: null, // mescroll实例对象
      mescrollDown: {
        // warpId: "mescrolls",
        auto: true,
        bottomOffset: 20,
        textLoading: '<p class="upwarp-nodata">正在加载中~</p>'
      }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">我的底线被你看到了~</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        // 这就是为什么无更多数据有时候不显示的原因
        toTop: {
          //回到顶部按钮
          src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      },
      dataList: ["1", "1", "1", "1", "1", "1", "1", "1", "1"] // 列表数据
    };
  },
  watch: {},
  computed: {},
  methods: {
    //切换
    switcher(status) {
      //   this.meunCode = status;
      //   this.sw1.slideTo(status, 1000, false);
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      var _this = this;
      setInterval(function() {
        _this.$nextTick(() => {
          mescroll.endSuccess(_this.dataList.length);
        });
        // mescroll.endErr()
      }, 3000);
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
      slidesPerView: 1,
      slidesPerGroup: 1
    });
  }
};
</script>
<style lang="scss" scoped="scoped">
.icon {
  width: 0.42rem;
  height: 0.42rem;
  fill: currentColor;
  overflow: hidden;
}
#mescrolls {
  background-color: #fed431;
}
.mescroll {
  position: fixed;
  top: 88px;
  bottom: 1rem;
  height: auto;
}
.menu-content {
  display: flex;
  height: 0.6rem;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.menu-sort {
  height: 100%;
  width: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.obedient-img {
  position: relative;
  div {
    left: 0rem;
    z-index: 999;
    top: 0rem;
    position: absolute;
    margin: 0.1rem;
    span {
      overflow: hidden;
      color: #ffffff;
      display: inline-block;
      padding: 0.02rem;
      border-radius: 50%;
      background-color: rgba(51, 51, 51, 0.2);
      font-size: 0.22rem;
    }
  }
}
.simple-left {
  display: flex;
  align-items: center;
  span {
    font-size: 0.22rem;
  }
}
.describe {
  text-align: left;
  padding: 0.01rem;
  font-size: 0.23rem;
}
.findTitle {
  width: 100%;
  display: inline-block;
}
.findTitle .swiper-wrapper {
  margin: 0rem 0.12rem;
}
.findTitle .swiper-wrapper .swiper-slide-active {
  position: relative;
}
.findTitle .swiper-wrapper .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.findTitle .swiper-wrapper .swiper-slide span {
  margin: 0.12rem 0rem;
  height: 0.35rem;
  width: 50%;
}
.active {
  background-color: #ff3f40;
  border-radius: 10%;
  color: #ffffff;
  border-radius: 0.175rem;
  font-size: 0.28rem;
}
// .findTitle .swiper-wrapper .swiper-slide-active::after {
//   content: "";
//   position: absolute;
//   z-index: 0;
//   bottom: -2px;
//   width: 39%;
//   left: 30%;
//   border-radius: 3px;
//   height: 4px;
//   border-top: 6px solid #ff4b67;
//   -webkit-transform: scaleY(0.5);
//   transform: scaleY(0.5);
//   -webkit-transform-origin: 0 0;
//   transform-origin: 0 0;
// }
.findContent {
  margin: 0rem 0.2rem !important;
}

.findTitle,
.findContent,
.swiper-wrapper {
  overflow: hidden;
}
.findTitle .swiper-wrapper .swiper-slide span {
  display: block;
}

.user-name {
  display: inline-block !important;
}

.sort-list-across {
  float: left;
  font-size: 0rem;
}
.sort-list-vertical {
  display: block;

  margin: 0rem !important;
  width: 100% !important;
}

.state-list-content {
  overflow: hidden;
  li {
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    overflow: hidden;
    width: 48%;
    margin-left: 0.14rem;
  }
}

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