
import App from './App.vue'
import {router} from "./routers"
import Vue from 'vue'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')