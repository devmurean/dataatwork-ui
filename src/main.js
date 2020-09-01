import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/style.css'
import 'animate.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronDown, faChevronCircleRight, faTimes, faQuoteLeft, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faChevronDown, faChevronCircleRight, faTimes, faQuoteLeft, faCog)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
