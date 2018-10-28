<template>
  <div class="container">
    <h1>HiSKIO</h1>
    <h2>人因學習而偉大</h2>
    <h4>從程式出發，為網路學習者打造的平台</h4>
    <router-link to="/CoursesList">前往課程列表</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
  }
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 40px;
  }
  h4 {
    font-size: 30px;
  }
  a {
    font-size: 20px;
    transition: 0.3s;
    display: inline-block;
    &:hover {
      transform: scale(1.1)
    }
  }
</style>
