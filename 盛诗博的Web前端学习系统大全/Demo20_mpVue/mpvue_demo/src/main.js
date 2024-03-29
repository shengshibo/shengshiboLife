import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'

import store from './store/store'
import App from './App.vue'

// 设置vue的提示功能关闭
Vue.config.productionTip = false

// 声明当前组件的类型
App.mpType = 'app' // 应用

// 将store对象放置到Vue原型上，为的是每个实例都可以使用
Vue.prototype.$store = store

let fly = new Fly
Vue.prototype.$fly = fly

// 生成应用的实例
const app = new Vue(App)

// 挂载整个应用
app.$mount()
