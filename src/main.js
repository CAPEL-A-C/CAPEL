// Importa los estilos globales de la aplicación
import './assets/app.css'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa funciones principales de Vue
// createApp: crea una nueva instancia de la aplicación
// render: (no se usa en este archivo, podría eliminarse si no se necesita)
import { createApp, render } from 'vue'

// Componente raíz de la aplicación
import App from './App.vue'

// Configuración de rutas de la aplicación
import router from './router'

// Crea la instancia de la app, le añade el enrutador y la monta en el elemento con id="app"
createApp(App)
  .use(router) // Registra el enrutador para navegación SPA
  .mount('#app') // Inserta la app en el DOM
