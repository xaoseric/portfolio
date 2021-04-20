import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import vuetify from '@/plugins/vuetify';
import Vuelidate from 'vuelidate';
import VueTyperPlugin from 'vue-typer'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(VueTyperPlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
