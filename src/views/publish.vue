<template>
    <div>
        <!-- <transition name="Startam-option" enter-active-class="animated" leave-active-class="animated"> -->
        <labels @finish="label" @close="unfold = false" v-show="unfold"></labels>
        <!-- </transition> -->
        <Layout>
            <Header>
                <Row>
                    <Col span="12" class="text-left">
                    <span class="iconfont icon-fanhui1" @click="$router.go(-1)"></span>
                    </Col>
                    <Col span="12" class="text-right publish-content">
                    <button class="publish">发表</button>
                    </Col>
                </Row>
            </Header>
            <Content>
                <textarea contenteditable="true" class="text-left user-Publish-content" placeholder="吐槽,秘密...放马过来吧">

                </textarea>
                <ul class="picture-content">
                    <li v-for="i in imgsub"></li>
                    <li class="new-img">
                        <!-- <div class="row_div"></div>
                        <div class="clou_div"></div> -->
                    </li>
                </ul>
                <Row>
                    <Col span="24" class="text-left">
                    <ul class="label-content">
                        <li class="new-label" @click="unfold=true">+添加标签</li>
                    </ul>
                    </Col>
                </Row>
            </Content>
            <Footer>
                <div @click="unfold=true">
                    <Row class="option">
                        <Col span="12" class="text-left">
                        <span class="iconfont icon-yonghu"></span>&nbsp;
                        <span>谁可以看</span>
                        </Col>
                        <Col span="12" class="text-right">
                        <span class="iconfont icon-jinru"></span>
                        </Col>
                    </Row>
                </div>
                <div @click="unfold=true">
                    <Row class="option">
                        <Col span="12" class="text-left">
                        <span>@&nbsp;&nbsp;&nbsp;那个人</span>
                        </Col>
                        <Col span="12" class="text-right">
                        <span class="iconfont icon-jinru"></span>
                        </Col>
                    </Row>
                </div>
            </Footer>
        </Layout>
        <!-- <astrict v-show="unfold"></astrict> -->
    </div>
</template>

<script>
import astrict from "./../components/astrict.vue";
import labels from "./../components/labels.vue";
export default {
  components: { astrict, labels },
  props: {},
  data() {
    return {
      imgsub: [], //图片集合
      unfold: false //是否展示相关组件
    };
  },
  watch: {},
  computed: {},
  methods: {
    //处理标签
    label(msg) {
      this.unfold = false;
      console.log(msg);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
@import "./../assets/public/animate.css";
.Header-title {
  font-weight: 550;
  font-size: 0.3rem;
}
.publish-content {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .publish {
    color: #cccccc;
    font-size: 0.23rem;
    color: #ffffff;
    height: 0.44rem;
    line-height: 0.44rem;

    padding: 0rem 0.2rem 0rem 0.2rem;
    border: none;
    border-radius: 3px;
    background: #ff4b67;
  }
}
.ivu-layout-footer {
  position: fixed;
  bottom: 2rem;
  width: 100%;
  padding: 0rem;
  z-index: 888;
  background: #ffff;
}
.user-Publish-content {
  border: none;
  width: 100%;
  background-color: transparent;
  height: 2rem;
  padding-top: 0.12rem;
}
.picture-content {
  overflow: hidden;
  display: block;
  margin: 1rem 0rem;
  .new-img {
    width: 1.6rem;
    height: 1.6rem;
    background-color: #cccccc;
  }
  /*定位水平div垂直居中*/
  .row_div {
    width: 200px;
    height: 50px;
    background-color: #88e500;
    position: absolute;
    top: 50%;
    margin: -25px 0 0 0;
  }
  /*定位列div水平居中*/
  .clou_div {
    width: 50px;
    height: 300px;
    background-color: #3c510c;
    left: 50%;
    position: absolute;
    margin: 0 0 0 -25px;
  }
}
.option {
  width: 95%;
  margin-left: 5%;
  border-top: #cccccc solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.88rem;
}
.label-content {
  display: block;
}
.new-label {
  color: #cccccc;
  font-size: 0.22rem;
}
</style>