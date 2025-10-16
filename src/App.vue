<script setup>
import FootMenu from './components/footMenu.vue'
import NavMenu from './components/navMenu.vue'
</script>

<template>
  <div id="app-container">
    <header>
      <NavMenu />
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="bg-body-tertiary">
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
  display:flow-root;
  z-index: 2;
}
</style>
