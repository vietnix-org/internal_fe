import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './plugins/font-awesome' 

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.mount('#app')
