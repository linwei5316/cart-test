// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

import store from '@/store/store'
import router from '@/router/router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<router-view />',
  store,
  router
})
