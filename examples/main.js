import Vue from 'vue'
import App from './App.vue'
import LinUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(LinUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
