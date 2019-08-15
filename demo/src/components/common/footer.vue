<template>
  <div class="footer">
    <van-grid>
      <van-grid-item
        v-for="(i, index) in tabs"
        :key="index"
        :icon="i.icon"
        :text="i.title"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          icon: '../../assets/images/购物车_07.png',
          title: '首页'
        },
        {
          icon: '../../assets/images/购物车_09.png',
          title: '智合商品'
        },
        {
          icon: '../../assets/images/购物车_11.png',
          title: '购物车'
        },
        {
          icon: '../../assets/images/购物车_13.png',
          title: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
}
</style>
