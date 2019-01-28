<template>
 <Layout>    
        <router-view class="body-content"></router-view> 
        <Footer>      
          <Row>
              <Col span="6">
                <router-link to="/" >
                  <a href="" class="title" @click="code=1" :class=" code==1 ? 'default' : ''">
                    <i class="iconfont icon-zhuye" :class="code==1 ? 'animated heartBeat' : ''" ></i> <br />首页
                  </a>
                </router-link>
              </Col>
              <Col span="6">                  
                  <router-link to="find">
                    <a href="" class="title" @click="code=2" :class=" code==2 ? 'default' : '' ">
                      <i class="iconfont icon-guankanyanjing " :class=" code==2 ? 'animated heartBeat' : '' "></i><br />发现
                    </a>
                  </router-link>
              </Col>               
              <Col span="6">
                  <router-link to="news">
                    <a href="" class="title" @click="code=3" :class=" code==3 ? 'default' : ''">
                      <i class="iconfont icon-iconset0457" :class="code==3 ? 'animated heartBeat' : ''" ></i><br />消息
                    </a>
                  </router-link>
              </Col>
              <Col span="6">
                  <router-link to="mine">
                    <a href="" class="title" @click="code=4" :class=" code==4 ? 'default' : ''">
                      <i class="iconfont icon-ziyuan" :class="code==4 ? 'animated heartBeat' : ''" ></i><br />我的
                    </a>
                  </router-link>
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
    return {
      code: 1 //默认选中的
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "./../assets/public/animate.css";
.foot {
  width: 100%;
  display: block;
  height: 100px;
}
.ivu-layout-footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 0.88rem;
  padding: 0rem;
  .ivu-row {
  }
}

.ivu-layout-footer:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #b2b2b2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.title {
  color: #333333;
  i{
    display: inline-block;
  }
  display: block;
}
.default {
  color: #2d8cf0 !important;
}
</style>