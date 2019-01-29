<template>
    <Layout>
        <Header class="header">
            <Row>
                <Col span="12" class="logo-text">
                    <span>首页</span>
                </Col>
                <Col span="12" aligin="right">
                <span class="iconfont icon-chakantiezigengduo"></span>
                </Col>
            </Row>
        </Header>
        <Content>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>

                    <div class="swiper-slide"></div>
                </div>
            </div>
            <!-- 菜单 -->
            <Row type="flex" class="menu-list">
                <Col span="6" class="menu">
                <div class="menu-content">1</div>
                <span>房产</span>
                </Col>
                <Col span="6" class="menu">
                <div class="menu-content">1</div>
                <span>房产</span>
                </Col>
                <Col span="6" class="menu">
                <div class="menu-content">1</div>
                <span>房产</span>
                </Col>
                <Col span="6" class="menu">
                <div class="menu-content">1</div>
                <span>房产</span>
                </Col>
            </Row>
            <!-- 模块 -->
            <Row type="flex" justify="center" align="bottom" style="overflow: hidden;">
                <Col span="10">
                <div class="show-left-area">
                    1
                </div>
                </Col>
                <Col span="14">
                <div class="show-right-area">
                    2
                </div>
                <div class="show-right-area">
                    3
                </div>
                </Col>
            </Row>
        </Content>
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
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10
    });
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/fonts/iconfont.css";
.swiper-slide {
  width: 33.33%;
  border-radius: 0.08rem;
  height: 100px;
  background: transparent url("./../assets/logins.jpg") no-repeat;
  background-size: cover;
}
.header {
  border: none;
}
.logo-text {
  display: flex;
  align-items: left;
  font-size: 0.32rem;
  font-family: 'Gill Sans';
  font-weight: 550;
  padding-left: 0.12rem;
  height: inherit;
  img {
    display: block;
    width: 0.57rem;
    height: 0.45rem;
  }
}

.menu-list {
  margin: 0.2rem 0rem;
  padding: 0.3rem 0rem;
  overflow: hidden;
  border:#ff3f40 solid 1px;
  border-radius: 3px;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 550;
  }
  .menu-content {
    width: 0.68rem;
    background-color: red;
    border-radius: 10%;
    height: 0.68rem;
  }
}
.show-left-area {
  background-color: red;
  height: 2.8rem;
  border-radius: 0.08rem;
}
.show-right-area {
  height: 1.3rem;
  margin: 0.2rem;
  background-color: red;
  border-radius: 0.08rem;
}
.show-right-area:last-child {
  margin-bottom: 0rem;
}
</style>