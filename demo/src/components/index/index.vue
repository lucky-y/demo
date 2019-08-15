<template>
  <div class="index">
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

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh()">
      <div class="main">
        <div class="main_box" v-for="(item, index) in goods" :key="index">
          <div class="img_box">
            <img :src="item.goodsImgUrl" alt="">
          </div>
          <div class="content">
            <div class="words">
              <span>{{ item.tips }}</span>
              <span>{{ item.content }}</span>
            </div>
            <div class="price">
              <span>
                <span class="fts">￥ {{ item.goodsPrice1 }}</span>
                <span>.{{ item.goodsPrice2 }}</span>
              </span>
              <span class="shall">销量 {{ item.shell }}</span>
            </div>
          </div>
          <div class="buy_icon" @click="toBuy(index)">
            <img src="../../assets/images/分类1_15.png" alt="">
          </div>
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
      ],
      goods: [
        {
          goodsImgUrl: 'https://picsum.photos/355/200',
          tips: '10件起购',
          content: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
          goodsPrice1: '99',
          goodsPrice2: '85',
          shell: '2592'
        },
        {
          goodsImgUrl: 'https://picsum.photos/355/200',
          tips: '10件起购',
          content: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
          goodsPrice1: '99',
          goodsPrice2: '85',
          shell: '2592'
        },
        {
          goodsImgUrl: 'https://picsum.photos/355/200',
          tips: '10件起购',
          content: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
          goodsPrice1: '99',
          goodsPrice2: '85',
          shell: '2592'
        }
      ]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    toBuy (i) {
      this.$toast(i)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    padding: .2rem;
  }
  .container img {
    width: 100%;
    border-radius: .1rem;
  }
  .main {
    background-color: #F8F8F8;
    padding: .2rem;
    font-size: .1rem;
    .main_box {
      position: relative;
      background-color: #ffffff;
      padding-bottom: .2rem;
      margin-bottom: .2rem;
      .img_box {
        img {
          width: 100%;
        }
      }
      .content {
        .words {
          line-height: .5rem;
          padding: .1rem 1rem .1rem 0;
          height: .5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          span:first-child {
            padding: .05rem .1rem;
            background-color: #FB3254;
            color: #fff;
            border-radius: .1rem;
            margin: 0 .1rem;
          }
          span:last-child {
            font-size: .3rem;
            font-weight: bold;
          }
        }
        .price {
          span:first-child {
            color: #F7811D;
            .fts {
              font-size: .3rem;
            }
          }
          .shall {
            color: #9B9B9B;
            display: inline-block;
            margin-left: .1rem;
          }
        }
        
      }
      .buy_icon {
        position: absolute;
        right: .3rem;
        bottom: .3rem;
        cursor: pointer;
        img {
         width: .6rem;
         height: .6rem;
        }
      }
    }
  }
</style>
