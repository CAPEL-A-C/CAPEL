<template>
  <section>
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

  <section>
    <h2>¡Visítanos!</h2>
    <p>Estamos ubicados en Tulipanes 1535, Sin Nombre de Col 1, 67755 Linares, N.L.</p>

    <!-- Contenedor para hacer el iframe responsive -->
    <div class="map-container">
      <iframe title="Ubicación de CAPEL Linares en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8817356865093!2d-99.54983772498584!3d24.867888477924424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867cede6cf0032fb%3A0xd1de503805c9c908!2sCAPEL%20Linares%2C%20Centro%20de%20Atenci%C3%B3n%20Psicol%C3%B3gica%20Educativa%20y%20de%20Lenguaje.!5e0!3m2!1ses-419!2smx!4v1755705717212!5m2!1ses-419!2smx"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
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
</style>
