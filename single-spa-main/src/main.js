import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ant from 'ant-design-vue'
import './single-spa-config.js'
import 'ant-design-vue/dist/antd.css'

import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Ant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
