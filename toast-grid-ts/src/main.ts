import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TuiGrid from "vue3-tui-grid"
import 'tui-grid/dist/tui-grid.css';
import "tui-date-picker/dist/tui-date-picker.css"; // use datepicker
import 'material-icons/iconfont/material-icons.css';

createApp(App)
    .use(store)
    .use(router)
    .use(TuiGrid)
    .mount('#app')
