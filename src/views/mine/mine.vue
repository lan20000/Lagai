<template>
    <Layout>
        <Header class="my-center-header">
            <span class="my-center-text">个人中心</span>
        </Header>
        <Content>Content</Content>
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
.my-center-text{
    font-size: 0.32rem;
    font-weight: 550;
}
.my-center-header{
    display: flex;
    justify-content: flex-start;
}
.ivu-layout-header{
    border: none;
}
</style>