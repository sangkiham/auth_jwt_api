import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TuiGrid from "vue3-tui-grid"
import 'tui-grid/dist/tui-grid.css';
import "tui-date-picker/dist/tui-date-picker.css"; // use datepicker
import 'material-icons/iconfont/material-icons.css';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App);

app.use(store)
    .use(router)
    .use(TuiGrid)
    .use(PrimeVue);

// vue-i18n
import { createI18n } from 'vue-i18n'
import enUS from './locales/en.json'
import koKR from './locales/ko.json'
  
const i18n = createI18n({
  // options
  locale: 'ko',
  fallbackLocale: 'en',
  legacy: false, //꼭 false로
  messages: {
    en: enUS,
    ko: koKR
  }
})
app.use(i18n);

app.mount('#app')
  