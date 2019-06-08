
// JS - ./js/index.js
import './js/'
// SCSS
import './scss/main.scss'
// CSS (example)
import './css/main.css'

import Glide from '@glidejs/glide'

var count = 4;

if (screen.width <= 699) {
  count = 2
}
var o = {
  type: 'carousel',
  startAt: 0,
  perView: count,

}
var b = {
  type: 'carousel',
  startAt: 0,
  perView: 1,

}
new Glide('.glide', o).mount()

new Glide('.glide-reviews', b).mount()


// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.grid.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import 'vue'
// import Vue from 'vue'
// window.Vue = require('vue')
// import store from './store'

// Vue.component('example-component', require('./components/Example.vue').default)

// With vuex
// const app = new Vue({
//   data () {
//     return {
//       component: false,
//     }
//   },
//   store,
//   el: '#app'
// })

//* Without vuex and store
// const app = new Vue({
//   el: '#app'
// })