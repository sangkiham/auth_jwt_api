import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

app.use(store)
   .use(router);

// vue-i18n
import { createI18n } from 'vue-i18n'
import enUS from './locales/en.json'
import koKR from './locales/ko.json'

type MessageSchema = typeof enUS // json 파일 타입화?해서 messages타입 지정해줌
const i18n = createI18n<[MessageSchema], 'ko' | 'en'>({
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
