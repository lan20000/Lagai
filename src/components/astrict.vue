<template>
    <Layout>
        <Header>
            <Row>
                <Col span="12" class="text-left">
                <p @click="unfold=false">
                    <span class="iconfont icon-fanhui1"></span>
                    <span>谁可以看</span>
                </p>
                </Col>
                <Col span="12" class="text-right publish-content">
                <button class="publish">完成</button>
                </Col>
            </Row>
        </Header>
        <Content>

        </Content>
        <Footer>
            <Row>
                <Col span="24" class="text-left">
                <span>添加标签</span>
                </Col>
            </Row>
            <Row>
                <Col span="12" class="text-left">
                <span class="iconfont icon-jinru"></span>
                <span>谁可以看</span>
                </Col>
                <Col span="12" class="text-right">
                <span class="iconfont icon-jinru"></span>
                </Col>
            </Row>
            <Row>
                <Col span="12" class="text-left">
                <span>@那个人</span>
                </Col>
                <Col span="12" class="text-right">
                <span class="iconfont icon-jinru"></span>
                </Col>
            </Row>
        </Footer>
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
<style lang="scss" scoped="scoped">
.Header-title {
  font-weight: 550;
  font-size: 0.3rem;
}

.ivu-layout-footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  padding: 0rem;
  z-index: 999;
  background: #ffff;
}
// .publish-content {
//   height: 100%;
//   .publish {
//     color: #cccccc;
//     font-size: 0.23rem;
//     color: #ffffff;
//     height: 0.44rem;
//     border: none;
//     background: #ff4b67;
//   }
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
</style>