<script setup lang="ts">
import NavMenu from './navMenu.vue'
</script>

<template>
  <header class="bg-secondary">
    <NavMenu />
  </header>
  <section class="container">
    <h2>Nuestros horarios de servicio</h2>

    <h3>Lunes - Viernes</h3>
    <ul>
      <li>8:00 AM - 11:00 AM</li>
      <li>2:00 PM - 8:00 PM</li>
    </ul>

    <h3>Sábados</h3>
    <ul>
      <li>9:00 AM - 5:00 PM</li>
    </ul>
  </section>

  <section class="container">
    <h2>¡Visítanos!</h2>
    <p>Estamos ubicados en Tulipanes 1535, Sin Nombre de Col 1, 67755 Linares, N.L.</p>

    <!-- Contenedor para hacer el iframe responsive -->
    <div class="map-container">
      <iframe
        title="Ubicación de CAPEL Linares en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8817356865093!2d-99.54983772498584!3d24.867888477924424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867cede6cf0032fb%3A0xd1de503805c9c908!2sCAPEL%20Linares%2C%20Centro%20de%20Atenci%C3%B3n%20Psicol%C3%B3gica%20Educativa%20y%20de%20Lenguaje.!5e0!3m2!1ses-419!2smx!4v1755705717212!5m2!1ses-419!2smx"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor con relación de aspecto para que el mapa sea responsive */
.map-container {
  position: relative;
  padding-bottom: 56.25%; /* Relación 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px; /* opcional, esquinas redondeadas */
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
section {
  padding: 50px 20px; /* Espaciado interno amplio */
  margin: 20px auto; /* Centrado horizontal con margen vertical */
  max-width: 1000px; /* Limita el ancho para mejor legibilidad */
  border-radius: 12px; /* Bordes redondeados */
  box-shadow: 0 4px 20px var(--color-sombra-section); /* Sombra con variable CSS */
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease; /* Animaciones suaves */
}

/* Efecto hover en secciones */
section:hover {
  transform: scale(1.02); /* Zoom ligeramente más perceptible */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Sombra más definida y profunda */
  transition: all 0.3s ease-in-out; /* Transición suave para todos los cambios */
  cursor: pointer; /* Indica interactividad */
  border-radius: 6px; /* Bordes ligeramente redondeados para suavizar el diseño */
}

/* =========================================================
   Títulos dentro de section
   ========================================================= */
section h2 {
  font-size: 1.4rem;
  font-weight: 700;
}

/* =========================================================
   Párrafos y listas
   ========================================================= */
section p {
  line-height: 1.7; /* Mejor legibilidad */
}

section ul {
  padding-left: 1.2em; /* Sangría para viñetas */
}

/* Espaciado horizontal en párrafos y listas */
section p,
section ul {
  padding: 0 15px;
}

/* Espaciado entre elementos de lista */
section li {
  margin-bottom: 10px;
}

/* =========================================================
   Responsividad
   ========================================================= */
@media screen and (max-width: 600px) {
  section {
    padding: 30px 15px;
    margin: 10px;
  }

  section h2 {
    font-size: 1.3rem;
  }

  section p,
  section li {
    font-size: 0.95rem;
  }

  /* Pantallas muy pequeñas */
  @media screen and (max-width: 400px) {
    section {
      padding: 20px 10px;
      margin: 5px;
    }

    section h2 {
      font-size: 1.2rem;
    }

    section p,
    section li {
      font-size: 0.9rem;
    }
  }
}
</style>
