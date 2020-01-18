import Vue from 'vue'
import App from './App.vue'

import { router } from './routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartPie, faTh, faToggleOn, faIdBadge, faExclamationTriangle, faPollH, faRibbon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router';

library.add(faChartPie);
library.add(faTh);
library.add(faToggleOn);
library.add(faIdBadge);
library.add(faExclamationTriangle);
library.add(faPollH);
library.add(faRibbon);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
