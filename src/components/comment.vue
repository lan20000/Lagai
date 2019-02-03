<template>
    <div class="comment">
        <textarea placeholder="此时你想说点什么呢"></textarea>
        <Row>
            <Col span="12" align="left" class="option">
            <span class="iconfont icon-tupian"></span>
            <span class="at">@</span>
            </Col>
            <Col span="12" align="right" class="option">
            <span class="deliver">推一把</span>
            </Col>
        </Row>
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
<style lang="scss" scoped="scoped">
.comment {
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  bottom: 0rem;
  height: 3.2rem;
  textarea {
    width: 100%;
    padding: 0.12rem;
    height: 2rem;
    border: none;
    text-align: left;
  }
  .icon-tupian {
    font-size: 0.38rem;
    margin-top: 0.06rem;
    font-weight: 550;
  }
  .at {
    font-size: 0.28rem;
    font-weight: 550;
  }
  .option {
    height: 0.88rem;
    span {
      padding-right: 0.1rem;
    }
    .deliver {
      color: #cccccc;
      font-size: 0.23rem;
      color: #ffffff;
      height: 0.44rem;
      line-height: 0.44rem;

      padding: 0rem 0.2rem 0rem 0.2rem;
      border: none;
      border-radius: 3px;
      background: #ff4b67;
    }
    display: flex;
    align-items: center;
    padding: 0rem 0.12rem;
  }
  .option:last-child {
    justify-content: flex-end;
  }
}
</style>