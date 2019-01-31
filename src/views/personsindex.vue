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
                                <i class="iconfont icon-gengduo-tianchong"></i>
                            </sup>
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
.ivu-layout-header {
  border: none;
  line-height: 0;
}
.top-header {
  height: 3.3rem;
  background-color: #ff3f40;
}
.ivu-layout-content {
  margin-top: 0.28rem;
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
</style>