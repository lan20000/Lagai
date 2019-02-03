<template>
    <div class="Dynamicpower">
        <Layout>
            <Header>
                <Row>
                    <Col span="12" class="text-left">
                    <span class="iconfont icon-fanhui1" @click="$emit('close', '')">动态权限</span>
                    </Col>
                    <Col span="12" class="text-right publish-content">
                    <button class="publish" @click="$emit('finish', [animal,1])">完成</button>
                    </Col>
                </Row>
            </Header>
            <Content>
                <RadioGroup class="content" v-model="animal">
                    <ul>
                        <li>
                            <Radio label="公开"></Radio>
                        </li>
                        <li>
                            <Radio label="仅圈子内可见"></Radio>
                        </li>
                        <li>
                            <Radio label="推送到秘密圈"></Radio>
                        </li>
                    </ul>
                </RadioGroup>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      animal: "公开"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped="scoped">
.Dynamicpower{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    z-index: 999;
}
ul {
  overflow: hidden;
  width: 100%;
  display: block;
  li {
    height: 0.88rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }
}
.content{
    width: 100%;
}
.publish-content {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .publish {
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
}
.user-Publish-content {
  border: none;
  width: 100%;
  background-color: transparent;
  height: 2rem;
  padding-top: 0.12rem;
}
</style>