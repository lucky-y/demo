<template>
  <div id="app">
    <div class="search">
      <van-search placeholder="搜索" v-model="value"/>
    </div>

    <div class="container">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="https://picsum.photos/370/200" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://picsum.photos/370/200" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://picsum.photos/370/200" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://picsum.photos/370/200" alt=""></van-swipe-item>
      </van-swipe>
    </div>

    <div class="tabs">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(item, index) in tabsContent"
          :key="index"
          :icon="item.icon"
          :text="item.title"
        />
      </van-grid>
    </div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="main">
        <div class="main_box">
          <div class="img_box">
            <img src="https://picsum.photos/355/200" alt="">
          </div>
          <div class="content">
            <div class="words">
              <span>10件起购</span>
              <span>介绍介绍介绍介绍介绍介绍介绍介绍</span>
            </div>
            <div class="price"></div>
          </div>
          <div class="buy_icon"></div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      isLoading: false,
      tabsContent: [
        { icon: './assets/images/首页_03.png', title: '智合聚惠'},
        { icon: './assets/images/首页_08.png', title: '智合商品'},
        { icon: './assets/images/首页_05.png', title: '品牌助推'},
        { icon: './assets/images/首页_11.png', title: '智合生态'},
        { icon: './assets/images/首页_17.png', title: '三方合作'},
        { icon: './assets/images/首页_18.png', title: '服务中心'},
        { icon: './assets/images/首页_19.png', title: '爱心传递'},
        { icon: './assets/images/首页_21.png', title: '关于我们'},
      ]
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 10px 12px;
  box-shadow: 10px 10px 5px #000;
}
.container img {
  width: 100%;
  border-radius: 5px;
}
.main {
  background-color: #F8F8F8;
  padding: 10px;
  font-size: .1rem;
  .main_box {
    .content {
      .words {
        line-height: .5rem;
        padding: 10px 0;
        span:first-child {
          padding: 3px 5px;
          background-color: #FB3254;
          color: #fff;
          border-radius: 5px;
        }
        span:last-child {
          width: 100%;
          font-size: .3rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

</style>
