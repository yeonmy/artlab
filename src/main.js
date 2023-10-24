import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('load', function () {
  function resetHtmlFont () {
  // 获得html对象并动态设置font-size = 设备宽度/10
    document.documentElement.style.fontSize = screen.width / 10 + 'px'
  }
  resetHtmlFont()
  // 如果窗口大小变化了，则重新计算基础font-size
  window.onresize = resetHtmlFont
})
