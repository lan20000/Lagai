<template>
    <Layout>
        <Header class="header">
            <span>故事</span>
        </Header>
        <Content>
            <!-- 选项 -->
            <div class="findTitle">
                <div class="swiper-wrapper">                    
                    <div class="swiper-slide">书汇</div>
                    <div class="swiper-slide">厨房</div>
                    <div class="swiper-slide">旅行</div>
                    <div class="swiper-slide">摄拍</div>
                    <div class="swiper-slide">运动</div>
                    <div class="swiper-slide">互联网</div>
                    <div class="swiper-slide">生活</div>
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
export default {
  components: {},
  props: {},
  data() {
    return {
      sw1: null,
      sw: null
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.sw1 = new Swiper(".findTitle", {
      slidesPerView: 5,
      slidesPerGroup: 1,
    });
    this.sw = new Swiper(".findContent", {
      slidesPerView: 5,
      slidesPerGroup: 1,
    });
  }
};
</script>
<style lang="scss" scoped>
.findTitle,
.findContent{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.swiper-slide {
  border-radius: 0.08rem;
  background-size: cover;
}
.header{
    span{
        color: #ffffff;
    }
    background-color: #ff3f40;
}
</style>