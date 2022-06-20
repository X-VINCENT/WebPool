import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faHome,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import VCalendar from "v-calendar";

library.add({ faBars, faHome, faCalendarAlt });

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VCalendar, {})
  .mount("#app");
