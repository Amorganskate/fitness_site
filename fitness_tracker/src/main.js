import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(vuetify, VueRouter);
new Vue({
  render: h => h(App),
  vuetify,
  router: router,
  icons: {
    iconfont: 'mdi', 
  },
}).$mount('#app')
