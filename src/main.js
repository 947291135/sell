// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1px边框解决CSS
import './assets/css/border.css'
// 字体文件
import './assets/css/iconfont.css'
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
