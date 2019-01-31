<template>
    <Layout>
        <Header>
            <Row>
                <Col span="8" align="left">
                <span class="iconfont icon-fanhui1 header-title" @click="$router.go(-1);"></span>
                </Col>
                <Col span="8" align="center">
                <span class="header-title">设置</span>
                </Col>
                <Col span="8" align="left">
                <span>&nbsp;</span>
                </Col>
            </Row>
        </Header>
        <Content>
            <ul class="set-list">
                <li>
                    <Col span="12" align="left">
                    <span>清除缓存</span>
                    </Col>
                    <Col span="12" align="right"> 12
                    </Col>
                </li>
                <li @click="$router.replace('/Us')">
                    <Col span="12" align="left">
                    <span>关于我们</span>
                    </Col>
                    <Col span="12" align="right">
                    <i class="iconfont icon-jinru "></i>
                    </Col>
                </li>
                <li>
                    <Col span="12" align="left">
                    <span>用户协议</span>
                    </Col>
                    <Col span="12" align="right">
                    <i class="iconfont icon-jinru "></i>
                    </Col>
                </li>
                <li>
                    <Col span="12" align="left">
                    <span>使用许可</span>
                    </Col>
                    <Col span="12" align="right">
                    <i class="iconfont icon-jinru "></i>
                    </Col>
                </li>
                <li>
                    <Col span="12" align="left">
                    <span>当前版本</span>
                    </Col>
                    <Col span="12" align="right"> v0.0.1
                    </Col>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </Content>
        <Footer>
            退出登录
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
<style lang="scss" scoped>
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