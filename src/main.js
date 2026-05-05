import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

const app = createApp(App)
const head = createHead()

app.use(router).use(head).mount('#app')
