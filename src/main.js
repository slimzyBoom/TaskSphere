import { createApp } from 'vue'
import './styles/main.css'
import router from './router'
import App from './App.vue'

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'; // Import icons you need
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


// Add icons to the library
library.add(faUser, faLock, faGoogle, faEnvelope);

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

