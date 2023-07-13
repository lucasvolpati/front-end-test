import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import { initializeApp } from 'firebase/app'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faRightToBracket, faPowerOff, faBars } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

/* add icons to the library */
library.add(faPlus, faRightToBracket, faPowerOff, faBars)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

const firebaseApp = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
}

initializeApp(firebaseApp)

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
