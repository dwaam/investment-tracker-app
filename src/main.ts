import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import PrimeVue from 'primevue/config';
import Chart from 'primevue/chart';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import 'primeflex/primeflex.css';
import '@mdi/font/css/materialdesignicons.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPiggyBank, faArrowTrendUp, faWallet, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBitcoin, faPiggyBank, faArrowTrendUp, faWallet, faChartLine);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(PrimeVue)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Chart', Chart);

router.isReady().then(() => {
  app.mount('#app');
});
