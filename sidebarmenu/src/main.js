import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueCookies from "vue-cookies"
import store from "./store";


import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'material-icons/iconfont/material-icons.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app
    .use(router)
    .use(VueCookies)
    .use(VueSidebarMenu)
    .use(vuetify)
    .use(store)
    .mount("#app");

app.$cookies.config("1d"); // expire 1일 (global 설정) 
