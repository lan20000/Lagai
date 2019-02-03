<template>
    <Layout style="background-color:#f5f5f5">
        <Header class="top-header">
            <Row class="navigation">
                <Col span="12" align="left">
                <span class="iconfont icon-fanhui1" @click="$router.go(-1);"></span>
                </Col>
                <Col span="12" align="right">
                <span class="iconfont icon-gengduo-tianchong"></span>
                </Col>
            </Row>
            <div class="my-card">
                <!-- 上部分 -->
                <div class="my-card-top">
                    <!--头像-->
                    <div class="my-head-left">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="head-portrait" />
                        <span class="my-screen">鸵鸟蛋
                            <sup>LV7
                                <!-- <i class="iconfont icon-gengduo-tianchong"></i> -->

                            </sup>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shengji"></use>
                            </svg>
                        </span>
                    </div>
                    <!--关注-->
                    <div class="my-head-right">
                        <span class="relation">关注</span>
                    </div>
                </div>
                <!-- 下部分 -->
                <div class="my-card-bottom">
                    <p>
                        <span class="basic-number">
                            <i>2323</i>粉丝</span>&nbsp;&nbsp;&nbsp;
                        <span class="basic-number">
                            <i>2323</i>关注</span>
                    </p>
                    <p class="signature">组长在那个地方</p>
                </div>
            </div>
        </Header>
        <Content>
            <ul class="tab-list">
                <li @click="code=0" :class="code==0 ? 'active':''">热文</li>
                <li @click="code=1" :class="code==1 ? 'active':''">超话</li>
                <li @click="code=2" :class="code==2 ? 'active':''">他的圈子</li>
                <li @click="code=3" :class="code==3 ? 'active':''">最近在看</li>
            </ul>
            <!-- 内容 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <Row>
                            <Col span="3" align="left">
                            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            </Col>
                            <Col span="21" align="left">
                            <p>我是蓉妹妹</p>
                            <p class="time">5分钟之前</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" align="left"> 我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" align="left">
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12" align="left">
                            <span class="label">#超话</span>
                            <span class="label">#超话</span>
                            <span class="label">#超话</span>
                            </Col>
                            <Col span="12" align="right">
                            <span>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-dianzan"></use>
                                </svg>
                                12
                            </span>
                            <span>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-pinglun1"></use>
                                </svg>
                                12
                            </span>
                            </Col>
                        </Row>
                    </div>
                    <div class="swiper-slide">超话</div>
                    <div class="swiper-slide">他加入的圈子</div>
                    <div class="swiper-slide">最近在看</div>
                </div>
            </div>
        </Content>
    </Layout>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./../assets/fonts/iconfont.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      code: 0 //选中
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    var vm = this;
    var mySwiper = new Swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: function() {
          vm.code = this.activeIndex;
        }
      }
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
.iconfont {
  color: #ffffff;
}
.ivu-layout-header {
  border: none;
  line-height: 0;
}
.top-header {
  height: 3.3rem;
  background-color: #ff3f40;
}
.ivu-layout-content {
  margin-top: 0.88rem;
}

//导航栏
.navigation {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
//卡片
.my-card {
  top: 0.68rem;
  padding: 0rem 0.13rem 0rem 0.13rem;
  margin: 0rem auto;
  border-radius: 3px;
  position: relative;
  background-color: #ffffff;
}

.my-card-top {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-head-left,
.my-head-right {
  .my-screen {
    overflow: hidden;
    font-size: 0.28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.52rem;
    i,
    sup {
      padding-left: 0.08rem;
      color: #ff9d6f;
    }
  }
  flex: 1;
  height: 1.3rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  .head-portrait {
    top: -0.55rem;
    height: 1rem;
    width: 1rem;
    border: #ffffff solid 2.5px;
    border-radius: 50%;
    position: absolute;
  }
}

.my-head-right {
  justify-content: flex-end;
  align-items: center;
  .relation {
    background-color: #ff4b67;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    overflow: hidden;
    border-radius: 3px;
    color: #ffffff;
    margin-right: 0.5rem;
    height: 0.44rem;
  }
}

.my-card-bottom {
  overflow: hidden;
  display: flex;
  text-align: left;
  flex-direction: column;
}
.basic-number {
  font-size: 0.25rem;
  line-height: 0.25rem;
  padding: 0.2rem 0rem;
  display: inline-block;
  color: #a1a1a1;
  i {
    font-weight: 550;
    padding-right: 0.08rem;
    color: #000;
  }
}
.signature {
  font-size: 0.25rem;
  color: #a1a1a1;
  line-height: 0.25rem;
}
.toolbar {
  width: 100%;
  background-color: #ff3f40;
  height: 2.8rem;
  border-radius: 4px;
  margin: 0.2rem auto;
  span {
    font-size: 0.28rem;
    font-weight: 550;
  }
}
.tab-list {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    flex: 1;
  }
}
.active::before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0.35rem;
  width: 40%;
  left: 30%;
  border-radius: 3px;
  border-top: 6px solid #ff4b67;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.swiper-container {
  margin-top: 0.32rem;
}
.time {
  color: #a1a1a1;
  font-size: 0.2rem;
}
.illustration {
  width: 1rem;
  border-radius: 3px;
  display: inline-block;
  margin: 0rem 0.08rem 0rem 0.08rem;
  height: 0.98rem;
}
.label {
  border-radius: 0.44rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.88rem;
  height: 0.44rem;
  margin-right: 0.2rem;
  border: #a1a1a1 solid 1px;
  padding: 0.01rem;
  font-size: 0.2rem;
}
</style>