import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import './assets/fontawesome/css/all.min.css';
import VueCookies from "vue-cookies"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
  
loadFonts();

let app = createApp(App);
app
    .use(router)
    .use(store)
    .use(vuetify)
    .use(VueCookies)
    .mount("#app");
    
app.$cookies.config("1d"); // expire 1일 (global 설정) 