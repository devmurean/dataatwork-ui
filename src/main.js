import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/style.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronDown, faChevronCircleRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faChevronDown, faChevronCircleRight, faTimes)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
