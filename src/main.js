import './assets/main.scss'
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
    faMartiniGlassCitrus,
    faKitchenSet,
    faFireBurner,
    faBookBookmark,
    faBowlRice,
    faPersonDigging,
    faCakeCandles,
    faCalendarDays,
    faUsers,
    faAddressCard,
    faAddressBook,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faFacebookF,
    faInstagram,
    faMartiniGlassCitrus,
    faKitchenSet,
    faFireBurner,
    faBookBookmark,
    faBowlRice,
    faPersonDigging,
    faCakeCandles,
    faCalendarDays,
    faUsers,
    faAddressCard,
    faAddressBook,
    faPhone,
    faEnvelope
)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

// languages
import ruMessages from './locales/ru.json';
import lvMessages from './locales/lv.json';

const i18n = createI18n({
    locale: 'lv',
    fallbackLocale: 'lv',
    messages: {
        ru: ruMessages,
        lv: lvMessages
    },
});

const vuetify = createVuetify({
    components
});

createApp(App)
    .use(router)
    .use(i18n)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')