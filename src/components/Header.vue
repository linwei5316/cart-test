<template>
  <header>
    <div>
      <span>購物車數量：{{amountInCart}}</span>
      <span>購物車金額：{{priceInCart}}</span>
      <router-link :to="routerLinkTo">{{routerLinkLabel}}</router-link>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    routerLinkTo(){
      return this.$route.path === "/Cart"
        ? '/CoursesList'
        : '/Cart'
    },
    routerLinkLabel(){
      return this.$route.path === "/Cart"
        ? '前往課程清單'
        : '前往購物車'
    },
    ...mapGetters(['amountInCart', 'priceInCart'])
  }
}
</script>

<style lang="scss" scoped>
  header {
    margin-bottom: 20px;
    padding: 15px;
    color: #38f;
    box-shadow: 0 0 10px rgba(black, 0.2);
    font-size: 18px;
    background: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    &>div {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      span {
        margin-right: 20px;
      }
      a {
        margin-left: auto;
      }
    }
  }
</style>
