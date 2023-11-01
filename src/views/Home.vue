<template>
  <HeroSection :hero_data="hero_data" />

  <v-data-iterator :items="blogEntradas" :search="consultaEntrada" :sort-by="ordenarEntradas"
    v-model:items-per-page="itemsPorPagina" v-model:page="paginaActual">
    <template v-slot:default="props">
      <FeedSection :entradasBlog="props" v-model:filtros="filtros" v-model:ordenEntradas="ordenEntradas"
        v-model:consultaEntrada="consultaEntrada" v-model:filtroEntradas="filtroEntradas">
      </FeedSection>
    </template>
    <template v-slot:no-data>
      <FeedSection :entradasBlog="blogEntradas" v-model:filtros="filtros" v-model:ordenEntradas="ordenEntradas"
        v-model:consultaEntrada="consultaEntrada" v-model:filtroEntradas="filtroEntradas">
        <v-alert class="ma-2" type="info">Sin resultados. Verifique su consulta.</v-alert>
      </FeedSection>
    </template>
  </v-data-iterator>

  <FooterSection :entradasBlog="blogEntradas" v-model:itemsPorPaginaOpciones="itemsPorPaginaOpciones"
    v-model:itemsPorPagina="itemsPorPagina" v-model:paginaActual="paginaActual"
    v-model:numeroDePaginas="numeroDePaginas" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { Entradas } from '../assets/entradas.js'
import FeedSection from '@/components/FeedSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import FooterSection from '@/components/FooterSection.vue'

//Entradas
const blogEntradas = ref(Entradas)
//Hero Data
const hero_data = ref({
  'encabezado': 'Bienvenido',
  'titulo': 'AI en Corto',
  'subtitulo': 'Blog',
  'imagen': 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
  'altura': 450
})
//Feed Data
const consultaEntrada = ref('')
const filtroEntradas = ref('fecha')
const ordenEntradas = ref('desc')
const filtros = ref(['fecha', 'categoria', 'autor', 'titulo'])
const ordenarEntradas = computed(() => {
  return [{
    key: filtroEntradas.value,
    order: ordenEntradas.value,
  }]
})
//Footer Data
const itemsPorPaginaOpciones = ref([3, 6, 9, 12, 15])
const itemsPorPagina = ref(6)
const paginaActual = ref(1)
const numeroDePaginas = computed(() => {
  return Math.ceil(blogEntradas.value.length / itemsPorPagina.value)
})
</script>



