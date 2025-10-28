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

<style scoped>
img {
  width: 50px;
}
</style>
