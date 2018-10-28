<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  * {
    // outline: 1px solid red;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 80px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #ffb728;
  }
  .button, button{
    cursor: pointer;
    user-select: none;
    transition: 0.3s;
    outline: none;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
    }
  }
</style>
