// Importa funciones de Vue Router:
// createRouter: crea una instancia del enrutador
// createWebHistory: usa el historial HTML5 para URLs limpias (sin #)
import { createRouter, createWebHistory } from 'vue-router'

// Importa los componentes que se mostrarán según la ruta
import home from '../components/home.vue'
import horarios from '../components/horarios.vue'
import contacto from '../components/contacto.vue'

// Definición de rutas de la aplicación
// Cada objeto asocia una URL (path) con un componente a renderizar
const routes = [
  { path: '/', component: home },         // Página principal
  { path: '/horarios', component: horarios }, // Página de horarios
  { path: '/contacto', component: contacto }  // Página de contacto
]

// Crea la instancia del enrutador con:
// - Modo history para URLs limpias
// - Lista de rutas definidas arriba
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Exporta el enrutador para usarlo en main.js
export default router
