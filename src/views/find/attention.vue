<template>
    <div>
        <ul class="list-content">
            <li>
                <Row>
                    <Col span="12" align="left">
                    <Avatar src="http://img.ivsky.com/img/tupian/t/201808/10/huangse_wanshouju-001.jpg" />
                    <span class="user-name">瘫痪</span>
                    </Col>
                    <Col span="12" align="right">
                    <span class="infuse">+</span>
                    </Col>
                </Row><img src="http://img.ivsky.com/img/tupian/t/201808/10/huangse_wanshouju-001.jpg"></li>
        </ul>
    </div>
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
.list-content {
  overflow: hidden;
  display: block;
  li {
    border-radius: 4px;
    border:#fed431 solid 1px;
    padding: 0.28rem;    
  }
}
.user-name {
  font-size: 0.28rem;
  color: #000;
  padding-left: 0.28rem;
}
.infuse {
  width: 1rem;
  display: block;
  font-size: 0.32rem;
  font-weight: 550;
  text-align: center;
  height: 0.45rem;
  border-radius: 0.5rem;
  background-color: #fed431;
}
</style>