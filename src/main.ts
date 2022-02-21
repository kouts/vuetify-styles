import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { vuetify } from '@/plugins/vuetify'

createApp(App).use(router).use(vuetify).mount('#app')
