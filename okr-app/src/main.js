import 'sass/app.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Api from './api'
import Calendar from 'vue-mobile-calendar'

Vue.config.productionTip = false

Vue.use(Api)
Vue.use(Calendar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')