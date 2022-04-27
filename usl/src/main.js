import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/css/style.css'

Vue.config.productionTip = false

export var bus = new Vue();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
