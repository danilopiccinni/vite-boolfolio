import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import {router} from './router'

createApp(App).use(router).mount('#app')
