<template>
  <div id="contacto" class="container py-4">
    <!-- Opción WhatsApp -->
    <div class="mt-3">
      <!-- v-if="medio === 'whatsapp'" -->
      <h2>Puedes escribirnos directamente por WhatsApp:</h2>
      <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="btn btn-success">
        Abrir chat en WhatsApp
      </a>

      <p class="mt-3">O escanea este código QR:</p>
      <img :src="qrCodeUrl" alt="Código QR para WhatsApp" style="max-width: 200px" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const telefono = '8211451697' // Número en formato internacional sin "+"
const mensaje = 'Hola, me gustaría recibir más información.' // Mensaje inicial

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
