import { createApp } from 'vue'

function setVh() {
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }
}
setVh()
window.addEventListener('orientationchange', () => setTimeout(setVh, 200))
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

const app = createApp(App)
const head = createHead()

app.use(router).use(head).mount('#app')
