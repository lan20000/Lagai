<template>
    <Layout>
        <Header>
            <Row>
                <Col span="12" align="left" class="Header-top-left">
                <p>
                    <span class="iconfont icon-fanhui1" @click=""></span>
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" class="portrait" />
                    <span>小玄机</span>
                </p>
                </Col>
                <Col span="12" align="right">
                <span class="iconfont icon-guanbi"></span>
                </Col>
            </Row>
        </Header>
        <Content>
            <!-- <div class="one-img">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">                
            </div> -->
            <div class="imgs">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">
                <img alt="" src="https://i.loli.net/2017/08/21/599a521472424.jpg">
            </div>
            <div class="text" align="left">
                2333333333333333432
            </div>
            <Row class="info">
                <Col span="12" align="left">
                <p>
                    <span class="times">19-02</span>
                </p>
                </Col>
                <Col span="12" align="right">
                <span class="label">#19-02</span>
                <span class="label">#19-02</span>
                <span class="label">#19-02</span>
                </Col>
            </Row>
            <div class="comment-list">
                <p align="left">评论列表(0)</p>
            </div>
        </Content>
        <Footer>
            <Row>
                <Col span="12" align="left" class="bottom">
                <input type="text" name="" id="" class="comment" placeholder="我要说上几句" @focus="iscomment=true">
                </Col>
                <Col span="12" align="right" class="bottom">
                <span class="iconfont icon-fenxiang1"></span>
                <span class="iconfont icon-aixin1"></span>
                </Col>
            </Row>
        </Footer>
        <comment v-show="iscomment"></comment>
    </Layout>
</template>

<script>
import comment from "./../components/comment";
export default {
  components: { comment },
  props: {},
  data() {
    return { iscomment: false };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
.Header-top-left {
  display: flex;
  align-items: center;
  .portrait {
    margin-bottom: 0.12rem;
    margin-left: 0.32rem;
  }
}
.ivu-layout-header {
  border: none;
}
.bg {
  background: transparent url("https://i.loli.net/2017/08/21/599a521472424.jpg")
    no-repeat;
  height: 1rem;
}
.ivu-layout-footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 1rem;
  padding: 0rem 0.12rem;
  z-index: 999;
  background: #ffff;
  border-top: #cccccc solid 1px;
  .ivu-row {
  }
}
.comment {
}
.comment-list {
  padding-top: 0.32rem;
  overflow: hidden;
  p {
    height: 0.44rem;
    font-size: 0.28rem;
    font-weight: 550rem;
  }
}
.bottom {
  span {
    padding: 0rem 0.12rem;
  }
  height: 1rem;
  display: flex;
  align-items: center;
}
.bottom:last-child {
  justify-content: flex-end;
}
.one-img {
  width: 100%;
  height: 100%;
}
.text {
  font-size: 0.3rem;
  display: block;
  clear: both;
  padding-top: 0.68rem;
}
.imgs {
  img {
    margin: 0.1rem;
    width: 30.33%;
    height: 100%;
    float: left;
  }
}
.info {
  .times,
  .label {
    color: #aaaaaa;
  }
  .label {
    padding: 0rem 0.12rem;
  }
}
</style>