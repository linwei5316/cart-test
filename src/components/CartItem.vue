<template>
  <li>
    <div
      class="img"
      :style="image(courseInfo.cover)"
    ></div>
    <h2>{{courseInfo.title}}</h2>
    <span class="price">${{courseInfo.price}}</span>
    <button @click="removeCartItem(courseInfo.id)">移除</button>
  </li>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    courseInfo: {
      type: Object
    }
  },
  methods: {
    image(img){
      return {
        backgroundImage: `url('${img}')`
      }
    },
    ...mapMutations(['removeCartItem'])
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  padding: 0 30px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
}
h2 {
  font-size: 20px;
}
.img {
  width: 180px;
  height: 90px;
  background-position: center center;
  background-size: cover;
  margin-right: 20px;
}
.price {
  margin-left: auto;
}
button {
  margin-left: 20px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #38f;
}
</style>

