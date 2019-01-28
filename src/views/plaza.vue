<template>
  <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
        </div>
        旅行-厨房-摄影
       </div>
  </div>
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
        slidesPerGroup : 1,
        spaceBetween : 10,
    });
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/fonts/iconfont.css";
.swiper-slide{
    width: 33.33%;
    border-radius: 0.08rem;
    height: 100px;
    background: transparent url('./../assets/logins.jpg') no-repeat;
    background-size: cover;
}
</style>