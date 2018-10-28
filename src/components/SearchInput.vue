<template>
  <div>
    <input type="text" v-model.trim="searchInput" placeholder="搜尋課程">
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  computed: {
    searchInput: {
      get(){
        return this.$store.state.searchFilter
      },
      set(val){
        this.$store.commit('setSearchFilter', val)
        this.searchCoursesDebounce()
      }
    }
  },
  methods: {
    searchCourses(){
      this.$store.dispatch('fetchCourses')
    }
  },
  created() {
    this.searchCoursesDebounce = debounce(this.searchCourses,500)
  },
  mounted() {
    this.$store.dispatch('fetchCourses')
  },
}
</script>

<style lang="scss" scoped>
  input {
    font-size: 20px;
    outline: none;
    padding: 8px 12px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
</style>
