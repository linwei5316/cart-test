<template>
  <div>
    <Header/>
    <ul>
      <CartItem
        v-for="course in cart"
        :key="course.id"
        :courseInfo="course"
      />
    </ul>
    <button v-if="cart.length > 0">確認結帳</button>
    <h2 v-else>購物車無商品</h2>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import Header from '@/components/Header'
import { mapState } from 'vuex';
export default {
  components: {
    Header,
    CartItem
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
  }
  ul {
    margin-top: 80px;
  }
  button {
    padding: 15px 30px;
    color: #fff;
    background-color: #38f;
    border: none;
    font-size: 18px;
    border-radius: 5px;
  }
</style>
