<template>
    <Layout>
        <Header class="header">
            <Row>
                <Col span="8">
                <span class="sift-text">精选</span>
                </Col>
                <Col span="8">&nbsp;</Col>
                <Col span="8">
                <span class="iconfont icon-sousuo"></span>
                </Col>
            </Row>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
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
.header {
  background-color: #fa526b;
  height: 1.2rem;
}
.icon-sousuo,
.sift-text {
  color: #ffffff;
}
.sift-text {
  font-size: 0.42rem;
}
</style>