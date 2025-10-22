import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/css/app.css'
import 'bootstrap'

import App from './App.vue'
import router from './router'
import FootBar from './footBar.vue'

const app = createApp(App)
const footBar = createApp(FootBar)

app.use(createPinia()).use(router).mount('#app')

footBar.use(createPinia()).use(router).mount('#footBar')

let mensajes = new Map()
mensajes.set('title', 'Advertencia')
mensajes.set(
  'parrafo',
  'Si estas leyendo esto, recuerda que esta seccion esta diseñada para el uso esclusivo de los desarrolladores; cualquier modificacion en esta pestaña puede arruinar la experiencia del usuario.',
)

mensajes.forEach((valor) => {
  console.warn(`${valor}`)
})
