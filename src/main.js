import Route from '@/router'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import base64 from 'base64-js'

// axios.defaults.baseURL = 'http://127.0.0.1:3007'
axios.defaults.baseURL = '/app/'
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(base64)

//qs可以处理数据将数据改为需要的格式
import qs from 'qs'
Vue.prototype.qs=qs

new Vue({
  render: h => h(App),//把指定文件渲染到页面中,
  router: Route
}).$mount('#app')//和el作用一致，可以和el二选一