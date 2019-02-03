<template>
    <Layout>
        <Header>
            <Row>
                <Col span="8" align="left">
                <span class="iconfont icon-fanhui1 header-title" @click="$router.go(-1);"></span>
                </Col>
                <Col span="8" align="center">
                <span class="header-title">关于我们</span>
                </Col>
                <Col span="8" align="left">
                <span>&nbsp;</span>
                </Col>
            </Row>
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
<style lang="scss" scoped="scoped">
.header-title {
  font-size: 0.32rem;
  font-weight: 550;
}
.set-list {
  li {
    height: 0.88rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  overflow: hidden;
  background-color: #ffffff;
}
</style>