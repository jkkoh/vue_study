import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import updown from '@/components/updown.vue'
import slider from '@/components/slider.vue'

createApp(App)
.use(router)
.component('Updown', updown)
.component('Slider', slider)
.mount('#app')
