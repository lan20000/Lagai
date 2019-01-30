<template>
    <Layout style="background-color:#f5f5f5">
        <Header class="top-header">
            <Row>
                <Col span="12" align="left">
                <span class="iconfont icon-fanhui1"></span>
                </Col>
                <Col span="12" align="right">
                <span class="iconfont icon-gengduo-tianchong"></span>
                </Col>
            </Row>
            <div class="my-card">
                <Row class="my-card-top">
                    <Col span="12" align="left" class="my-basic-head">
                    <img src="http://img.sccnn.com//simg/338/53320.jpg" />
                    </Col>
                    <Col span="12" align="right">
                    <div class="my-entrance">
                        <span>关注</span>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <!-- <img src="http://img.sccnn.com//simg/338/53320.jpg" /> -->
                    </Col>
                </Row>
            </div>
        </Header>
        <Content>
            <Row>
                <Col span="24" align="left" class="toolbar">
                <span>我参与的</span>
                </Col>
            </Row>
            <Row>
                <Col span="24" align="left" class="toolbar">
                <span>我的工具</span>
                </Col>
            </Row>
        </Content>
    </Layout>
</template>

<script>
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
  mounted() {}
};
</script>
<style lang="scss" scoped>
.iconfont {
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
  top: 0.68rem;
  height: 1.8rem;
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
.my-basic-head {
  display: flex;
  align-items: center;
  padding: 0.13rem;
  img {
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    position: relative;
  }
}
.my-entrance {
  width: 1rem;
  height: 0.42rem;
}
</style>