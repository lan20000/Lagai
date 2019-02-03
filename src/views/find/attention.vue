<template>
    <div>
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <div id="mescrolls"></div>
            <ul class="list-content">
                <li v-for="i in dataList.length">
                    <Row>
                        <Col span="12" align="left" class="state-left">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        <div class="">
                            <span class="user-name">瘫痪</span>
                            <p class="state-item">2019-01-31</p>
                        </div>
                        </Col>
                        <Col span="12" align="right" class="state-right">
                        <span class="infuse iconfont icon-hook-w"></span>
                        </Col>
                    </Row>
                </li>
            </ul>
        </mescroll-vue>
    </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: { MescrollVue }, // 注册mescroll组件
  props: {},
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {
        warpId: "mescrolls",
        auto: true,
        bottomOffset: 20,
        textLoading: '<p class="upwarp-nodata">正在加载中~</p>'
      }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">我的底线被你看到了~</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        // 这就是为什么无更多数据有时候不显示的原因
        toTop: {
          //回到顶部按钮
          src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      },
      dataList: ["1", "1", "1", "1", "1", "1", "1", "1", "1"] // 列表数据
    };
  },
  watch: {},
  computed: {},
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      var _this = this;
      setInterval(function() {
        _this.$nextTick(() => {
          mescroll.endSuccess(_this.dataList.length);
        });
        // mescroll.endErr()
      }, 3000);
    }
  },
  created() {},
  mounted() {
    //   this.height = document.body.offsetHeight;
  }
};
</script>
<style lang="scss" scoped>
.list-content {
  overflow: hidden;
  display: block;
  li {
    border-radius: 4px;
    padding: 0.28rem;
    border-bottom: #cccccc solid 1px;
  }
}
.user-name {
  font-size: 0.28rem;
  color: #000;
  padding-left: 0.11rem;
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
#mescrolls {
  background-color: #fed431;
}
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 1rem;
  height: auto;
}
.state-right {
  justify-content: flex-end;
}
.state-right,
.state-left {
  display: flex;
  align-items: center;
  height: 0.78rem;
}
.state-item {
  padding-left: 0.11rem;
  font-size: 0.2rem;
  color: gray;
}
</style>