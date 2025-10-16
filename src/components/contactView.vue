<template>
  <section id="contacto">
    <!--
  <fieldset class="d-inline-flex align-items-center gap-2">

    <legend class="mb-0 fw-semibold">¿Cómo te gustaría contactarnos?</legend>

    <label for="contacto-medio" class="visually-hidden">Medio de contacto</label>
    <select id="contacto-medio"
            name="contacto_medio"
            v-model="medio"
            class="form-select"
            required>
      <option value="" disabled selected>Selecciona una opción</option>
      <option value="whatsapp">WhatsApp</option>
      <!--option-- value="email">Email</!--option
    </select>
    </fieldset>-->

    <!-- Opción WhatsApp -->
    <div class="mt-3">
      <!-- v-if="medio === 'whatsapp'" -->
      <p>Puedes escribirnos directamente por WhatsApp:</p>
      <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="btn btn-success">
        Abrir chat en WhatsApp
      </a>

      <p class="mt-3">O escanea este código QR:</p>
      <img :src="qrCodeUrl" alt="Código QR para WhatsApp" style="max-width: 200px" />
    </div>

    <!-- Opción Email
  <div v-else-if="medio === 'email'" class="mt-3">
    <p>Envíanos un correo electrónico:</p>
    <a :href="`mailto:${email}`" class="btn btn-primary">
      Enviar Email
    </a>
  </div>-->
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const medio = ref('')
const telefono = '8211451697' // Número en formato internacional sin "+"
const mensaje = 'Hola, me gustaría recibir más información.' // Mensaje inicial
const email = 'contacto@centrocapel.org'

// Link directo a WhatsApp
const whatsappLink = computed(() => {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
})

// Generar QR usando API pública de QR Code
const qrCodeUrl = computed(() => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink.value)}`
})
</script>

<style scoped>
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
