import Vue from 'vue'
import App from './App.vue'
import {i18n} from "@/plugins/i18n";
import VueRouter from "vue-router";
import router from "./router/index"
import Vuelidate from "vuelidate";

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
