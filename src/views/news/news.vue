<template>
    <div>
        <Layout>
            <Header>
                <Row>
                    <Col span="12" class="menu-list">
                    <span :class="activecode==0 ? 'active':''" @click="activecode=0">消息</span>
                    <span :class="activecode==1 ? 'active':''" @click="activecode=1">通知</span>
                    </Col>
                    <Col span="12">
                        <span class="iconfont icon-sousuo"></span>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span="8" class="option">
                    <Badge :count="3" :offset=[0,0] class-name="badgetop">
                        <div class="icon-bg" :style="{backgroundColor:'#47b3ff'}">
                            <i>@</i>
                        </div>
                    </Badge>
                    <span>与我相关</span>
                    </Col>
                    <Col span="8" class="option">
                    <Badge :count="0" :offset=[0,0] class-name="badgetop">
                        <div class="icon-bg" :style="{backgroundColor:'#47ce76'}">
                            <i class="iconfont icon-pinglun"></i>
                        </div>
                    </Badge>
                    <span>通知</span>
                    </Col>
                    <Col span="8" class="option">
                    <Badge :count="0" :offset=[0,0] class-name="badgetop">
                        <div class="icon-bg" :style="{backgroundColor:'#ff6e6e'}">
                            <i class="iconfont icon-xianxing_xihuan-"></i>
                        </div>
                    </Badge>
                    <span>收到的点赞</span>
                    </Col>
                </Row>
            </Content>

        </Layout>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activecode: 0 //选择的栏目
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.ivu-layout-header {
  border: none !important;
}
.option {
  margin: 0.28rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    padding: 0.08rem 0rem 0.08rem 0rem;
  }
}

.menu-list {
  display: flex;
  span {
    font-size: 0.32rem;
    color: #bbbbbb;
    padding: 0rem 0.12rem;
    position: relative;
  }
  .active {
    color: #000;
  }
  .active::before {
    font-size: 0.32rem;
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 6px;
    width: 40%;
    left: 25%;
    border-radius: 3px;
    border-top: 6px solid #ff4b67;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
}

.icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: #ffffff;
    font-size: 0.32rem;
  }
  width: 1rem;
  border-radius: 0.08rem;
  height: 1rem;
}
</style>