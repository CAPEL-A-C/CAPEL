<template>
  <!-- Encabezado principal -->
  <section id="bgEncabezado">
    <div id="Encabezado" class="bg-secondary text-md-center align-content-center">
      <h1>CAPEL A.C.</h1>
      <p>Centro de Atención Psicológica, Educatica y de Lenguaje</p>
      <hr />
      <p><small class="text-body-secondary">"Servicios terapeuticos con calidez humana"</small></p>
    </div>
  </section>
  <section id="Info" class="card mb-3 bg-body-secondary">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Acerca de Nosotros</h5>
          <hr />
          <p class="card-text">
            CAPEL es una Asociación Civil que atiende a niños, adolescentes y adultos con algun
            transtorno del neurodesarrollo.
          </p>
          <p class="card-text">
            Nuestros servicios estan enfocados en mejorar la calidad de vida en ellos y sus familias
            proviendo asi la inclusion en la vida social y educativa.
          </p>
        </div>
      </div>
      <div class="col-md-2">
        <img src="./icons/logo.png" class="img-fluid rounded-start" alt="CAPEL A.C logo" />
      </div>
    </div>
  </section>
  <section id="Servicios" class="row justify-content-center mt-5 text-center bg-transparent">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
      v-for="(servicio, index) in servicios"
      :key="index"
    >
      <div class="card h-100 shadow-sm border-0" style="width: 18rem">
        <img :src="servicio.img" class="card-img-top mx-auto d-block" alt="Imagen de servicio" />
        <div class="card-body">
          <!-- Si hay varios párrafos -->
          <p v-for="(parrafo, i) in servicio.texto" :key="i" class="card-text text-muted">
            {{ parrafo }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const servicios = ref([
  {
    img: 'https://static.vecteezy.com/system/resources/previews/027/711/267/original/cartoon-illustration-of-psychotherapy-practice-therapy-session-treatment-of-stress-addictions-and-mental-problems-girl-and-psychologist-on-sofa-vector.jpg',
    texto: ['Terapia Psicológica'],
  },
  {
    img: 'https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-terapia-habla_52683-78848.jpg',
    texto: ['Terapia del Leguaje'],
  },
  {
    img: 'https://img.freepik.com/vector-premium/ilustracion-terapia-ocupacional-diseno-plano-dibujado-mano_23-2149366252.jpg?w=2000',
    texto: ['Terapia Ocupacional'],
  },
  {
    img: 'https://www.shutterstock.com/image-vector/child-learning-letters-mother-flashcards-600nw-1669058839.jpg',
    texto: ['Intervención Temprana'],
  },
  {
    img: 'https://th.bing.com/th/id/R.e44c111c3c005aa706cb5aee18671d5e?rik=00ZdaFTJkCH6ag&pid=ImgRaw&r=0',
    texto: ['Orientación a Padres y Maestros'],
  },
  {
    img: 'https://www.educacionactiva.com/wp-content/uploads/2019/09/Captura-de-pantalla-2019-09-23-a-las-17.10.18.png',
    texto: ['Grupos para Padres'],
  },
  {
    img: 'https://img.freepik.com/vector-gratis/gente-negocios-pie-portapapeles-lista-verificacion_74855-4772.jpg',
    texto: ['Evaluaciones', 'Diagnostica, Psicológica, de Lenguaje y Comunicación'],
  },
])
</script>

<style scoped>
#bgEncabezado {
  background-size: cover;   /* hace que la imagen cubra todo el ancho */
  background-position: center; /* centra la imagen */
  background-repeat: no-repeat;
  padding: 60px 0; /* espacio arriba y abajo */
  position: relative;
  z-index: -1;
}

#Encabezado {
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
}

#Encabezado hr {
  height: 20px;
  margin: auto 50% auto 45%;
}
hr {
  width: 10%;
  color: chocolate;
}
#Servicios .card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

#Servicios .card:hover {
  transform: translateY(-8px); /* se eleva un poco */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* sombra más marcada */
}

div {
  margin: 0 25px 0 25px;
}

img {
  width: 150px;
}
</style>
