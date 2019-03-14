import Vue from 'vue'
import router from './router/index' // './router'와 같다. index.js 생략 가능! 
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  router,  
  store, 
  render : h => h(App)
})
