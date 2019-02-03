<template>
    <div class="">
        <div class="more"></div>
        <div class="label-content">
            <Row>
                <Col span="8" class="text-right">&nbsp;</Col>
                <Col span="8">
                <span class="title">添加标签</span>
                </Col>
                <Col span="8" class="text-right">
                <span class="iconfont icon-guanbi" @click="$emit('close', '')"></span>
                </Col>
            </Row>
            <ul class="label-list">
                <li v-for="(i,index) in labelList" v-cloak >{{i}}</li>
            </ul>
            <div class="affirm" @click="$emit('finish', [labelactive,0])">确定 (2/3)</div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        labelactive:['','',''],
        labelList:['134','23424','2342','134','23424','2342']
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
.more {
  background: #7c7c7c;
  opacity: 0.5;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 997;
}
.label-content {
  height: 6rem;
  padding: 0.12rem;
  width: 100%;
  display: block;
  background-color: #ffffff;
  position: fixed;
  bottom: 0rem;
  z-index: 999;
}
.title {
  font-size: 0.29rem;
}
.affirm {
  height: 0.6rem;
  width: 1.8rem;
  margin: 0.2rem auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 0.9rem;
  bottom: 0rem;
  background-color: #ff4b67;
  left: 50%;
  transform: translate(-50%, -50%);
}
.label-list-active{
    border: #ff4b67 solid 1px !important;
}
.label-list {
  display: block;
  overflow: hidden;
  li {
    float: left;
    border: #ffffff solid 1px;
    height: 0.5rem;
    overflow: hidden;
    border-radius: 0.25rem;
    font-size: 0.22rem;
    padding: 0.08rem 0.12rem 0.08rem 0.12rem;
    overflow: hidden;
    margin-right: 0.1rem;
  }
}
</style>