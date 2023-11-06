import './assets/main.scss'

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

createApp(App)
    .use(router)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')