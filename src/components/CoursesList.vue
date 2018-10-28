<template>
  <div class="courses-list-wrapper">
    <Header />
    <SearchInput/>
    <ul>
      <template v-if="$store.state.courses.length > 0">
        <CoursesListItem
          v-for="course in courses"
          :key="course.id"
          :courseInfo="course"
        />
      </template>
      <li
        class="empty"
        v-else
      >
        暫無結果
      </li>
    </ul>
  </div>
</template>

<script>
import CoursesListItem from '@/components/CoursesListItem'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import {mapState} from 'vuex'

export default {
  components: {
    Header,
    CoursesListItem,
    SearchInput,
  },
  computed: {
    ...mapState(['courses'])
  },
}
</script>

<style lang="scss" scoped>
  .courses-list-wrapper {
    padding: 0 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
  .empty {
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    margin: 0 auto;
    margin-top: 20px;
  }
</style>
