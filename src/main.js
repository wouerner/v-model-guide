import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAnalytics from 'vue-analytics'
import router from './router'

Vue.use(VueAnalytics, {
    id: 'UA-155066120-1',
    router
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
