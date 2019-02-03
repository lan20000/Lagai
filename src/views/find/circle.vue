<template>
    <div>
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">

            <Row>
                <Col span="3" align="left">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </Col>
                <Col span="21" align="left">
                <p>我是蓉妹妹</p>
                <p class="time">5分钟之前</p>
                </Col>
            </Row>
            <Row>
                <Col span="24" align="left"> 我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹我是蓉妹妹
                </Col>
            </Row>
            <Row>
                <Col span="24" align="left">
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="illustration" />
                </Col>
            </Row>
            <Row>
                <Col span="12" align="left">
                <span class="label">#超话</span>
                <span class="label">#超话</span>
                <span class="label">#超话</span>
                </Col>
                <Col span="12" align="right">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianzan"></use>
                    </svg>
                    12
                </span>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-pinglun1"></use>
                    </svg>
                    12
                </span>
                </Col>
            </Row>
        </mescroll-vue>
    </div>
</template>

<script>
//swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./../../assets/fonts/iconfont.js";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: { MescrollVue },
  props: {},
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {
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
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
.icon {
  width: 0.42rem;
  height: 0.42rem;
  fill: currentColor;
  overflow: hidden;
}
.iconfont {
  color: #ffffff;
}
.signature {
  font-size: 0.25rem;
  color: #a1a1a1;
  line-height: 0.25rem;
}
.toolbar {
  width: 100%;
  background-color: #ff3f40;
  height: 2.8rem;
  border-radius: 4px;
  margin: 0.2rem auto;
  span {
    font-size: 0.28rem;
    font-weight: 550;
  }
}
.tab-list {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    flex: 1;
  }
}
.active::before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0.35rem;
  width: 40%;
  left: 30%;
  border-radius: 3px;
  border-top: 6px solid #ff4b67;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.time {
  color: #a1a1a1;
  font-size: 0.2rem;
}
.illustration {
  width: 1rem;
  border-radius: 3px;
  display: inline-block;
  margin: 0rem 0.08rem 0rem 0.08rem;
  height: 0.98rem;
}
.label {
  border-radius: 0.44rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.88rem;
  height: 0.44rem;
  margin-right: 0.2rem;
  border: #a1a1a1 solid 1px;
  padding: 0.01rem;
  font-size: 0.2rem;
}
</style>