<template>
  <div id="app">
    <Index></Index>
    <div class="null_box"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Index from './components/index/index'
import Footer from './components/common/footer'
export default {
  components: {
    Index,
    Footer
  }
}
</script>

<style lang="less" scoped>
.null_box {
  width: 100%;
  padding: 1rem 0;
  background-color: #F8F8F8;
}
</style>
