import Vue from 'vue'
import App from './App'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import router from '../router';
import VueI18n from 'vue-i18n'
import { en } from './locales/en';
import { tr } from './locales/tr';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueI18n)

const messages = {
  en,
  tr,
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  router,
  i18n,
  template: '<App/>',
})
