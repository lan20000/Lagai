<template>
    <div>
        <!-- 搜索 -->
        <transition name="Startam-succeed" v-on:enter="enter" leave-active-class="animated bounceOutDown" enter-active-class="animated zoomIn">
            <div v-show="issou" class="sou-content">
                <Row>
                    <Col>
                    <div class="lately-sos">
                        <span>大家都在搜</span>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="hot-sos">
                        <span>搜索历史</span>
                    </div>
                    </Col>
                </Row>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  props: {
    issou: ""
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sou-content {
  position: fixed;
  height: 100%;
  z-index: 999;
  width: 100%;
  background-color: #fff;
}
.lately-sos,
.hot-sos {
  span {
      font-size: 0.25rem;
      font-weight: 550;
      padding: 0.28rem 0rem;
  }
  display: flex;
  justify-content: flex-start;
  padding: 0 0.2rem !important;
}
</style>