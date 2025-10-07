<template>
  <div class="page">
    <header>
      <!-- Componente de navegación lateral -->
      <navMenu />
    </header>

    <main>
      <SpeedInsights />
      <!-- Contenido principal renderizado por el enrutador -->
      <router-view />
    </main>
  </div>
  <footer class="bg-body-secondary">
    <footMenu />
  </footer>
</template>

<script setup>
  import navMenu from './components/navMenu.vue'
  import footMenu from './components/footMenu.vue'
  import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

