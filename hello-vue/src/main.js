
import App from './App.vue'
import {router} from "./routers"
import Vue from 'vue'
import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 'vvvv'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
Vue.use(createStore);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

console.log(store.state.count) // ->