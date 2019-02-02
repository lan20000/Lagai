<template>
    <Layout class="circle">
        <div class="circle-top-header">
            <Header>
                <Row>
                    <Col span="8" class="text-left">
                    <span class="iconfont icon-fanhui1"></span>
                    </Col>
                    <Col span="8">col-8</Col>
                    <Col span="8" class="text-right">
                    <Badge :count="3" class-name="circle-top-badge">
                        <span class="iconfont icon-tuya-"></span>
                    </Badge>
                    <span class="iconfont icon-gengduo-tianchong"></span>
                    </Col>
                </Row>
            </Header>
            <div class="circle-top-bottom"></div>
        </div>
        <Content>
            <Row class="circle-info-top">
                <Col span="12" class="circle-info-left">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <div class="circle-info-name">
                    <span>俱乐部</span>
                    <span>M.span</span>
                </div>
                </Col>
                <Col span="12" class="circle-info-right">
                <span class="sign">签到</span>
                </Col>
            </Row>
            <Row class="circle-all-label">
                <Col span="8">
                <span @click="activecode=0" :class="activecode==0 ? 'circle-label-active':''">主页</span>
                </Col>
                <Col span="8">
                <span @click="activecode=1" :class="activecode==1 ? 'circle-label-active':''">动态</span>
                </Col>
                <Col span="8">
                <span @click="activecode=2" :class="activecode==2 ? 'circle-label-active':''">核心成员</span>
                </Col>
            </Row>
            <div class="content">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <Row>
                            <Col span="12" class="text-left circle-info-title">
                            <span>基本介绍</span>
                            </Col>
                            <Col span="12" class="text-right circle-info-jinru">
                            <p>ALL
                                <span class="iconfont icon-jinru"></span>
                            </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="text-left circle-info-introduce">
                            <span>俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部俱乐部</span>
                            </Col>
                        </Row>
                    </div>
                    <div class="swiper-slide">办公测试</div>
                    <div class="swiper-slide">设备</div>
                </div>
                <!-- <div class="swiper-scrollbar" v-show="istop"></div> -->
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
      activecode: 0 //选中
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    //标题
    var mySwiper = new Swiper(".content", {
      slidesPerView: 1,
      slidesPerGroup: 1
    });
  }
};
</script>
<style lang="scss" scoped>
.ivu-layout-header {
  border: none !important;
}
.circle-top-header {
  background-color: #ffcc44;
  height: 3rem;
  display: block;
  overflow: hidden;
  position: relative;
}
.icon-tuya-,
.icon-fanhui1,
.icon-gengduo-tianchong {
  color: #ffffff;
  padding-right: 0.25rem;
}
.icon-gengduo-tianchong {
  font-size: 0.32rem;
}
.icon-tuya- {
  font-size: 0.48rem;
  position: relative;
}
.circle-top-bottom {
  position: absolute;
  height: 0.5rem;
  width: 100%;
  bottom: -0.25rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
}
.circle-info-name {
  padding-left: 0.12rem;
  span {
    display: block;
  }
  span:first-child {
    font-weight: 550;
    font-size: 0.28rem;
  }
  span:last-child {
    font-size: 0.25rem;
  }
}
.circle-info-left,
.circle-info-right {
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  height: inherit;
}
.circle-info-right {
  justify-content: flex-end;
}
.circle-info-top {
  height: 0.88rem;
}
.circle-info-center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.circle-all-label {
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 0.3rem;
  }
}
.circle-info-introduce {
  font-size: 0.21rem;
  color: #cccccc;
}
.circle-label-active {
  font-weight: 550;
}
.circle-label-active::after {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0px;
  width: 28%;
  left: 36%;
  height: 4px;
  border-top: 6px solid #ffcc44;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.circle-info-jinru {
  color: #cccccc;
  font-weight: 550;
}

.circle-info-title {
  font-weight: 550;
  font-size: 0.28rem;
}
.sign {
  border-radius: 0.7rem;
  width: 1.2rem;
  height: 0.45rem;
  background-color: #ffcc44;
  font-size: 0.23rem;
  padding: 0.02rem;
  display: block;
}
.circle {
  height: 100%;
  display: block;
  overflow: hidden;
}
</style>