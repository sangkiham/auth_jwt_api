import { createApp } from 'vue'
import App from './App.vue'
import { GcSpreadSheets, GcWorksheet, GcColumn } from '@grapecity/spread-sheets-vue'
import './assets/main.css'

let app = createApp(App);
app.component('gc-spread-sheets', GcSpreadSheets);
app.component('gc-worksheet', GcWorksheet);
app.component('gc-column', GcColumn);
app.mount("#app");