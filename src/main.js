import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueStripeCheckout from 'vue-stripe-checkout';
import VueResource from 'vue-resource'

Vue.use(Vuetify);
Vue.use(VueStripeCheckout, 'pk_test_ePmSGqHydH0ida1IWZIAfSDF00tIqUqdtF');
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
