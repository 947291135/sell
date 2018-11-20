// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/border.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false

// 注册fastClick插件
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  fastClick,
  components: { App },
  template: '<App/>'
})
