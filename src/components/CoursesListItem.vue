<template>
  <li>
    <div
      class="img"
      :style="{'background-image': `url('${courseInfo.cover}')`}"
    ></div>
    <h2>{{courseInfo.title}}</h2>
    <div class="content">
      <span>${{courseInfo.price}}</span>
      <span>{{courseInfo.teachers[0].username}}</span>
    </div>
    <div
      :class="btnClass"
      v-text="btnLabel"
      @click="addToCart"
    >
    </div>
  </li>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
  props: {
    courseInfo: {
      type: Object
    }
  },
  methods: {
    addToCart(){
      if(!this.courseAlreadyInCart){
        this.$store.commit('addToCart', this.courseInfo)
      }else{
        alert('已加入購物車！')
      }
    }
  },
  computed: {
    courseAlreadyInCart(){
      const result = this.$store.state.cart.find(
        ({id}) => this.courseInfo.id === id
      )
      return Boolean(result)
    },
    btnClass(){
      return {
        button: true,
        disabled: this.courseAlreadyInCart === true
      }
    },
    btnLabel(){
      return this.courseAlreadyInCart === true
        ? '已加入購物車'
        : '加入購物車'
    },
  }
}


</script>

<style lang="scss" scoped>
li {
  background-color: #fff;
  width: calc(100% / 2 - 25px);
  margin-bottom: 30px;
  box-shadow: 0 0 15px rgba(black, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:nth-of-type(even) {
    margin-left: auto;
  }
}
.img {
  height: 200px;
  background-position: center center;
  background-size: cover;
}
h2 {
  margin-top: 10px;
  margin-bottom: auto;
  padding: 0 15px;
}
.content {
  padding: 0 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.button {
  text-align: center;
  padding: 12px 0;
  background-color: #38f;
  color: #fff;
  &.disabled {
    background-color: gray;
    pointer-events: none;
  }
}
</style>
