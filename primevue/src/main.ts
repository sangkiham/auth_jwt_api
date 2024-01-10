import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
