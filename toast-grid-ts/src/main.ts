import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import TuiGrid from "vue3-tui-grid"
import 'tui-grid/dist/tui-grid.css';
import "tui-date-picker/dist/tui-date-picker.css"; // use datepicker
import 'material-icons/iconfont/material-icons.css';


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(TuiGrid)  
  .mount('#app')
