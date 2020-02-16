import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

Vue.use(vuetify);
new Vue({
  render: h => h(App),
  vuetify,
  Vuetify: new Vuetify()
}).$mount('#app')
