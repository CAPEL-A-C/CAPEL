<script setup>
import FootMenu from './components/footMenu.vue'
import NavMenu from './components/navMenu.vue'
</script>

<template>
  <div id="app-container">
    <header class="bg-body-tertiary">
      <NavMenu />
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="bg-body-tertiary text-body-tertiary">
      <FootMenu />
    </footer>
  </div>
</template>

<style scoped>
#app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

footer {
  flex-shrink: 0;
}

header {
  display: flow-root;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2025;
}
</style>
