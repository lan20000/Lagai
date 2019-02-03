<template>
    <Layout>
        <!-- 备用背景 -->
        <Affix>
            <transition name="custom-classes-transition" enter-active-class="animated fadeIn">
                <div v-show="istop" :style="{backgroundImage: 'url(' + havebgimg + ')',backgroundSize:'cover',height:hg+'rem'}"></div>
            </transition>
        </Affix>
        <!-- 主体 -->
        <div class="contentBg" :style="{backgroundImage: 'url(' + bgimg + ')',backgroundSize:'cover',height:hg+'rem'}">
            <!-- 头部 -->
            <Affix>
                <Header>
                    <Col span="8" style="text-align:left;">
                    <span class="iconfont icon-fanhui1" style="color:#ffffff;"></span>
                    </Col>
                    <Col span="8">&nbsp;</Col>
                    <Col span="8">&nbsp;</Col>
                </Header>
            </Affix>
            <!-- 标题所有 -->
            <div style="height:0.44rem;"></div>
            <Affix :offset-top="10" @on-change="titlehandle">
                <div class="title-content">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide title-content-slide" @click="switcher(0)">家具测试</div>
                        <div class="swiper-slide title-content-slide" @click="switcher(1)">办公测试</div>
                        <div class="swiper-slide title-content-slide" @click="switcher(2)">设备</div>
                        <div class="swiper-slide title-content-slide" @click="switcher(3)">电脑</div>
                        <div class="swiper-slide title-content-slide" @click="switcher(4)">家具</div>
                        <div class="swiper-slide title-content-slide" @click="switcher(5)">设备</div>
                    </div>
                    <!-- <div class="swiper-scrollbar" v-show="istop"></div> -->
                </div>
            </Affix>
        </div>
        <!-- 类型栏目 -->
        <Affix :offset-top="50" @on-change="handleScroll">
            <div class="type">
                <!-- 类型分类 -->
                <div class="classify">
                    <span>最热↑</span>
                    <span>最新↑</span>
                </div>
                <!-- 栏目选项 -->
                <div class="type-content">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                        <div class="swiper-slide type-content-slide">
                            <img src="http://bpic.588ku.com/element_water_img/19/01/08/a694a255afdc15a411a452dfd60e7560.jpg" />
                            </br>
                            <span>凳子</span>
                        </div>
                    </div>
                </div>
            </div>
        </Affix>
        <!-- 列表 -->
        <div class="option-content">
            <div class="swiper-wrapper">
                <div class="swiper-slide option-content-slide">
                    <ul class="show-content">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="swiper-slide option-content-slide">

                </div>
                <div class="swiper-slide option-content-slide">

                </div>
                <div class="swiper-slide option-content-slide">

                </div>
                <div class="swiper-slide option-content-slide">

                </div>
                <div class="swiper-slide option-content-slide">

                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      title: null, //标题
      hg: 3,
      bgimg:
        "http://bpic.588ku.com/templet_water_img/18/12/26/d023b759315bcafc026f5cc294343f82.jpg!/fw/800/unsharp/true/compress/true", //背景图片
      havebgimg:
        "http://bpic.588ku.com/templet_water_img/18/12/26/d023b759315bcafc026f5cc294343f82.jpg!/fw/800/unsharp/true/compress/true", //备份
      istop: false //是否到达顶部
    };
  },
  watch: {},
  computed: {},
  methods: {     
    
    titlehandle(status) {
      if (status) {
        //标题
        var mySwiper = new Swiper(".title-content", {
          slidesPerView: 1,
          slidesPerGroup: 1
          //   scrollbar: {
          //         el: '.swiper-scrollbar',
          //         dragSize: 30,
          //     },
        });
        return;
      }
      console.log(status + "999");
      //标题
      var mySwiper = new Swiper(".title-content", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      });
    },
    loaderdata(status) {
      console.log(status);
    },
    handleScroll(status) {
      console.log(status);
      var _this = this;
      if (status) {
        this.istop = true;
        return;
      }
      this.istop = false;
    }
  },
  created() {},
  mounted() {
    //标题
    var mySwiper = new Swiper(".title-content", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
      //   width: window.innerWidth-20,
    });
    //类型
    var mySwiper = new Swiper(".type-content", {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 10
    });
    //内容
    var mySwiper = new Swiper(".option-content", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    });
  }
};
</script>
<style lang="scss" scoped="scoped">
.topHeader {
  height: 0.88rem !important;
  position: fixed;
  z-index: 999;
}
.title-content {
  overflow: hidden;
}
.title-content .swiper-wrapper .swiper-slide-active {
  font-size: 0.4rem;
  height: 0.8rem;
}
.title-content .swiper-wrapper .swiper-slide::after {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0px;
  width: 10%;
  left: 45%;
  height: 4px;
  border-top: 4px solid #b2b2b2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.title-content .swiper-wrapper .swiper-slide-active::after {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 5px;
  width: 10%;
  left: 45%;
  height: 4px;
  border-top: 4px solid #b2b2b2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.title-content-slide {
  font-size: 0.24rem;
  color: #ffffff;
  height: 0.5rem;
}

.type-content-slide {
  img {
    width: 1rem;
    height: 1rem;
  }
}
.option-content,
.type-content,
.title-content {
  width: 100%;
  overflow: hidden;
}
.type-content {
  padding: 0.15rem 0rem;
}
.type,
.show-content {
  margin: 0 0.2rem;
}
.option-content {
  margin-top: 0.5rem;
}
.type {
  overflow: hidden;
  background-color: #ffffff;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  -moz-box-shadow: 0px 1px 3px #a8e0d7;
  -webkit-box-shadow: 0px 1px 3px #a8e0d7;
  box-shadow: 0px 1px 3px #a8e0d7;
}
.classify {
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 0.68rem;
  }
}
.show-content {
  overflow: hidden;
  li {
    width: 45%;
    height: 3.5rem;
    display: inline-block;
    margin: 0.1rem;
    border-radius: 5px;
    -moz-box-shadow: 2px 2px 1px rgba(165, 216, 210, 0.5);
    -webkit-box-shadow: 2px 2px 1px rgba(165, 216, 210, 0.5);
    box-shadow: 2px 2px 1px rgba(165, 216, 210, 0.5);
    background-color: red;
  }
}
.ivu-layout-header {
  border: none;
}
.contentBg {
  width: 100%;
  overflow: hidden;
}
.ivu-layout-content {
  padding: 0rem !important;
}
</style>