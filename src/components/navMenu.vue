<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="./">
        <img src="./icons/logo.png" />
        Capel A.C.
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="./#Info">Acerca de Nosotros</router-link>
          <router-link class="nav-link" to="./Horarios">Horarios</router-link>
          <router-link class="nav-link" to="./Contacto">Contacto</router-link>
        </ul>
      </div>
      <!-- <button
        id="btnTema"
        @click="cambiarTema"
        :class="tema == 'light' ? 'btn btn-outline-light' : 'btn btn-outline-dark'"
      >
        <i :class="tema == 'light' ? 'bi bi-moon-fill text-dark' : 'bi bi-sun-fill text-light'"></i>
      </button> -->
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado reactivo para almacenar el tema actual
const tema = ref('light')

/**
 * Aplica el tema recibido y actualiza el atributo
 * data-bs-theme en el <body> para que Bootstrap lo use.
 */
function aplicarTema(nuevoTema) {
  tema.value = nuevoTema
  document.body.setAttribute('data-bs-theme', tema.value)
}

/**
 * Alterna entre modo claro y oscuro.
 * También guarda la preferencia en localStorage.
 */
function cambiarTema() {
  aplicarTema(tema.value === 'light' ? 'dark' : 'light')
  localStorage.setItem('tema', tema.value)
}

/**
 * Al montar el componente:
 * 1. Revisa si hay un tema guardado en localStorage.
 * 2. Si no, detecta la preferencia del sistema (oscuro/claro).
 * 3. Escucha cambios en la preferencia del sistema y actualiza el tema.
 */
onMounted(() => {
  const temaGuardado = localStorage.getItem('tema')
  if (temaGuardado) {
    aplicarTema(temaGuardado)
    return
  }

  // Detecta si el usuario prefiere modo oscuro
  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)')
  aplicarTema(prefiereOscuro.matches ? 'dark' : 'light')

  // Cambia el tema automáticamente si el usuario cambia la preferencia del sistema
  prefiereOscuro.addEventListener('change', (e) => {
    aplicarTema(e.matches ? 'dark' : 'light')
  })
})
</script>

<style scoped>
img {
  width: 50px;
}
</style>
