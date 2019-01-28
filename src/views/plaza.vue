<template>
    <Layout>
        <Header class="header">
            <Row>
                <Col span="12" class="logo-img">
                <img src="./../assets/logo.png">
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
            <Row>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
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
  margin-bottom: 0.2rem;
}
.logo-img {
  display: flex;
  align-items: center;
  height: 0.88rem !important;
  padding-left: 0.68rem;
  height: inherit;
  img {
    display: block;
    width: 0.57rem;
    height: 0.45rem;
  }
}
</style>