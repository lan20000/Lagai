<template>
    <Layout style="background-color:#f5f5f5">
        <Header class="top-header">
            <Row>
                <Col span="12" class="my-center-header">个人中心</Col>
                <Col span="12" align="right">
                <span class="iconfont icon-shezhi" @click="$router.replace('/set')"></span>
                </Col>
            </Row>
            <div class="my-card">
                <Row class="my-card-top">
                    <Col span="12" align="left" class="my-basic">
                    <img src="http://img.sccnn.com//simg/338/53320.jpg" />
                    <span>你的昵称</span>
                    </Col>
                    <Col span="12" align="right">
                    <div class="my-entrance"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                    <span>原创</span>
                    </Col>
                    <Col span="6">
                    <span>帖子</span>
                    </Col>
                    <Col span="6">
                    <span>帖子</span>
                    </Col>
                    <Col span="6">
                    <span>帖子</span>
                    </Col>
                </Row>
            </div>
        </Header>
        <Content>
             <Row>
                <Col span="24" align="left">
                    <span class="my-region-title">我的工具</span>
                </Col>
            </Row>
            <Row>
                <Col span="24" align="left" class="toolbar">
                <div class="tool">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">slider1</div>
                        <div class="swiper-slide">slider2</div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col span="24" align="left">
                    <span class="my-region-title">我的相关</span>
                </Col>
            </Row>
            <Row class="my-list">
                <Col span="12" align="left">
                <span class="my-list-title">我加入的圈子</span>
                </Col>
                <Col span="12" align="right">
                <i class="iconfont icon-jinru"></i>
                </Col>
            </Row>
            <Row class="my-list">
                <Col span="12" align="left">
                <span class="my-list-title">我的形象贴</span>
                </Col>
                <Col span="12" align="right">
                <i class="iconfont icon-jinru"></i>
                </Col>
            </Row>
        </Content>
    </Layout>
</template>

<script>
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
    var mySwiper = new Swiper(".tool", {
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 10
      }
    });
    mySwiper.scrollbar.$dragEl.css('background','#ff3f40');
  }
};
</script>
<style lang="scss" scoped>
.swiper-container-horizontal > .swiper-scrollbar {
  width: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// .my-center-text {
//   font-size: 0.32rem;
//   font-weight: 550;
// }
.my-region-title{
    font-size: 0.28rem;
  font-weight: 550;  
}
.tool {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.icon-shezhi {
  font-size: 0.52rem;
  color: #ffffff;
}
.my-center-header {
  text-align: left;
  color: #ffffff;
  font-weight: 550;
  font-size: 0.32rem;
}
.ivu-layout-header {
  border: none;
}
.top-header {
  height: 3.3rem;
  background-color: #ff3f40;
}
.ivu-layout-content {
  margin-top: 0.28rem;
}
.my-card {
  top: 0.28rem;
  height: 2.3rem;
  margin: 0rem auto;
  position: relative;
  border-radius: 3px;
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
  background-color: #ffffff;
}
.my-card-top {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toolbar {
  width: 100%;
  border: #ff3f40 solid 1px;
  padding: 0.25rem;
  height: 2.8rem;
  border-radius: 4px;
  margin: 0.2rem auto;
  span {
    font-size: 0.28rem;
    font-weight: 550;
  }
}
.my-basic {
  display: flex;
  align-items: center;
  padding: 0.13rem;
  img {
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
  }
  span {
    padding-left: 0.13rem;
  }
}
.my-entrance {
  width: 1rem;
  height: 0.42rem;
  border-top-left-radius: 0.22rem;
  border-bottom-left-radius: 0.22rem;
  background-color: #ff3f40;
}
.my-list {
  height: 0.88rem;
  display: flex;
  align-items: center;
}
.my-list-title {
  font-weight: 0.32rem;
}
</style>