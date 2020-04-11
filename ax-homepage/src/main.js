import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vuetify from 'vuetify/lib';
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal';
import 'mavon-editor/dist/css/index.css';

import '@/assets/core.css';


Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueScrollTo)
Vue.use(Vuetify)

Vue.config.productionTip = false

const vuetify = new Vuetify({
  icons: { iconfont: 'fa' }
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#ax-homepage-app')
