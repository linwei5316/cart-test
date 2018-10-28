import Vue from 'vue'
import Vuex, {Store} from 'vuex'

Vue.use(Vuex)

// const COURSES_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1'
const COURSES_URL = 'https://hiskio.com/api/v1/courses/search'
const SEARCH_URL = 'https://hiskio.com/api/v1/courses/search?word='


export default new Store({
  state: {
    courses: [],
    cart: [],
    searchFilter: ''
  },
  getters: {
    priceInCart(state){
      return state.cart.reduce(
        (acc, {price}) => acc + price
      ,0)
    },
    amountInCart(state){
      return state.cart.length
    },
  },
  mutations: {
    setCourses(state, courses){
      state.courses = courses
    },
    setSearchFilter(state, input){
      state.searchFilter = input
    },
    addToCart(state, course){
      state.cart.push(course)
    },
    removeCartItem(state, courseId){
      const index = state.cart.findIndex(
        ({id}) => id === courseId
      )
      state.cart.splice(index, 1)
    }
  },
  actions: {
    fetchCourses({state, commit}){
      if(!state.searchFilter){
        fetch(COURSES_URL)
          .then(res => res.json())
          .then(data => 
            commit('setCourses', data.courses)
          )
      }else{
        fetch(SEARCH_URL + state.searchFilter)
          .then(res => res.json())
          .then(data => 
            commit('setCourses', data.courses)
          )
      }
    }
  }
})