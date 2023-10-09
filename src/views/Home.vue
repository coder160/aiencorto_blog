<template>
  <HeroSection :hero_data="hero_data"/>

  <v-data-iterator v-model:items-per-page="itemsPorPagina" v-model:page="paginaActual" :items="blogEntradas"
    :search="consultaEntrada" :sort-by="ordenarEntradas">

    <template v-slot:default="props">
      <FeedSection :entradasBlog="props" v-model:consultaEntrada="consultaEntrada" v-model:filtroEntradas="filtroEntradas"
        v-model:ordenEntradas="ordenEntradas" v-model:filtros="filtros">
      </FeedSection>
    </template>

    <template v-slot:no-data>
      <v-alert class="ma-2" type="info">Sin resultados. Verifique su consulta.</v-alert>
    </template>

    <template v-slot:footer>
      <FooterSection :entradasBlog="blogEntradas" v-model:itemsPorPaginaOpciones="itemsPorPaginaOpciones"
        v-model:itemsPorPagina="itemsPorPagina" v-model:paginaActual="paginaActual"
        v-model:numeroDePaginas="numeroDePaginas">
      </FooterSection>
    </template>
    
  </v-data-iterator>
</template>

<script setup>
import { Entradas } from '../assets/entradas.js'
import { ref, computed } from 'vue'
import FeedSection from '@/components/FeedSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import FooterSection from '@/components/FooterSection.vue'

//Entradas
const blogEntradas = ref(Entradas)
//Hero Data
const hero_data = ref({
  'encabezado': 'Bienvenido',
  'titulo': 'AI en Corto',
  'subtitulo' : 'Blog',
  'imagen':'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
  'altura':450
})
//Feed Data
const consultaEntrada = ref('')
const filtroEntradas = ref('fecha')
const ordenEntradas = ref('asc')
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



