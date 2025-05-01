import { createApp } from "vue";
import "./styles/main.css";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


// Add icons to the library
library.add(far, fas, fab);

const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(pinia)
  .use(router)
  .use(Toast)
  .use(createPinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
