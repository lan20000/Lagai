<template>
    <div class="layout">
      <Layout>
          <Header>
            <Col span="12" align="left" ><span class="iconfont icon-guanbi" @click="$router.go(-1);"></span>&nbsp;&nbsp;帮助与反馈</Col>
            <Col span="12"></Col>
          </Header>
          <Content>
            <ul class="list">
              <li>如何找回密码？<span class="iconfont icon-jinru"></span></li>
              <li>如何注册？<span class="iconfont icon-jinru"></span></li>
            </ul>
          </Content>
          <!-- <Footer>Footer</Footer> -->
      </Layout>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}

</script>
<style lang="scss" scoped>
.list{
  overflow: hidden;
  li{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 0.88rem;
    span{
      flex: 1;
      text-align: right;
    };
  }
}
</style>